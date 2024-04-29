ol.proj.proj4.register(proj4);
ol.proj.get("").setExtent([-113.193652, 26.569427, -90.711317, 38.088918]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ur2002_ll_Texas_1 = new ol.format.GeoJSON();
var features_ur2002_ll_Texas_1 = format_ur2002_ll_Texas_1.readFeatures(json_ur2002_ll_Texas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_ur2002_ll_Texas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ur2002_ll_Texas_1.addFeatures(features_ur2002_ll_Texas_1);cluster_ur2002_ll_Texas_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_ur2002_ll_Texas_1
});
var lyr_ur2002_ll_Texas_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_ur2002_ll_Texas_1, 
                style: style_ur2002_ll_Texas_1,
                interactive: true,
                title: '<img src="styles/legend/ur2002_ll_Texas_1.png" /> ur2002_ll_Texas'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ur2002_ll_Texas_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ur2002_ll_Texas_1];
lyr_ur2002_ll_Texas_1.set('fieldAliases', {'ICF_ID': 'ICF_ID', 'DB_ALIAS': 'DB_ALIAS', 'DBUNIQUE': 'DBUNIQUE', 'LATITUDE': 'LATITUDE', 'DATUM': 'DATUM', 'COUNTY_NAM': 'COUNTY_NAM', 'CNTY_FIPS': 'CNTY_FIPS', 'STATE_NAME': 'STATE_NAME', 'STATE_CODE': 'STATE_CODE', 'MINE_NAME': 'MINE_NAME', 'QC_FLAG': 'QC_FLAG', 'ZIPCODE': 'ZIPCODE', 'QAQC': 'QAQC', 'MADS': 'MADS', 'LONGITUDE': 'LONGITUDE', });
lyr_ur2002_ll_Texas_1.set('fieldImages', {'ICF_ID': '', 'DB_ALIAS': '', 'DBUNIQUE': '', 'LATITUDE': '', 'DATUM': '', 'COUNTY_NAM': '', 'CNTY_FIPS': '', 'STATE_NAME': '', 'STATE_CODE': '', 'MINE_NAME': '', 'QC_FLAG': '', 'ZIPCODE': '', 'QAQC': '', 'MADS': '', 'LONGITUDE': '', });
lyr_ur2002_ll_Texas_1.set('fieldLabels', {'ICF_ID': 'no label', 'DB_ALIAS': 'no label', 'DBUNIQUE': 'no label', 'LATITUDE': 'no label', 'DATUM': 'no label', 'COUNTY_NAM': 'inline label', 'CNTY_FIPS': 'no label', 'STATE_NAME': 'no label', 'STATE_CODE': 'no label', 'MINE_NAME': 'inline label', 'QC_FLAG': 'no label', 'ZIPCODE': 'inline label', 'QAQC': 'no label', 'MADS': 'no label', 'LONGITUDE': 'no label', });
lyr_ur2002_ll_Texas_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});