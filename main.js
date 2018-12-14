// mapboxgl.accessToken = 'pk.eyJ1IjoiamVsbGUxOTk1IiwiYSI6ImNqcG8zNm9mZzA5bnE0OG1sNzRoOWVocmkifQ.o8_qMjrgL-z0JwnvyoVKUg';
var mystyle = {
    "version": 8,
    "name": "Mijn eigen Stijl",
    "sources": {
		"pdok":{
			"type": "vector",
			"tiles":  ["https://geodata.nationaalgeoregister.nl/beta/topotiles/{z}/{x}/{y}.pbf"]
		}
	},
    "layers":[ 
        { 
            "id":  "background",
            "type": "background",
            "paint": {
                "background-color":"#8F8B88"
                }
        },
        {
            "id": "admin",
            "type": "line",
            "source": "pdok",
            "source-layer": "admin",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "province"],
            "paint": {
                "line-color" :"#54D8CC",
				"line-width" : 3
               }
			   
        },
		{
            "id": "water",
            "type": "fill",
            "source": "pdok",
            "source-layer": "water",
            "maxzoom": 20,
            "minzoom": 0,
            "paint": {
                "fill-color" : "#80bde3",
                "fill-outline-color": "#80bde3"
            }
        },
		{
            "id": "terrain_z0-Z12",
            "type": "fill",
            "source": "pdok",
            "source-layer": "terrain",
            "maxzoom": 12,
            "minzoom": 0,
            "paint": {
                "fill-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["open", "#9C6801"],
                        ["low_vegetation", "#67BD05"],
                        ["agriculture", "#C42D0C"],
                        ["closed", "#EE6004"],
                        ["high_vegetation", "#0B4411"]
                    ],
                    "default": "#EE6004"
                }
            }
        },
        {
            "id": "terrain_z12-Z20",
            "type": "fill",
            "source": "pdok",
            "source-layer": "terrain",
            "maxzoom": 20,
            "minzoom": 12,
            "filter": [">=", "z_index", 0],
            "paint": {
                "fill-color" : {
                    "property": "lod2",
                    "type": "categorical",
                    "stops": [
                        ["open", "#9C6801"],
                        ["low_vegetation", "#67BD05"],
                        ["agriculture", "#C42D0C"],
                        ["closed", "#EE6004"],
                        ["high_vegetation", "#0B4411"]
                    ],
                    "default": "#EE6004"
                }                
            }
        },
		{
			"id": "roads",
			"type": "line",
			"source": "pdok",
			"source-layer":"infra",
			"maxzoom": 22,
			"minzoom": 11,
			"paint": {
				"line-color" :"#000000",
				"line-width" : 3
			}
		},
		{
            "id": "gemeente",
            "type": "line",
            "source": "pdok",
            "source-layer": "admin",
            "maxzoom": 22,
            "minzoom": 0,
            "filter": ["==", "lod1", "municipality"],
            "paint": {
                "line-color" :"#FF0C00",
				"line-width" : 2
               }
        },
		{
			"id": "building_extrusion_main",
			"type": "fill-extrusion",
			"source": "pdok",
			"source-layer":"urban",
			"maxzoom": 22,
			"minzoom": 11,
			"filter": ["==", "lod2", "main_buildings"],
			"paint": {
				"fill-extrusion-height": 50,
				"fill-extrusion-color": "#FF8000",
				"fill-extrusion-opacity": 0.9
			}
		},
		{
			"id": "building_extrusion_other",
			"type": "fill-extrusion",
			"source": "pdok",
			"source-layer":"urban",
			"maxzoom": 22,
			"minzoom": 11,
			"filter": ["==", "lod2", "other_buildings"],
			"paint": {
				"fill-extrusion-height": 20,
				"fill-extrusion-color": "#4BF6A8",
				"fill-extrusion-opacity": 0.9
			}
		}
		
    ]
};

var map = new mapboxgl.Map({
    container: 'map',
    // style: 'mapbox://styles/mapbox/streets-v9',
	style: mystyle,
    hash: true,
    zoom: 11.67,
    pitch: 60,
    bearing: -15.2,
    center: [ 5.6937, 51.9846]
});