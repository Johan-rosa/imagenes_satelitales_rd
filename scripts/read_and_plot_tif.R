# Paquetes ----------------------------------------------------------------
library(raster)
library(tiff)
library(dplyr)
library(ggplot2)

imagenes <- list.files("data/testing", pattern = ".tif", full.names = TRUE)

# Usando raster -----------------------------------------------------------
imagenes[1] |>
  stack() |>
  plotRGB(r =  16, g = 17, b = 18, scale = 0.0255, stretch = "lin")

# Usando ggplot2 ----------------------------------------------------------
imagenes[1] |>
  stack() |>
  as.data.frame(xy = TRUE) |>
  mutate(rgb = rgb(TCI_R, TCI_G, TCI_B, maxColorValue = 0.0255)) |>
  ggplot(aes(x, y, fill = rgb)) +
  geom_raster() +
  scale_fill_identity() +
  theme_void()
