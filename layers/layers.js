var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google by AS</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_46041_CHAK_18_4L_KHASRA_DISSOLVE_1 = new ol.format.GeoJSON();
var features_46041_CHAK_18_4L_KHASRA_DISSOLVE_1 = format_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.readFeatures(json_46041_CHAK_18_4L_KHASRA_DISSOLVE_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_46041_CHAK_18_4L_KHASRA_DISSOLVE_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.addFeatures(features_46041_CHAK_18_4L_KHASRA_DISSOLVE_1);
var lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_46041_CHAK_18_4L_KHASRA_DISSOLVE_1, 
                style: style_46041_CHAK_18_4L_KHASRA_DISSOLVE_1,
                popuplayertitle: "46041_CHAK_18_4L_KHASRA_DISSOLVE",
                interactive: true,
                title: '<img src="styles/legend/46041_CHAK_18_4L_KHASRA_DISSOLVE_1.png" /> 46041_CHAK_18_4L_KHASRA_DISSOLVE'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1];
lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.set('fieldAliases', {'District': 'District', 'Dist_ID': 'Dist_ID', 'Tehsil': 'Tehsil', 'Tehsil_ID': 'Tehsil_ID', 'PC': 'PC', 'PC_ID': 'PC_ID', 'QH': 'QH', 'QH_ID': 'QH_ID', 'Mouza': 'Mouza', 'Mouza_ID': 'Mouza_ID', 'Join_Shp': 'Join_Shp', 'M': 'M', 'K': 'K', 'SK': 'SK', });
lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.set('fieldImages', {'District': 'TextEdit', 'Dist_ID': 'TextEdit', 'Tehsil': 'TextEdit', 'Tehsil_ID': 'TextEdit', 'PC': 'TextEdit', 'PC_ID': 'TextEdit', 'QH': 'TextEdit', 'QH_ID': 'TextEdit', 'Mouza': 'TextEdit', 'Mouza_ID': 'TextEdit', 'Join_Shp': 'TextEdit', 'M': 'Range', 'K': 'Range', 'SK': 'TextEdit', });
lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.set('fieldLabels', {'District': 'no label', 'Dist_ID': 'no label', 'Tehsil': 'no label', 'Tehsil_ID': 'no label', 'PC': 'no label', 'PC_ID': 'no label', 'QH': 'no label', 'QH_ID': 'no label', 'Mouza': 'no label', 'Mouza_ID': 'no label', 'Join_Shp': 'inline label - visible with data', 'M': 'no label', 'K': 'no label', 'SK': 'no label', });
lyr_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});

// Create the map
var map = new ol.Map({
    target: 'map',
    layers: layersList,
    view: new ol.View({
        center: [0, 0],
        zoom: 2
    })
});

// Fit the map view to the extent of the GeoJSON layer
map.getView().fit(jsonSource_46041_CHAK_18_4L_KHASRA_DISSOLVE_1.getExtent(), {size: map.getSize()});