/* Author: 

*/

var button = document.querySelector('#submit');
var input = document.querySelector('#input');
var city_name = document.querySelector('.city-name');
var temperature = document.querySelector('.temperature');


button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=b170acb94d7928180c0896f62be0baf7')
    .then(function(response) 
    {
        return response.json()    //data converted to json
    })
    .then(function(data)
    {
        weatherData(data);
        console.log(data);
    })
})

function weatherData(w) {
    var celcius = Math.round(parseFloat(w.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(w.main.temp)-273.15)*1.8)+32);
    var description = w.weather[0].description;
    document.querySelector('.description').innerHTML = "Weather:  " + description;
    document.querySelector('.temperature').innerHTML = " Temperature:  " + celcius + '&deg;';
    document.querySelector('.city-name').innerHTML = "City Name:  " + w.name;

    if (description.indexOf("haze") > 0)
    {
        document.body.className = 'sunny';
    }
    else if (description.indexOf("rain") > 0)
    {
        document.body.className = 'rainy';
    }
    else if (description.indexOf("cloud") > 0)
    {
        document.body.className = 'cloudy';
    }
    else 
    {
        document.body.className = 'sunny';
    }
}
























