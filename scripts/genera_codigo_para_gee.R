
# Paquetes ----------------------------------------------------------------
library(dplyr)
library(sf)
library(glue)
library(stringr)

# Importing data ----------------------------------------------------------
municipios_sf <- readRDS("data/rds/municipios_sf.rds") %>%
  mutate(
    municipio_label = stringi::stri_trans_general(str = municipio_label, id = "Latin-ASCII")
  )

get_gee_code <- function(list){
  file <- glue("{list$id}_{str_replace_all(tolower(list$municipio_label), '\\\\s', '_')}")
  text <- glue(
    "

// {list$municipio_label} =====================================
Map.setCenter({list$centroid_x}, {list$centroid_y}, 12);

// Coordinates for the bounds of a rectangle.
var xMin = {list$xmin};
var xMax = {list$xmax};
var yMin = {list$ymin};
var yMax = {list$ymax};

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({{
  image: dataset.mean(),
  description: '{file}',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
}});")

  return(text)
}

# prueba para un municipio
get_gee_code(municipios_sf[1, ])

purrr::map_chr(
  1:nrow(municipios_sf), \(x) {
  get_gee_code(sf::st_drop_geometry(municipios_sf[x, ]))
}) |>
  # con la siguiente linea se puede copiar y pegar en GEE
  paste(collapse = "\n") %>% clipr::write_clip()
