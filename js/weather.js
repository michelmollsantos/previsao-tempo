"use strict"

//306a7b2b4d1ed5a14ebb419a42d705a4

const url = "https://api.openweathermap.org/data/2.5/weather?q=Sao+Paulo&appid=306a7b2b4d1ed5a14ebb419a42d705a4&lang=pt_br";

$.ajax({
    url: url,
    success: function (result) {
        console.log(result);
        console.log(result.name);

        $("#location").text(result.name);


        let c = Math.round(result.main.temp - 273.15);
        let celsius = c.toString();
        $("#temperature").text(celsius);


        $("#wind").text(result.wind.speed);


        $("#sky").text(result.weather[0].description)
    }
})
