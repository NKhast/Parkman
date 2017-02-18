var image1 = 'img/Marker-50.png';
var image2 = 'img/parking32.png';
var geocoder = new google.maps.Geocoder();
var json = {
	"current_location": [60.169086, 24.933576],
	"location_data": {
		"bounds": {
			"north": 60.178341169153,
			"south": 60.161369987325,
			"west": 24.909604261688,
			"east": 24.967153738312
		},

		"zones": [{
			"id": "157",
			"polygon": [{
				"lat": 60.168282679016464,
				"lng": 24.930195026799538
			}, {
				"lat": 60.16810045302499,
				"lng": 24.9321691326345
			}, {
				"lat": 60.168492730087486,
				"lng": 24.93418768945571
			}, {
				"lat": 60.16911525687089,
				"lng": 24.93318990770217
			}, {
				"lat": 60.168282679016464,
				"lng": 24.930195026799538
			}],
			"name": "Tampere Rautatientori",
			"payment_is_allowed": "0",
			"max_duration": "720.00",
			"service_price": "0.49",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testemail@testautopark.fi",
			"point":  [60.168607847624095, 24.932371066131623],
			"country": "Finland",
			"provider_id": "1",
			"provider_name": "AutoPark"
		}, {
			"id": "234",
			"polygon": [{
				"lat": 60.163012045004,
				"lng": 24.940357538771
			}, {
				"lat": 60.163012045004,
				"lng": 24.938548461229
			}, {
				"lat": 60.162111954996,
				"lng": 24.938548461229
			}, {
				"lat": 60.162111954996,
				"lng": 24.940357538771
			}, {
				"lat": 60.163012045004,
				"lng": 24.940357538771
			}],
			"name": "Punavuori Garage",
			"payment_is_allowed": "0",
			"max_duration": "720.00",
			"service_price": "0.25",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testemail@testautopark.fi",
			"point":  [60.162562, 24.939453],
			"country": "Finland",
			"provider_id": "1",
			"provider_name": "AutoPark"
		}, {
			"id": "236",
			"polygon": [{
				"lat": 60.164961058977,
				"lng": 24.93892276336703
			}, {
				"lat": 60.16466481836037,
				"lng": 24.93806039830929
			}, {
				"lat": 60.164317181933065,
				"lng": 24.937070663182794
			}, {
				"lat": 60.1638381154417,
				"lng": 24.93780964662585
			}, {
				"lat": 60.164468657563425,
				"lng": 24.939027369518612
			}, {
				"lat": 60.164961058977,
				"lng": 24.93892276336703
			}],
			"name": "Unknown",
			"payment_is_allowed": "1",
			"max_duration": "720.00",
			"service_price": "0.00",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testemail@testautopark.fi",
			"point":  [60.16444996645511, 24.938178168200714],
			"country": "Finland",
			"provider_id": "1",
			"provider_name": "AutoPark"
		}, {
			"id": "247",
			"polygon": [{
				"lat": 60.16482793380353,
				"lng": 24.93508100509644
			}, {
				"lat": 60.164838609134456,
				"lng": 24.93551015853882
			}, {
				"lat": 60.16491333635387,
				"lng": 24.93596076965332
			}, {
				"lat": 60.165062790282896,
				"lng": 24.936110973358154
			}, {
				"lat": 60.16523359394085,
				"lng": 24.936282634735107
			}, {
				"lat": 60.16536169610172,
				"lng": 24.93619680404663
			}, {
				"lat": 60.16561789892518,
				"lng": 24.93598222732544
			}, {
				"lat": 60.16571397446897,
				"lng": 24.93561744689941
			}, {
				"lat": 60.16568194931892,
				"lng": 24.935166835784912
			}, {
				"lat": 60.16561789892518,
				"lng": 24.934844970703125
			}, {
				"lat": 60.165511147991474,
				"lng": 24.93460893630981
			}, {
				"lat": 60.16535102094071,
				"lng": 24.934523105621334
			}, {
				"lat": 60.16515886744974,
				"lng": 24.934351444244385
			}, {
				"lat": 60.16497738812098,
				"lng": 24.9344801902771
			}, {
				"lat": 60.164902661047215,
				"lng": 24.93460893630981
			}, {
				"lat": 60.16482793380353,
				"lng": 24.93508100509644
			}],
			"name": "Fitnesstukku",
			"payment_is_allowed": "0",
			"max_duration": "720.00",
			"service_price": "0.00",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testemail@testautopark.fi",
			"point":  [60.165219358852795, 24.93537425994873],
			"country": "Finland",
			"provider_logo_url_version": "3",
			"provider_id": "1",
			"provider_name": "AutoPark"
		}, {
			"id": "245",
			"polygon": [{
				"lat": 60.17114712304642,
				"lng": 24.919610023498535
			}, {
				"lat": 60.170880289970654,
				"lng": 24.923343658447266
			}, {
				"lat": 60.171317895077536,
				"lng": 24.924116134643555
			}, {
				"lat": 60.171776840512486,
				"lng": 24.923386573791504
			}, {
				"lat": 60.17277742606434,
				"lng": 24.92226004600525
			}, {
				"lat": 60.17267336658692,
				"lng": 24.91877317428589
			}, {
				"lat": 60.17114712304642,
				"lng": 24.919610023498535
			}, {
				"lat": 60.17114712304642,
				"lng": 24.919610023498535
			}],
			"name": "Kauppis",
			"payment_is_allowed": "0",
			"max_duration": "720.00",
			"service_price": "0.00",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testemail@testautopark.fi",
			"point":  [60.17167429490068, 24.921585662024363],
			"country": "Finland",
			"provider_id": "1",
			"provider_name": "AutoPark"
		}, {
			"id": "173",
			"polygon": [{
				"lat": 60.16890179375162,
				"lng": 24.9304856237452
			}, {
				"lat": 60.16861092571438,
				"lng": 24.929604245952305
			}, {
				"lat": 60.168455348339634,
				"lng": 24.929840280345616
			}, {
				"lat": 60.16872753814441,
				"lng": 24.93072165813851
			}, {
				"lat": 60.16890179375162,
				"lng": 24.9304856237452
			}],
			"name": "Q-Park1",
			"payment_is_allowed": "1",
			"max_duration": "0.50",
			"has_lockout_period": "1",
			"lockout_period": "0.15",
			"service_price": "0.69",
			"depth": "9",
			"draw": "1",
			"sticker_required": "1",
			"currency": "\u20ac",
			"contact_email": "testQ@testqpark.fi",
			"point":  [60.16867390148751, 24.930162952045407],
			"country": "Finland",
			"provider_id": "4",
			"provider_name": "Q-Park"
		}]
	}
};

