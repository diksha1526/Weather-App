
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '6b5322bc2dmsh2293c4a51519ce6p1a2b31jsnb2077ab98724',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getweather = (city) => {
    cityName.innerHTML=city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(city.value)
})
getweather("Delhi")
const weather = (Info) => {
    cityName.innerHTML=city


    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+Info, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            temp.innerHTML = response.temp
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            min_temp.innerHTML = response.min_temp
            max_temp.innerHTML = response.max_temp
            wind_speed.innerHTML = response.wind_speed
            wind_degrees.innerHTML = response.wind_degrees
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset

        })
        .catch(err => console.error(err));
}
submit.addEventListener("click", (e) => {
    e.preventDefault()
    getweather(Info.value)
})
