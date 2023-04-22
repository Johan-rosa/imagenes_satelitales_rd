function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));

  return image.updateMask(mask).divide(10000);
}

var dataset = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
                  .filterDate('2016-01-01', '2021-01-30')
                  // Pre-filter to get less cloudy granules.
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 20))
                  .map(maskS2clouds);

var visualization = {
  min: 0.0,
  max: 0.3,
  bands: ['B4', 'B3', 'B2'],
};


Map.addLayer(dataset.mean(), visualization, 'RGB');

// Santo Domingo De Guzman =====================================
Map.setCenter(-69.9417508242639, 18.4849087414287, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.9992758387881;
var xMax = -69.8746300328502;
var yMin = 18.4227387823931;
var yMax = 18.5475933388703;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '100101_santo_domingo_de_guzman',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Azua =====================================
Map.setCenter(-70.8098249354117, 18.42095836028, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9770885945814;
var xMax = -70.676691000953;
var yMin = 18.2483762994987;
var yMax = 18.5732722636411;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050201_azua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Charcas =====================================
Map.setCenter(-70.5460926957265, 18.3918063348786, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6350044865493;
var xMax = -70.4693817603041;
var yMin = 18.2726982825613;
var yMax = 18.4979842418008;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050202_las_charcas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Yayas De Viajama =====================================
Map.setCenter(-70.9996598409189, 18.6039968388462, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.161560493784;
var xMax = -70.8322051125686;
var yMin = 18.481799513629;
var yMax = 18.7058641796645;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050203_las_yayas_de_viajama',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Padre Las Casas =====================================
Map.setCenter(-70.9113827424957, 18.8090055894331, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.0540728318385;
var xMax = -70.7755069397509;
var yMin = 18.6630772124335;
var yMax = 19.0025300532819;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050204_padre_las_casas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Peralta =====================================
Map.setCenter(-70.7827149407522, 18.6019409056709, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8577441085903;
var xMax = -70.7090382621451;
var yMin = 18.5143381624921;
var yMax = 18.6674628122384;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050205_peralta',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana Yegua =====================================
Map.setCenter(-70.8880983191788, 18.413785692362, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.983344410286;
var xMax = -70.8133646038504;
var yMin = 18.3690843686611;
var yMax = 18.4697843331891;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050206_sabana_yegua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pueblo Viejo =====================================
Map.setCenter(-70.7802810958805, 18.3931351754445, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8230940091059;
var xMax = -70.7446565019428;
var yMin = 18.3490889791458;
var yMax = 18.4532770133177;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050207_pueblo_viejo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Tabara Arriba =====================================
Map.setCenter(-70.9151056206875, 18.496034087697, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.0471743699902;
var xMax = -70.8180280699873;
var yMin = 18.3468712086894;
var yMax = 18.6203740571303;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050208_tabara_arriba',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Guayabal =====================================
Map.setCenter(-70.765006372456, 18.7174424478404, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8651298632337;
var xMax = -70.6665599840329;
var yMin = 18.6355865033306;
var yMax = 18.8079058279939;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050209_guayabal',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Estebania =====================================
Map.setCenter(-70.6485343850667, 18.5346621855073, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.7383664616781;
var xMax = -70.5009952017987;
var yMin = 18.4253865859089;
var yMax = 18.6725566485404;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '050210_estebania',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Neiba =====================================
Map.setCenter(-71.3792045191469, 18.4995435347443, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5168824237408;
var xMax = -71.2095222590212;
var yMin = 18.34898370652;
var yMax = 18.6290128297397;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060301_neiba',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Galvan =====================================
Map.setCenter(-71.3279832517698, 18.4897385360017, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4408812839289;
var xMax = -71.1859316669912;
var yMin = 18.3749535029803;
var yMax = 18.6060559622083;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060302_galvan',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Tamayo =====================================
Map.setCenter(-71.1706469447296, 18.5089945341551, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.335227628958;
var xMax = -70.9846730210301;
var yMin = 18.3252393804409;
var yMax = 18.6289078942061;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060303_tamayo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Jaragua =====================================
Map.setCenter(-71.5023841747525, 18.535911253666, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5641714458567;
var xMax = -71.4445254627659;
var yMin = 18.4601158281228;
var yMax = 18.6286455194459;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060304_villa_jaragua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Los Rios =====================================
Map.setCenter(-71.5751744661547, 18.5638756932602, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6336346759799;
var xMax = -71.5116088788048;
var yMin = 18.4758524141715;
var yMax = 18.6536982200814;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060305_los_rios',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Barahona =====================================
Map.setCenter(-71.14788489118, 18.1835532129397, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2119771786686;
var xMax = -71.0551844384387;
var yMin = 18.1154374507553;
var yMax = 18.2584091365643;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060401_barahona',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cabral =====================================
Map.setCenter(-71.2465958670202, 18.1999052706299, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.3026517692532;
var xMax = -71.2015717798289;
var yMin = 18.1152407443112;
var yMax = 18.2752004257934;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060402_cabral',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Enriquillo =====================================
Map.setCenter(-71.3161162124888, 17.9779513450761, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4382070902799;
var xMax = -71.188263573516;
var yMin = 17.851907388438;
var yMax = 18.1051610507349;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060403_enriquillo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Paraiso =====================================
Map.setCenter(-71.2089649911143, 18.0266197029864, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2702280985545;
var xMax = -71.1341886015999;
var yMin = 17.9462205047284;
var yMax = 18.1235228242813;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060404_paraiso',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Vicente Noble =====================================
Map.setCenter(-71.0892282857766, 18.3984498579755, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.206896081366;
var xMax = -70.9777253332101;
var yMin = 18.3227864993612;
var yMax = 18.4974788865309;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060405_vicente_noble',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Penon =====================================
Map.setCenter(-71.2093385355737, 18.2975870584826, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2481324111804;
var xMax = -71.1572910889576;
var yMin = 18.2522844554239;
var yMax = 18.3349636757508;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060406_el_penon',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// La Cienaga =====================================
Map.setCenter(-71.1337724463336, 18.092539580745, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2035856527951;
var xMax = -71.059418295457;
var yMin = 18.0300747380311;
var yMax = 18.1609659538306;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060407_la_cienaga',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Fundacion =====================================
Map.setCenter(-71.1533214659495, 18.2631045362108, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2219462055968;
var xMax = -71.0918974236263;
var yMin = 18.2245104446915;
var yMax = 18.2992001527555;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060408_fundacion',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Salinas =====================================
Map.setCenter(-71.3444163309529, 18.2324452113748, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4287238560765;
var xMax = -71.2713406851307;
var yMin = 18.166654725398;
var yMax = 18.3075520871676;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060409_las_salinas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Polo =====================================
Map.setCenter(-71.3179688273533, 18.1206080473198, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4277852723877;
var xMax = -71.1986171876446;
var yMin = 18.0336100117055;
var yMax = 18.2081874201435;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060410_polo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Jaquimeyes =====================================
Map.setCenter(-71.0569135830218, 18.3124245169799, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.1724958456695;
var xMax = -70.947753611045;
var yMin = 18.2572179340067;
var yMax = 18.3508718629527;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '060411_jaquimeyes',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Dajabon =====================================
Map.setCenter(-71.6285454059875, 19.5721544831664, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7460396791641;
var xMax = -71.4995783889712;
var yMin = 19.4970527519175;
var yMax = 19.6450227364076;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '040501_dajabon',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Loma De Cabrera =====================================
Map.setCenter(-71.6133565171687, 19.4218516221633, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6987670364883;
var xMax = -71.5038658769607;
var yMin = 19.3321135226625;
var yMax = 19.5329862759528;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '040502_loma_de_cabrera',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Partido =====================================
Map.setCenter(-71.5180983054353, 19.5011877996808, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6104119110565;
var xMax = -71.4255970718695;
var yMin = 19.4269689287242;
var yMax = 19.5842757299693;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '040503_partido',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Restauracion =====================================
Map.setCenter(-71.6477036135567, 19.3059543809426, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7827337334764;
var xMax = -71.5026609466104;
var yMin = 19.2300857411194;
var yMax = 19.3789140501379;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '040504_restauracion',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Pino =====================================
Map.setCenter(-71.4976428136176, 19.4061888425451, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5467148158334;
var xMax = -71.4587460847637;
var yMin = 19.3179504944351;
var yMax = 19.494008293619;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '040505_el_pino',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Francisco De Macoris =====================================
Map.setCenter(-70.2152105564194, 19.3492035051461, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.371036252034;
var xMax = -70.0144628655372;
var yMin = 19.1553405603813;
var yMax = 19.522664401711;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030601_san_francisco_de_macoris',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Arenoso =====================================
Map.setCenter(-69.768176530112, 19.1910101235262, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.8871032939016;
var xMax = -69.6496721154008;
var yMin = 19.1389162313497;
var yMax = 19.2387929708774;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030602_arenoso',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Castillo =====================================
Map.setCenter(-70.034056263993, 19.2347809599001, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1119923691015;
var xMax = -69.9550603648126;
var yMin = 19.176106242782;
var yMax = 19.3043391357374;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030603_castillo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pimentel =====================================
Map.setCenter(-70.1320980647191, 19.2097279891911, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1888653466297;
var xMax = -70.0716353399405;
var yMin = 19.1492851443265;
var yMax = 19.2830387269373;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030604_pimentel',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Riva =====================================
Map.setCenter(-69.8836903069853, 19.1504811325708, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.999485781289;
var xMax = -69.7201730696485;
var yMin = 19.0440368165022;
var yMax = 19.2603333871307;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030605_villa_riva',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Guaranas =====================================
Map.setCenter(-70.223930508731, 19.200984312932, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2870086154172;
var xMax = -70.1691693141017;
var yMin = 19.1417720359427;
var yMax = 19.2589685843527;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030606_las_guaranas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Eugenio Maria De Hostos =====================================
Map.setCenter(-70.0219926461227, 19.1402834324839, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0865349819105;
var xMax = -69.9542494749471;
var yMin = 19.0731606346493;
var yMax = 19.2081401641039;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '030607_eugenio_maria_de_hostos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Comendador =====================================
Map.setCenter(-71.7205098575836, 18.9296983501555, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.8865191972065;
var xMax = -71.6167812751992;
var yMin = 18.8192772627718;
var yMax = 19.0179648081616;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070701_comendador',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Banica =====================================
Map.setCenter(-71.6408684343633, 19.0286634406295, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.809134376848;
var xMax = -71.5032518697566;
var yMin = 18.9424800355944;
var yMax = 19.0936314115707;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070702_banica',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Llano =====================================
Map.setCenter(-71.6704333357989, 18.8060226370798, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7323251845524;
var xMax = -71.6152822233871;
var yMin = 18.7473522429278;
var yMax = 18.8850234407507;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070703_el_llano',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Hondo Valle =====================================
Map.setCenter(-71.6974481689292, 18.7076503567701, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7901883598012;
var xMax = -71.6228633042531;
var yMin = 18.6621754817899;
var yMax = 18.7599350929528;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070704_hondo_valle',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pedro Santana =====================================
Map.setCenter(-71.5153764683027, 19.1681102009692, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.706618927452;
var xMax = -71.3177873564713;
var yMin = 19.062908198765;
var yMax = 19.2839941104655;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070705_pedro_santana',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Juan Santiago =====================================
Map.setCenter(-71.607098879854, 18.7328344804481, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6548290590159;
var xMax = -71.5670397212185;
var yMin = 18.6529589126586;
var yMax = 18.8041308404439;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '070706_juan_santiago',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Seibo =====================================
Map.setCenter(-69.0658014404547, 18.7747159438765, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.3283945163231;
var xMax = -68.8049319956802;
var yMin = 18.5264329101408;
var yMax = 18.9561975269822;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '080801_el_seibo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Miches =====================================
Map.setCenter(-68.983998230313, 18.9558792145594, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.1862843455078;
var xMax = -68.7758662420126;
var yMin = 18.8804843455843;
var yMax = 19.0437594963308;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '080802_miches',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Moca =====================================
Map.setCenter(-70.5040010834888, 19.4550610449907, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6106826556982;
var xMax = -70.4015695401746;
var yMin = 19.3440774674164;
var yMax = 19.6118490627791;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '010901_moca',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cayetano Germosen =====================================
Map.setCenter(-70.4757346540003, 19.3428478029868, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.5013032359989;
var xMax = -70.4494183925145;
var yMin = 19.3077462566411;
var yMax = 19.3807884903556;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '010902_cayetano_germosen',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Gaspar Hernandez =====================================
Map.setCenter(-70.2687704428711, 19.5961686706714, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.4128921028487;
var xMax = -70.0818208641674;
var yMin = 19.5143904437433;
var yMax = 19.7140174424433;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '010903_gaspar_hernandez',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Jamao Al Norte =====================================
Map.setCenter(-70.4502951943822, 19.6086416928486, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.5074584465412;
var xMax = -70.366760802659;
var yMin = 19.5248054177059;
var yMax = 19.668898972181;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '010904_jamao_al_norte',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Jimani =====================================
Map.setCenter(-71.8297988548641, 18.5047865165842, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -72.011472398157;
var xMax = -71.6695069305342;
var yMin = 18.3455193645452;
var yMax = 18.6564745399319;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061001_jimani',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Duverge =====================================
Map.setCenter(-71.5945142570148, 18.3163410201728, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7253144108137;
var xMax = -71.4629666276269;
var yMin = 18.194181719925;
var yMax = 18.4433920934965;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061002_duverge',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// La Descubierta =====================================
Map.setCenter(-71.7516204573894, 18.6079602654799, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.8198710898223;
var xMax = -71.6823276488074;
var yMin = 18.5062509884111;
var yMax = 18.6901319915809;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061003_la_descubierta',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Postrer Rio =====================================
Map.setCenter(-71.6433118544076, 18.6072562195294, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.699954178031;
var xMax = -71.5739030199377;
var yMin = 18.5292697143889;
var yMax = 18.6685737837421;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061004_postrer_rio',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cristobal =====================================
Map.setCenter(-71.2986719974501, 18.3397197757818, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.3614950717825;
var xMax = -71.2113626550141;
var yMin = 18.2652793819382;
var yMax = 18.4192460701832;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061005_cristobal',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Mella =====================================
Map.setCenter(-71.4447646312758, 18.3099928985866, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5367752479443;
var xMax = -71.346010655731;
var yMin = 18.13786794456;
var yMax = 18.4602537038145;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061006_mella',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Higuey =====================================
Map.setCenter(-68.6434143152261, 18.6701779918106, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -68.9376779328666;
var xMax = -68.3229591969468;
var yMin = 18.44123558981;
var yMax = 18.9741485936797;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '081101_higuey',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Rafael Del Yuma =====================================
Map.setCenter(-68.6818642395569, 18.3922076534816, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -68.8977314629337;
var xMax = -68.4288244992221;
var yMin = 18.1930564658299;
var yMax = 18.5437198707042;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '081102_san_rafael_del_yuma',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// La Romana =====================================
Map.setCenter(-68.8342883245636, 18.3322989558486, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.0262658676838;
var xMax = -68.5684175740216;
var yMin = 18.0956707519824;
var yMax = 18.5219138683054;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '081201_la_romana',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Guaymate =====================================
Map.setCenter(-68.9647488275808, 18.5597132587397, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.0976733424743;
var xMax = -68.8424032009022;
var yMin = 18.474814644457;
var yMax = 18.6589095531286;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '081202_guaymate',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Hermosa =====================================
Map.setCenter(-69.0433221127945, 18.4513562990584, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.1196061417095;
var xMax = -68.963955975472;
var yMin = 18.3914562058722;
var yMax = 18.5108282341898;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '081203_villa_hermosa',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// La Vega =====================================
Map.setCenter(-70.5262498718168, 19.2394168054844, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.7229748895133;
var xMax = -70.2711664109833;
var yMin = 19.0392336634722;
var yMax = 19.3774475351278;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '021301_la_vega',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Constanza =====================================
Map.setCenter(-70.6747822281055, 18.8768090544948, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8701954694269;
var xMax = -70.5144442124352;
var yMin = 18.6844993898332;
var yMax = 19.0456670154074;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '021302_constanza',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Jarabacoa =====================================
Map.setCenter(-70.7203056766306, 19.0860614762639, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9602070073744;
var xMax = -70.5193496108176;
var yMin = 18.9832643245979;
var yMax = 19.2286296979617;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '021303_jarabacoa',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Jima Abajo =====================================
Map.setCenter(-70.3955286699234, 19.128914201928, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.4807267431356;
var xMax = -70.3228797563195;
var yMin = 19.0493228424259;
var yMax = 19.1874664708788;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '021304_jima_abajo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Nagua =====================================
Map.setCenter(-69.9393464509554, 19.3766317228173, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1298998462269;
var xMax = -69.7438254882729;
var yMin = 19.2019090101776;
var yMax = 19.49855174414;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031401_nagua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cabrera =====================================
Map.setCenter(-69.9602288078886, 19.5800867911056, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0614954007654;
var xMax = -69.8685017194422;
var yMin = 19.4773757376879;
var yMax = 19.6831956117051;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031402_cabrera',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Factor =====================================
Map.setCenter(-69.9155876690624, 19.2926533295655, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0219528258777;
var xMax = -69.8418788262505;
var yMin = 19.2328270191443;
var yMax = 19.3557918385919;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031403_el_factor',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Rio San Juan =====================================
Map.setCenter(-70.076895552526, 19.55022021457, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2017445882223;
var xMax = -69.9561436388619;
var yMin = 19.4524530614651;
var yMax = 19.6813892416513;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031404_rio_san_juan',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Monte Cristi =====================================
Map.setCenter(-71.6134243619499, 19.7845395366371, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.844048576328;
var xMax = -71.4814579836139;
var yMin = 19.6077853545193;
var yMax = 19.9214542452314;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041501_monte_cristi',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Castanuelas =====================================
Map.setCenter(-71.509262749196, 19.7328147369762, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5732891260336;
var xMax = -71.4481596425239;
var yMin = 19.6707358319259;
var yMax = 19.8039374355949;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041502_castanuelas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Guayubin =====================================
Map.setCenter(-71.3048937810888, 19.6768840656091, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4793033655331;
var xMax = -71.1303309170857;
var yMin = 19.5236034703749;
var yMax = 19.8972152128808;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041503_guayubin',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Matas De Santa Cruz =====================================
Map.setCenter(-71.4849753696407, 19.6205500910069, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5271459863782;
var xMax = -71.4367228499765;
var yMin = 19.5620521986065;
var yMax = 19.6894833621006;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041504_las_matas_de_santa_cruz',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pepillo Salcedo =====================================
Map.setCenter(-71.6540077638997, 19.6656553492364, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7620365347798;
var xMax = -71.5569676571666;
var yMin = 19.6032589845885;
var yMax = 19.7193047660756;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041505_pepillo_salcedo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Vasquez =====================================
Map.setCenter(-71.4399966314758, 19.8079077229096, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5177401596387;
var xMax = -71.3527152391968;
var yMin = 19.7079440550717;
var yMax = 19.9099726181025;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '041506_villa_vasquez',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pedernales =====================================
Map.setCenter(-71.6003712954116, 18.0613539452304, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.7881951633333;
var xMax = -71.3839639258021;
var yMin = 17.4701630457217;
var yMax = 18.290459616253;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061601_pedernales',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Oviedo =====================================
Map.setCenter(-71.4588838822396, 17.8285115755121, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6988248911499;
var xMax = -71.2722862409605;
var yMin = 17.5965855113571;
var yMax = 18.057572666287;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '061602_oviedo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bani =====================================
Map.setCenter(-70.3815664706853, 18.3377238345872, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.587985565508;
var xMax = -70.2262183327824;
var yMin = 18.1928360955399;
var yMax = 18.5093389081914;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '051701_bani',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Nizao =====================================
Map.setCenter(-70.2184371469382, 18.2697569214707, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2537249513588;
var xMax = -70.1850810171641;
var yMin = 18.2239738804548;
var yMax = 18.3141965563852;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '051702_nizao',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Puerto Plata =====================================
Map.setCenter(-70.6928041803725, 19.7146405737775, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8891205085045;
var xMax = -70.5073183555919;
var yMin = 19.5120851653524;
var yMax = 19.9084053390235;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011801_puerto_plata',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Altamira =====================================
Map.setCenter(-70.7909418935266, 19.6609151602193, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.900548801969;
var xMax = -70.7052483521715;
var yMin = 19.5803436873566;
var yMax = 19.7217190084882;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011802_altamira',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Guananico =====================================
Map.setCenter(-70.9212407219428, 19.6992042523108, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9650569620083;
var xMax = -70.8769512408676;
var yMin = 19.6522480110918;
var yMax = 19.7421256643254;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011803_guananico',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Imbert =====================================
Map.setCenter(-70.8665336468179, 19.7625102668918, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9605091097557;
var xMax = -70.7605372115043;
var yMin = 19.7031747394478;
var yMax = 19.8277348169138;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011804_imbert',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Los Hidalgos =====================================
Map.setCenter(-71.0155464336835, 19.7455096888433, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.0807039357111;
var xMax = -70.9472140732495;
var yMin = 19.684412414145;
var yMax = 19.8079506147168;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011805_los_hidalgos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Luperon =====================================
Map.setCenter(-70.9744006617247, 19.8568254326827, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.0861116283321;
var xMax = -70.8556856726094;
var yMin = 19.7542399148807;
var yMax = 19.9321257501271;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011806_luperon',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sosua =====================================
Map.setCenter(-70.4801864465065, 19.7037735647298, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.5931967291358;
var xMax = -70.367391916722;
var yMin = 19.5481542249372;
var yMax = 19.7852728560422;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011807_sosua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Isabela =====================================
Map.setCenter(-71.1322642749101, 19.8132576677836, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2568887836495;
var xMax = -71.0310729908115;
var yMin = 19.7376741754389;
var yMax = 19.8797197399898;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011808_villa_isabela',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Montellano =====================================
Map.setCenter(-70.5926101143444, 19.7082590285058, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6493912409005;
var xMax = -70.5448063236293;
var yMin = 19.6402192197471;
var yMax = 19.7701384895982;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '011809_villa_montellano',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Salcedo =====================================
Map.setCenter(-70.3994504085734, 19.4397453970323, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.457539402781;
var xMax = -70.3331318208569;
var yMin = 19.3360136493533;
var yMax = 19.5575014830072;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031901_salcedo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Tenares =====================================
Map.setCenter(-70.320706382855, 19.4614073110753, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3791597019458;
var xMax = -70.2476028536377;
var yMin = 19.3340511622565;
var yMax = 19.5621715819266;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031902_tenares',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Tapia =====================================
Map.setCenter(-70.3911628090449, 19.2967212790168, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.4469660105807;
var xMax = -70.3431436920415;
var yMin = 19.2295407311069;
var yMax = 19.3531962013615;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '031903_villa_tapia',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Samana =====================================
Map.setCenter(-69.3293587353276, 19.2573729354856, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.4908690875243;
var xMax = -69.149050994815;
var yMin = 19.1615664540355;
var yMax = 19.3639388247001;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '032001_samana',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sanchez =====================================
Map.setCenter(-69.6464990923028, 19.1694552850717, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.771721076876;
var xMax = -69.4739536857399;
var yMin = 18.9921962951007;
var yMax = 19.2926146899447;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '032002_sanchez',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Terrenas =====================================
Map.setCenter(-69.5545890855868, 19.2857751897412, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.6573127961689;
var xMax = -69.4631681661417;
var yMin = 19.2401958737284;
var yMax = 19.3275335184325;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '032003_las_terrenas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Cristobal =====================================
Map.setCenter(-70.1256610553767, 18.4336204425864, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2271331614539;
var xMax = -70.0512554854839;
var yMin = 18.2717287612186;
var yMax = 18.5582920420627;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052101_san_cristobal',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana Grande De Palenque =====================================
Map.setCenter(-70.1614886476333, 18.2593099176745, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1922490646998;
var xMax = -70.122817435347;
var yMin = 18.2272646386865;
var yMax = 18.2890644017428;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052102_sabana_grande_de_palenque',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bajos De Haina =====================================
Map.setCenter(-70.037578369509, 18.4381342642559, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0752383575326;
var xMax = -70.0020479997719;
var yMin = 18.387241364725;
var yMax = 18.4771676241482;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052103_bajos_de_haina',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cambita Garabitos =====================================
Map.setCenter(-70.2261070179843, 18.467553629339, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3225720041579;
var xMax = -70.1496631744585;
var yMin = 18.3891441069216;
var yMax = 18.5523500351612;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052104_cambita_garabitos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Altagracia =====================================
Map.setCenter(-70.2249522180534, 18.6559033370704, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3296022726912;
var xMax = -70.1123909248558;
var yMin = 18.5044937223377;
var yMax = 18.8076306116238;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052105_villa_altagracia',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Yaguate =====================================
Map.setCenter(-70.1961985536913, 18.341768781357, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2887609571267;
var xMax = -70.1259522878314;
var yMin = 18.272705530084;
var yMax = 18.4072681167282;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052106_yaguate',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Gregorio De Nigua =====================================
Map.setCenter(-70.0822267620238, 18.3593408448139, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1184926408879;
var xMax = -70.0369876479235;
var yMin = 18.294949217094;
var yMax = 18.4101274411531;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052107_san_gregorio_de_nigua',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Los Cacaos =====================================
Map.setCenter(-70.3250823007684, 18.5931315646952, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3821547346042;
var xMax = -70.2309751674128;
var yMin = 18.4941508728065;
var yMax = 18.7259384839232;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '052108_los_cacaos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Juan =====================================
Map.setCenter(-71.2410492346326, 18.8929199347624, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4650324500959;
var xMax = -71.038232093447;
var yMin = 18.6157779519999;
var yMax = 19.1787110201385;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072201_san_juan',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bohechio =====================================
Map.setCenter(-71.0133126795003, 18.9322111249694, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.1209587324347;
var xMax = -70.8896339711689;
var yMin = 18.7489210676069;
var yMax = 19.0696508249731;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072202_bohechio',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Cercado =====================================
Map.setCenter(-71.4988347245234, 18.7117904563873, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.585253730906;
var xMax = -71.3974530412084;
var yMin = 18.6075750703415;
var yMax = 18.8114648744077;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072203_el_cercado',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Juan De Herrera =====================================
Map.setCenter(-71.2027060861284, 18.8743918248425, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2529884725232;
var xMax = -71.1476620407046;
var yMin = 18.8174357334127;
var yMax = 18.9336591932405;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072204_juan_de_herrera',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Las Matas De Farfan =====================================
Map.setCenter(-71.4946348813161, 18.9417326041913, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.6526864955756;
var xMax = -71.3462951468817;
var yMin = 18.7814698258301;
var yMax = 19.1273830841528;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072205_las_matas_de_farfan',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Vallejuelo =====================================
Map.setCenter(-71.3519294826337, 18.6697373724163, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4605030192663;
var xMax = -71.2418080655185;
var yMin = 18.5877470518462;
var yMax = 18.7468465683995;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '072206_vallejuelo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Pedro De Macoris =====================================
Map.setCenter(-69.269538537011, 18.4850412797001, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.3480314793143;
var xMax = -69.1632758421729;
var yMin = 18.4249933319342;
var yMax = 18.5398516574644;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092301_san_pedro_de_macoris',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Los Llanos =====================================
Map.setCenter(-69.5019963829047, 18.6229119388105, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.6142139251886;
var xMax = -69.3766657451523;
var yMin = 18.4743548428052;
var yMax = 18.8219529574664;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092302_los_llanos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Ramon Santana =====================================
Map.setCenter(-69.1477385644418, 18.5109777816701, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.2265879723355;
var xMax = -69.0671056826868;
var yMin = 18.3929854050607;
var yMax = 18.6156980668119;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092303_ramon_santana',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Consuelo =====================================
Map.setCenter(-69.257104611366, 18.5844578575151, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.3498024114343;
var xMax = -69.1720449665149;
var yMin = 18.520560163266;
var yMax = 18.6682562576751;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092304_consuelo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Quisqueya =====================================
Map.setCenter(-69.4203965853184, 18.5388388445619, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.500141321885;
var xMax = -69.3342347987016;
var yMin = 18.47758208028;
var yMax = 18.6130606246596;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092305_quisqueya',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Guayacanes =====================================
Map.setCenter(-69.4334699955971, 18.4506308988534, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.5232152588;
var xMax = -69.332912303538;
var yMin = 18.4036258693248;
var yMax = 18.4906406978603;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092306_guayacanes',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cotui =====================================
Map.setCenter(-70.157059434478, 18.9878130866511, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3713460042738;
var xMax = -70.0054355312886;
var yMin = 18.8412179216757;
var yMax = 19.1547021418626;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022401_cotui',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Cevicos =====================================
Map.setCenter(-69.9736634552982, 19.0150197951221, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0563704558055;
var xMax = -69.8945864641051;
var yMin = 18.887410667112;
var yMax = 19.1266258546843;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022402_cevicos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Fantino =====================================
Map.setCenter(-70.3026047399908, 19.1047359679577, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3723290528996;
var xMax = -70.2414517737029;
var yMin = 19.0396260908845;
var yMax = 19.1660546091527;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022403_fantino',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// La Mata =====================================
Map.setCenter(-70.208587325177, 19.0898145254045, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.2833600373873;
var xMax = -70.0966706718956;
var yMin = 18.9727616230371;
var yMax = 19.165710835613;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022404_la_mata',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Santiago =====================================
Map.setCenter(-70.7315412152054, 19.4835078164683, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9085232032253;
var xMax = -70.6159764207609;
var yMin = 19.2840621101726;
var yMax = 19.6509249161138;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012501_santiago',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bisono =====================================
Map.setCenter(-70.8633785331601, 19.5801676649751, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.937345624515;
var xMax = -70.8202070758246;
var yMin = 19.5130971986362;
var yMax = 19.6523083334824;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012502_bisono',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Janico =====================================
Map.setCenter(-70.7951134428691, 19.2353156155063, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.9221356619605;
var xMax = -70.6698564585428;
var yMin = 19.0899097967084;
var yMax = 19.4079750409193;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012503_janico',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Licey Al Medio =====================================
Map.setCenter(-70.6130456755843, 19.4274001828989, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6472378096807;
var xMax = -70.5851689880598;
var yMin = 19.3918914189764;
var yMax = 19.4645695648789;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012504_licey_al_medio',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Jose De Las Matas =====================================
Map.setCenter(-71.025852550944, 19.2634621335483, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2581288149103;
var xMax = -70.7935445823915;
var yMin = 19.0203668739312;
var yMax = 19.4726995205838;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012505_san_jose_de_las_matas',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Tamboril =====================================
Map.setCenter(-70.5986616680258, 19.4984812816454, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6511241588509;
var xMax = -70.5455853708469;
var yMin = 19.4301524221158;
var yMax = 19.5462177676987;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012506_tamboril',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Gonzalez =====================================
Map.setCenter(-70.7871244405355, 19.5642212777413, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.8302864139911;
var xMax = -70.7306836099555;
var yMin = 19.4925269636687;
var yMax = 19.6363834246799;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012507_villa_gonzalez',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Punal =====================================
Map.setCenter(-70.656425826211, 19.3918568670547, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.7203010441891;
var xMax = -70.5788226553379;
var yMin = 19.3463465311724;
var yMax = 19.4490313064352;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012508_punal',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana Iglesia =====================================
Map.setCenter(-70.7401851587338, 19.3423840903474, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.7806847689567;
var xMax = -70.7068754258869;
var yMin = 19.2845506985502;
var yMax = 19.4001506094636;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '012509_sabana_iglesia',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Ignacio De Sabaneta =====================================
Map.setCenter(-71.3188831933322, 19.3884227485839, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.4680512151798;
var xMax = -71.1771184432411;
var yMin = 19.1683860277629;
var yMax = 19.5698734735459;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042601_san_ignacio_de_sabaneta',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Villa Los Almacigos =====================================
Map.setCenter(-71.4422447811993, 19.3228854598743, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.5196747072782;
var xMax = -71.3720117376416;
var yMin = 19.2156731415497;
var yMax = 19.4556372448548;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042602_villa_los_almacigos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Moncion =====================================
Map.setCenter(-71.1706846498629, 19.413496254536, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.2724804805159;
var xMax = -71.0720076088296;
var yMin = 19.3055412188363;
var yMax = 19.4762398882064;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042603_moncion',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Mao =====================================
Map.setCenter(-71.0528489958213, 19.5242287024274, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.1919857816375;
var xMax = -70.8848777186082;
var yMin = 19.4336323252934;
var yMax = 19.6339730314852;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042701_mao',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Esperanza =====================================
Map.setCenter(-70.971419684475, 19.6237050423564, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.0566652463399;
var xMax = -70.8744419396245;
var yMin = 19.5425027301164;
var yMax = 19.71311372545;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042702_esperanza',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Laguna Salada =====================================
Map.setCenter(-71.1003363701963, 19.6772183941302, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -71.1682523870478;
var xMax = -71.0283578375166;
var yMin = 19.5810477994971;
var yMax = 19.7576466724734;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '042703_laguna_salada',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bonao =====================================
Map.setCenter(-70.4572527917675, 18.9393440013062, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.5845569082688;
var xMax = -70.2967994368966;
var yMin = 18.7536300818858;
var yMax = 19.1316412922651;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022801_bonao',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Maimon =====================================
Map.setCenter(-70.2804544887753, 18.8936680755122, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.3590125232009;
var xMax = -70.2215006279296;
var yMin = 18.8258714372598;
var yMax = 18.9499817933119;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022802_maimon',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Piedra Blanca =====================================
Map.setCenter(-70.3403070308636, 18.8121668812595, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.4234608487506;
var xMax = -70.2465666359644;
var yMin = 18.7154356427995;
var yMax = 18.9175647550676;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '022803_piedra_blanca',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Monte Plata =====================================
Map.setCenter(-69.8356029242986, 18.7816879942326, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.9953417517364;
var xMax = -69.7113051094844;
var yMin = 18.5745185354396;
var yMax = 18.9447471035237;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092901_monte_plata',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Bayaguana =====================================
Map.setCenter(-69.5990363064636, 18.8199936440066, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.7457333181942;
var xMax = -69.3647930519374;
var yMin = 18.6385754833776;
var yMax = 18.9916087382798;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092902_bayaguana',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana Grande De Boya =====================================
Map.setCenter(-69.7930572524587, 18.9865838453506, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.9330487695309;
var xMax = -69.6223254340776;
var yMin = 18.8496851456792;
var yMax = 19.1014509227109;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092903_sabana_grande_de_boya',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Yamasa =====================================
Map.setCenter(-70.0782371946222, 18.7655128559412, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.248859666815;
var xMax = -69.9183267403465;
var yMin = 18.6600198609436;
var yMax = 18.8752571826666;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092904_yamasa',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Peralvillo =====================================
Map.setCenter(-70.0563693540401, 18.8502450634075, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1558090968715;
var xMax = -69.9681655835672;
var yMin = 18.7976820562365;
var yMax = 18.9157818092793;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '092905_peralvillo',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Hato Mayor =====================================
Map.setCenter(-69.3332703860207, 18.7292781480381, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.4578588338137;
var xMax = -69.201047556688;
var yMin = 18.5268911399251;
var yMax = 18.8910734120739;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '093001_hato_mayor',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana De La Mar =====================================
Map.setCenter(-69.4121599379184, 19.0104611430665, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.6243002188445;
var xMax = -69.1221351184918;
var yMin = 18.9118012823449;
var yMax = 19.1032375769594;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '093002_sabana_de_la_mar',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// El Valle =====================================
Map.setCenter(-69.3828527212825, 18.940328715594, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.4781137821628;
var xMax = -69.2935859711891;
var yMin = 18.8845029220326;
var yMax = 19.0038492214188;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '093003_el_valle',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Jose De Ocoa =====================================
Map.setCenter(-70.4981554810908, 18.5703566622561, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6866356488584;
var xMax = -70.3481850861399;
var yMin = 18.4199475544606;
var yMax = 18.6946557312217;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '053101_san_jose_de_ocoa',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Sabana Larga =====================================
Map.setCenter(-70.5451297962076, 18.6413773733389, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.6247303763137;
var xMax = -70.4719842305382;
var yMin = 18.5497239887909;
var yMax = 18.7408431117063;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '053102_sabana_larga',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Rancho Arriba =====================================
Map.setCenter(-70.4482301196261, 18.7154248374779, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.5592220492817;
var xMax = -70.3436378197678;
var yMin = 18.6315579270643;
var yMax = 18.7969431615992;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '053103_rancho_arriba',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Santo Domingo Este =====================================
Map.setCenter(-69.7940425897835, 18.512517963972, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.8979392916978;
var xMax = -69.7026102506171;
var yMin = 18.4546451872295;
var yMax = 18.5982320384626;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103201_santo_domingo_este',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Santo Domingo Oeste =====================================
Map.setCenter(-70.0133377023219, 18.4737306138612, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0736547632017;
var xMax = -69.9676298578334;
var yMin = 18.4130782463343;
var yMax = 18.5125378045819;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103202_santo_domingo_oeste',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Santo Domingo Norte =====================================
Map.setCenter(-69.9129003978291, 18.6098355592582, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0411442841242;
var xMax = -69.7863914044492;
var yMin = 18.509578839638;
var yMax = 18.714812702876;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103203_santo_domingo_norte',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Boca Chica =====================================
Map.setCenter(-69.6140485153315, 18.4571744060086, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.7070545282681;
var xMax = -69.5148917213408;
var yMin = 18.4002413124885;
var yMax = 18.5129980630221;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103204_boca_chica',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// San Antonio De Guerra =====================================
Map.setCenter(-69.6630361389787, 18.5790049924255, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -69.7561224961537;
var xMax = -69.5706378315015;
var yMin = 18.4843664667748;
var yMax = 18.6772799342767;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103205_san_antonio_de_guerra',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Los Alcarrizos =====================================
Map.setCenter(-70.0363610031447, 18.5278881999662, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.0921525694141;
var xMax = -69.9866838138953;
var yMin = 18.5000246926369;
var yMax = 18.5624841720943;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103206_los_alcarrizos',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});

// Pedro Brand =====================================
Map.setCenter(-70.0907643636899, 18.6196805869507, 12);

// Coordinates for the bounds of a rectangle.
var xMin = -70.1754534949806;
var xMax = -70.0020598577384;
var yMin = 18.5231089881108;
var yMax = 18.7291632574738;

// A region of interest.
var region = ee.Geometry.BBox(xMin, yMin, xMax, yMax);

// Set the export 'scale' and 'crs' parameters.
Export.image.toDrive({
  image: dataset.mean(),
  description: '103207_pedro_brand',
  folder: 'rd_copernicus_s2',
  region: region,
  scale: 30,
  crs: 'EPSG:5070'
});
