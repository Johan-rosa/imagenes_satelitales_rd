library(dplyr)
library(sf)
library(glue)
library(stringr)


municipios <- rgdal::readOGR(dsn = "data/shapefiles/municipio/MUNCenso2010.shp") |> 
  sp::spTransform(sp::CRS("+proj=longlat +datum=WGS84"))

municipios_sf <- st_as_sf(municipios)

municipios_sf <- municipios_sf %>%
  janitor::clean_names() |> 
  mutate(
    toponimia = stringi::stri_trans_general(str = toponimia, id = "Latin-ASCII"),
    centroid = purrr::map(geometry,
      \(x) st_centroid(x) |> st_coordinates() |> as.data.frame()
    ),
    bbox = purrr::map(geometry, \(x){st_bbox(x) |> as.list() |> as.data.frame()})
  )


get_gee_code <- function(list){
  file <- glue(
    "reg_{list$reg}-prov_{list$prov}-mun_{list$mun}-name__{str_replace_all(tolower(list$toponimia), '\\\\s', '_')}")
  #browser()
  text <- glue(
    "
    
// {list$toponimia} =====================================
Map.setCenter({list$centroid[[1]][[1]]}, {list$centroid[[1]][[2]]}, 12);

// Coordinates for the bounds of a rectangle.
var xMin = {list$bbox[[1]]$xmin};
var xMax = {list$bbox[[1]]$xmax};
var yMin = {list$bbox[[1]]$ymin};
var yMax = {list$bbox[[1]]$ymax};

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({{
  image: dataset.mean(),
  description: '{file}',
  folder: 'sattelite',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
}});")
  
  print(text)
  return(text)
}



purrr::map_chr(1:nrow(municipios_sf), \(x) {
  get_gee_code(sf::st_drop_geometry(municipios_sf[x, ]))
}) |>
  paste(collapse = "\n") |> clipr::write_clip()

