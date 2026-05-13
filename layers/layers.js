var wms_layers = [];


        var lyr_Voyagernolabelsretina_0 = new ol.layer.Tile({
            'title': 'Voyager [no labels] (retina)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_temp1_1 = new ol.format.GeoJSON();
var features_temp1_1 = format_temp1_1.readFeatures(json_temp1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_temp1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_temp1_1.addFeatures(features_temp1_1);
var lyr_temp1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_temp1_1, 
                style: style_temp1_1,
                popuplayertitle: 'temp1',
                interactive: true,
                title: '<img src="styles/legend/temp1_1.png" /> temp1'
            });

lyr_Voyagernolabelsretina_0.setVisible(true);lyr_temp1_1.setVisible(true);
var layersList = [lyr_Voyagernolabelsretina_0,lyr_temp1_1];
lyr_temp1_1.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_temp1_1.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_temp1_1.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_temp1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});