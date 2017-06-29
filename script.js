$(document).ready(function() {

    $('form').submit(function() {

        var city = $("#city").val();

        var weatherId = "&APPID=2fad67f97b101ecc8420ac4adbf3944e";

        var url = "http://api.openweathermap.org/data/2.5/weather?q=";
        url += city;
        url += weatherId;

        function KtoF(K) {
            return Math.round(((K - 273) * (9/5)) + 32);
        };
        
        $.get(url, function(res) {

            var tempK = res.main.temp;
            var tempC = KtoF(tempK);

            var str = "<h1>" + city + "</h1><h3>Temperature: " + tempC + "</h3>";

            $("#display").html(str);


        }, 'json');

        // don't forget to return false so the page doesn't refresh
        return false;
    });





});