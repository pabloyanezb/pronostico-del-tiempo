$(document).ready(function(){
    $('.btn').on('click',function() {
        $(this).parent().nextAll().remove();
        var ciudad = $('input').val();
        $.get( `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&&appid=67f315290d8c351082f9bf3ddea9ea7f`, function(res) {
            
            $('.jumbotron').append(`<h3>${ciudad}: ${res.weather[0].description}</h3>`);
            $('.jumbotron').append(`<h3>Temperatura : ${res.main.temp-273.15}C°</h3>`);
            $('.jumbotron').append(`<h3>Coordenadas : ${res.coord.lon}, ${res.coord.lat}</h3>`);
            console.log(res);
        }, 'json');

        $('input').val('');
        return false;
    });





})