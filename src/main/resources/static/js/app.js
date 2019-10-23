app = (function () {
    var map;
    return {
        initMap: function () {
            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: 0, lng: 0 },
                zoom: 8
            });
        },

        asd: function () {
            console.log("sss");
        },
        temp: function () {
            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/nearest?lng=-3.5&lat=40.5",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                    "x-rapidapi-key": "263297421fmshd9a9ca080274e11p163de6jsnd448cee535e6"
                }
            }

            $.ajax(settings).done(function (response) {
                console.log(response.location.latitude);
                console.log(response.location.longitude);
                var lati = response.location.latitude;
                var long = response.location.longitude;
                var cambiaaaa = new google.maps.LatLng(lati, long);
                map.setCenter(cambiaaaa);
                var marker = new google.maps.Marker({
                    position: cambiaaaa,
                    title: "Hello World!"
                });
                marker.setMap(map);
            });

        },
        temp2: function () {

            var settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/nearest?lng=-74.040068&lat=4.792130",
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                    "x-rapidapi-key": "3f3ba436e2mshe65d818a0931df4p148e49jsn81f8fdaa3e8f"
                }
            }

            $.ajax(settings).done(function (response) {
                console.log("temp2")
                console.log(response);
            });
        }


    }
})();