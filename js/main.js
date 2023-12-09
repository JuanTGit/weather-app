// Grab Data From API

let apikey = 'YOUR API KEY HERE'


const getApi = async function(city, zipcode){
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${zipcode}&appid=${apikey}`)
    let data = await response.json()
    return await data
}


const submitInfo = document.getElementById('dataForm')

submitInfo.addEventListener('submit', async (event) => {
    event.preventDefault();
    let cityName = event.target.cityName.value
    let zip = event.target.zipcode.value
    let weather = await getApi(cityName, zip)
    returnDisplay(weather)
})

// let convertToF = ((K-273.15)*1.8)+32

// Display Info to DOM

function returnDisplay(weather){
    let currTemp = Math.round(Math.trunc(((weather.main.temp-273.15)*1.8)+32))
    let highTemp = Math.round(Math.trunc(((weather.main.temp_max-273.15)*1.8)+32))
    let lowTemp = Math.round(Math.trunc(((weather.main.temp_min-273.15)*1.8)+32))

    
    let {current, high, low, currentDesc, highDesc, lowDesc} = {
        current: document.getElementById('currentTemp'),
        high: document.getElementById('highTemp'),
        low: document.getElementById('lowTemp'),

        currentDesc: document.getElementById('currentDescription'),
        highDesc: document.getElementById('highDescription'),
        lowDesc: document.getElementById('lowDescription')
    }

    currentDesc.innerHTML = `Display of the current weather in ${weather.name}`
    highDesc.innerHTML = `Today's high temperature in ${weather.name}`
    lowDesc.innerHTML = `Today's low temperature in ${weather.name}`


    current.innerHTML = `${currTemp}°`
    high.innerHTML = `${highTemp}°`
    low.innerHTML = `${lowTemp}°`
}