library(raster)
library(tiff)

files <- list.files("data/testing", pattern = ".tif", full.names = TRUE)

target_file <- files[1]

r1 <- raster(target_file)
band4 <- raster(target_file, band = 4)
s1 <- stack(target_file)

plotRGB(s1, r = 3, g = 2, b = 1, stretch = "lin")