var zone = json.location_data.zones;
var firstPolygon = zone[0].polygon;
var secondPolygon = zone[1].polygon;
var thirdPolygon = zone[2].polygon;
var fourthPolygon = zone[3].polygon;
var fifthPolygon = zone[4].polygon;
var sixthPolygon = zone[5].polygon;
var sColor = [];
var fColor = [];
for (var i = 0; i < zone.length; i++) {
	if (zone[i].payment_is_allowed == 0) {
		sColor[i] = '#fc4f67';
		fColor[i] = '#fc4f67';
	} else {
		sColor[i] = '#41c948';
		fColor[i] = '#41c948';
	}
}
var id = [];var Name = [];var max_duration = [];var service_price = [];var depth = [];var draw = [];var sticker_required = [];
var currency = [];var contact_email = [];var point = [];var country = [];var provider_id = [];var lockout_period = [];
var provider_name = [];var payment_is_allowed = [];var has_lockout_period = [];var parkingsLocation = [];var markers = [];
var MARKER;var polygons = [];

function setContentStringForInfoWindow(num){
	return  '<div class="col-md-12">' +
	 					'<div class="row" style="padding-left:-10px;">' +
							'<h4 class="text-left col-md-12" style="font-weight:bold;">'+ Name[num] + '</h4>' +
						'</div>' +
						'<div class= "row" style="padding-top:5px;">' +
							'<p class="col-md-6 text-left" style="color:#252525; font-weight:500;">' + contact_email[num] + '</p>' +
							'<p class="col-md-3 col-md-push-3 text-right"><span style="color:#37bd00; font-weight:bold;">' + service_price[num] + currency[num] + '<span></p>' +
						'</div>' +
						'<div class= "row">' +
							'<p class="col-md-12 text-left" style="color:#252525;"><span style="font-weight:500;">Max Duration: '+ max_duration[num] + ' mins</span></p>' +
						'</div>' +
					'</div>';
}

function myClick(id){
		google.maps.event.trigger(markers[id], 'click');
}

for(var i = 0; i < zone.length; i++ ){
	parkingsLocation[i] = new google.maps.LatLng(zone[i].point[0], zone[i].point[1]);
}



 for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("id")) {
 		id[i] = zone[i].id;
	} else {
 		id[i] = "unknown";
 	}
 }


