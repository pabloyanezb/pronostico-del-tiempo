function mostrar(ubicacion){
    console.log(ubicacion);
}
navigator.geolocation.getCurrentPosition(mostrar);

$(document).ready(function(){
    $('.btn').on('click',function() {
        if($('input').val()==''){
            return;
        }
        $('.jumbotron').find('table').children().remove();
        $('.jumbotron').find('iframe').remove();
        var ciudad = $('input').val();
        $.get( `http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&lang=es&&appid=67f315290d8c351082f9bf3ddea9ea7f`, function(res) {
            
            $('.table').append(
                `<tr>
                    <td colspan="3" class="ciudad">${res.name}</td>
                </tr>`);
            $('.table').append(
                `<tr>
                    <td>Descripción del tiempo:</td>
                    <td class="descripcion"> ${res.weather[0].description}</td>
                </tr>`);
            $('.table').append(
                `<tr>
                    <td>Temperatura :</td>
                    <td> ${Math.round(res.main.temp-273.15)}C°</td>
                <tr>`);
            $('.table').append(
                `<tr>
                    <td>Coordenadas :</td>
                    <td> ${res.coord.lon}, ${res.coord.lat}</td>
                </tr>);`);
            $('.jumbotron').append(`<iframe class="iframe mapa" src="https://maps.google.com/?ll=${res.coord.lat},${res.coord.lon}&z=14&t=m&output=embed" height="300" width="1085" frameborder="0" style="border:0" allowfullscreen></iframe>`);
            console.log(res);
        }, 'json');

        $('input').val('');
        return false;
    });





})