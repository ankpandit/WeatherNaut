async function weatherReport(){

    let city = document.getElementById("city").value
    // let city ="delhi"
    let url = "http://api.weatherstack.com/current?access_key=cc21994ca53d5ee679b50b5e3a739ef2&query="+city ;
    
    let div = document.getElementsByClassName("container")[1] 
    div.style.display="block"
    // console.log(div)

    await fetch(url).then((response)=>{
        // console.log(response.status)
        // console.log(response.ok)
        return response.json()
    }).then((value)=>{
        // console.log(value)


        let observed_time = document.getElementById('observed_time')
        observed_time.innerHTML = value.current.observation_time

        let temperature = document.getElementById('temperature')
        temperature.innerHTML = value.current.temperature + "°C"

        let pressure = document.getElementById('pressure')
        pressure.innerHTML = value.current.pressure+" Millibar"

        let windSpeed = document.getElementById('wind_Speed')
        windSpeed.innerHTML = value.current.wind_speed+" Km/hr"

        let cloud_cover = document.getElementById('cloud_cover')
        cloud_cover.innerHTML = value.current.cloudcover+" Oktas"

        let humidity = document.getElementById('humidity')
        let icon = value.weather_icons
        humidity.firstChild.src= icon 
        console.log(humidity.firstChild)
        humidity.innerHTML = value.current.humidity+" g.m-3"

        let cloud_descriptions = document.getElementById('cloud_descriptions')
        cloud_descriptions.innerHTML = value.current.weather_descriptions
        


        //location Details
        let country = document.getElementById('country')
        country.innerHTML = value.location.country

        let localtime = document.getElementById('localtime')
        localtime.innerHTML = value.location.localtime

        let region = document.getElementById('region')
        region.innerHTML = value.location.region

        let geolocation = document.getElementById('geolocation')
        geolocation.innerHTML = value.location.lat +" Lat° "+value.location.lon+ " Lon°"

        let timezone = document.getElementById('timezone')
        timezone.innerHTML = value.location.timezone_id

        


    })
}

//testing purpose
// let div = document.getElementsByClassName("container")[1] 
// div.style.display="block"

// weatherReport()