for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("name")) {
		Name[i] = zone[i].name;
	} else {
		Name[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("max_duration")) {
		max_duration[i] = zone[i].max_duration;
	} else {
		max_duration[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("service_price")) {
		service_price[i] = zone[i].service_price;
	} else {
		service_price[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("depth")) {
		depth[i] = zone[i].depth;
	} else {
		depth[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("draw")) {
		draw[i] = zone[i].draw;
	} else {
		draw[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("sticker_required")) {
		sticker_required[i] = zone[i].sticker_required;
	} else {
		sticker_required[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("currency")) {
		currency[i] = zone[i].currency;
	} else {
		currency[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("contact_email")) {
		contact_email[i] = zone[i].contact_email;
	} else {
		contact_email[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("country")) {
		country[i] = zone[i].country;
	} else {
		country[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("provider_id")) {
		provider_id[i] = zone[i].provider_id;
	} else {
		provider_id[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("provider_name")) {
		provider_name[i] = zone[i].provider_name;
	} else {
		provider_name[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("payment_is_allowed")) {
		if (zone[i].payment_is_allowed == 1) {
			payment_is_allowed[i] = "Yes";
		} else {
			payment_is_allowed[i] = "No";
		}
	} else {
		payment_is_allowed[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("has_lockout_period")) {
		if(zone[i].has_lockout_period == 1){
			has_lockout_period[i] = "Yes";
		}else{
			has_lockout_period[i] = "No";
		}

	} else {
		has_lockout_period[i] = "unknown";
	}
}
for (var i = 0; i < zone.length; i++) {
	if (zone[i].hasOwnProperty("lockout_period")) {
		lockout_period[i] = zone[i].lockout_period;
	} else {
		lockout_period[i] = "unknown";
	}
}

function initialize() {

	var infowindow = new google.maps.InfoWindow({
			size: new google.maps.Size(150, 50)
		});

	var geolib = google.maps.geometry.spherical;
	map = new google.maps.Map(document.getElementById("map"), {
		center: {
			lat: (json.location_data.bounds.north + json.location_data.bounds.south) / 2,
			lng: (json.location_data.bounds.east + json.location_data.bounds.west) / 2
		},
		zoom: 15,
		styles: [{
			elementType: 'geometry',
			stylers: [{
				color: '#242f3e'
			}]
		}, {
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#242f3e'
			}]
		}, {
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#ffffff'
			}]
		}, {
			featureType: 'administrative.locality',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#ffffff'
			}]
		}, {
			featureType: 'poi',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#ffffff'
			}]
		}, {
			featureType: 'poi.park',
			elementType: 'geometry',
			stylers: [{
				color: '#263c3f'
			}]
		}, {
			featureType: 'poi.park',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#cccccc'
			}]
		}, {
			featureType: 'road',
			elementType: 'geometry',
			stylers: [{
				color: '#38414e'
			}]
		}, {
			featureType: 'road',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#212a37'
			}]
		}, {
			featureType: 'road',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#9ca5b3'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'geometry',
			stylers: [{
				color: '#746855'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'geometry.stroke',
			stylers: [{
				color: '#1f2835'
			}]
		}, {
			featureType: 'road.highway',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#9ca5b3'
			}]
		}, {
			featureType: 'transit',
			elementType: 'geometry',
			stylers: [{
				color: '#2f3948'
			}]
		}, {
			featureType: 'transit.station',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#cccccc'
			}]
		}, {
			featureType: 'water',
			elementType: 'geometry',
			stylers: [{
				color: '#17263c'
			}]
		}, {
			featureType: 'water',
			elementType: 'labels.text.fill',
			stylers: [{
				color: '#515c6d'
			}]
		}, {
			featureType: 'water',
			elementType: 'labels.text.stroke',
			stylers: [{
				color: '#17263c'
			}]
		}],
		mapTypeId: 'roadmap'
	});

	marker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		icon: image1,
		draggable:true,
		position: {
			lat: json.current_location[0],
			lng: json.current_location[1]
		}
	});

	google.maps.event.addListener(marker, 'dragend', function() {

                geocoder.geocode({'latLng': marker.getPosition()}, function(results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[0]) {
                            $('#address').val(results[0].formatted_address);
                            $('#latitude').val(marker.getPosition().lat());
                            $('#longitude').val(marker.getPosition().lng());
                            infowindow.setContent(results[0].formatted_address);
                            infowindow.open(map, marker);
                        }
                    }
                });
            });

	google.maps.event.addListener(map, 'click', function () {
		infowindow.close();
	});
	bounds = new google.maps.LatLngBounds();

	var polygon1 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(firstPolygon[0].lat, firstPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(firstPolygon[1].lat, firstPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(firstPolygon[2].lat, firstPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(firstPolygon[3].lat, firstPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(firstPolygon[4].lat, firstPolygon[4].lng), 0, -0)
		],
		strokeColor: sColor[0],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[0],
		fillOpacity: 0.35
	});

	for (var i = 0; i < polygon1.getPath().getLength(); i++) {
		bounds.extend(polygon1.getPath().getAt(i));
	}

	var polygon2 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(secondPolygon[0].lat, secondPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(secondPolygon[1].lat, secondPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(secondPolygon[2].lat, secondPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(secondPolygon[3].lat, secondPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(secondPolygon[4].lat, secondPolygon[4].lng), 0, -0)
		],
		strokeColor: sColor[1],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[1],
		fillOpacity: 0.35
	});

	for (var i = 0; i < polygon2.getPath().getLength(); i++) {
		bounds.extend(polygon2.getPath().getAt(i));
	}

	var polygon3 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(thirdPolygon[0].lat, thirdPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(thirdPolygon[1].lat, thirdPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(thirdPolygon[2].lat, thirdPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(thirdPolygon[3].lat, thirdPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(thirdPolygon[4].lat, thirdPolygon[4].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(thirdPolygon[5].lat, thirdPolygon[5].lng), 0, -0)
		],
		strokeColor: sColor[2],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[2],
		fillOpacity: 0.35
	});

	for (var i = 0; i < polygon3.getPath().getLength(); i++) {
		bounds.extend(polygon3.getPath().getAt(i));
	}

	var polygon4 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(fourthPolygon[0].lat, fourthPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[1].lat, fourthPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[2].lat, fourthPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[3].lat, fourthPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[4].lat, fourthPolygon[4].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[5].lat, fourthPolygon[5].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[6].lat, fourthPolygon[6].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[7].lat, fourthPolygon[7].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[8].lat, fourthPolygon[8].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[9].lat, fourthPolygon[9].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[10].lat, fourthPolygon[10].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[11].lat, fourthPolygon[11].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[12].lat, fourthPolygon[12].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[13].lat, fourthPolygon[13].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[14].lat, fourthPolygon[14].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fourthPolygon[15].lat, fourthPolygon[15].lng), 0, -0)

		],
		strokeColor: sColor[3],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[3],
		fillOpacity: 0.35
	});

	for (var i = 0; i < polygon4.getPath().getLength(); i++) {
		bounds.extend(polygon4.getPath().getAt(i));
	}
	polygons.push(polygon4);

	var polygon5 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(fifthPolygon[0].lat, fifthPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[1].lat, fifthPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[2].lat, fifthPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[3].lat, fifthPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[4].lat, fifthPolygon[4].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[5].lat, fifthPolygon[5].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[6].lat, fifthPolygon[6].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(fifthPolygon[7].lat, fifthPolygon[7].lng), 0, -0),
		],
		strokeColor: sColor[4],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[4],
		fillOpacity: 0.35
	});
	for (var i = 0; i < polygon5.getPath().getLength(); i++) {
		bounds.extend(polygon5.getPath().getAt(i));
	}

	polygons.push(polygon5);

	var polygon6 = new google.maps.Polygon({
		map: map,
		path: [geolib.computeOffset(new google.maps.LatLng(sixthPolygon[0].lat, sixthPolygon[0].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(sixthPolygon[1].lat, sixthPolygon[1].lng), 0, 0),
			geolib.computeOffset(new google.maps.LatLng(sixthPolygon[2].lat, sixthPolygon[2].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(sixthPolygon[3].lat, sixthPolygon[3].lng), 0, -0),
			geolib.computeOffset(new google.maps.LatLng(sixthPolygon[4].lat, sixthPolygon[4].lng), 0, -0)
		],
		strokeColor: sColor[5],
		strokeOpacity: 0.8,
		strokeWeight: 1,
		fillColor: fColor[5],
		fillOpacity: 0.35
	});

	for (var i = 0; i < polygon6.getPath().getLength(); i++) {
		bounds.extend(polygon6.getPath().getAt(i));
	}

	polygons.push(polygon6);

	for(var i = 0; i < zone.length; i ++){
		MARKER = new google.maps.Marker({
			icon : image2,
			position: new google.maps.LatLng(zone[i].point[0], zone[i].point[1]),
			map: map
		});

		google.maps.event.addListener(MARKER, 'click', (function(MARKER, i){
			return function(){
				infowindow.setContent(setContentStringForInfoWindow(i));
				infowindow.open(map, MARKER);
			}
		})(MARKER, i));

		markers.push(MARKER);
	}


	map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);
