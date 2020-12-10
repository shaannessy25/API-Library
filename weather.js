const { classBody } = require("@babel/types")

class Weather {
    constructor(api, zip, unit) { 
        this.api = api
        this.zip = zip
        this.unit = unit
    }

    getWeather(zip, api, units){
        const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apiKey}&units=${units}`
        const p = fetch(path).then( res => res.json())
        return p
    }

    getWeather2(city, api, units) {
        const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`
        const p = fetch(path).then( res => res.json())
        return p
    }

}

