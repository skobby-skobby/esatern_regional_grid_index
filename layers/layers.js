var wms_layers = [];

var format_index_0 = new ol.format.GeoJSON();
var features_index_0 = format_index_0.readFeatures(json_index_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_index_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_index_0.addFeatures(features_index_0);
var lyr_index_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_index_0, 
                style: style_index_0,
                popuplayertitle: "index",
                interactive: false,
                    title: '<img src="styles/legend/index_0.png" /> index'
                });
var format_theLabels_1 = new ol.format.GeoJSON();
var features_theLabels_1 = format_theLabels_1.readFeatures(json_theLabels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_theLabels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_theLabels_1.addFeatures(features_theLabels_1);
var lyr_theLabels_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_theLabels_1, 
                style: style_theLabels_1,
                popuplayertitle: "theLabels",
                interactive: false,
                    title: '<img src="styles/legend/theLabels_1.png" /> theLabels'
                });
var format_ghana_16_regions_2 = new ol.format.GeoJSON();
var features_ghana_16_regions_2 = format_ghana_16_regions_2.readFeatures(json_ghana_16_regions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ghana_16_regions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ghana_16_regions_2.addFeatures(features_ghana_16_regions_2);
var lyr_ghana_16_regions_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ghana_16_regions_2, 
                style: style_ghana_16_regions_2,
                popuplayertitle: "ghana_16_regions",
                interactive: false,
                    title: '<img src="styles/legend/ghana_16_regions_2.png" /> ghana_16_regions'
                });

lyr_index_0.setVisible(true);lyr_theLabels_1.setVisible(true);lyr_ghana_16_regions_2.setVisible(true);
var layersList = [lyr_index_0,lyr_theLabels_1,lyr_ghana_16_regions_2];
lyr_index_0.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Text': 'Text', });
lyr_theLabels_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'text': 'text', });
lyr_ghana_16_regions_2.set('fieldAliases', {'REGION': 'REGION', 'FID': 'FID', });
lyr_index_0.set('fieldImages', {'fid': '', 'Layer': '', 'Text': '', });
lyr_theLabels_1.set('fieldImages', {'id': 'TextEdit', 'fid': 'TextEdit', 'text': 'TextEdit', });
lyr_ghana_16_regions_2.set('fieldImages', {'REGION': 'TextEdit', 'FID': 'TextEdit', });
lyr_index_0.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Text': 'no label', });
lyr_theLabels_1.set('fieldLabels', {'id': 'no label', 'fid': 'inline label - visible with data', 'text': 'inline label - always visible', });
lyr_ghana_16_regions_2.set('fieldLabels', {'REGION': 'no label', 'FID': 'no label', });
lyr_ghana_16_regions_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});