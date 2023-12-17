import { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './infoBox'

export default function WeatherApp(){
    let [weatherInfo , setWeatherInfo] = useState({
        feelslike: 23.64,
        humidity: 36,
        pressure: 1015,
        temp: 24.22,
        weather: "clear sky",
        city : "Indore"
    })

    let updatedInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div>
            <h2>Weather App By @palak</h2>
            <SearchBox updatedInfo={updatedInfo}/>
            <br />
            <InfoBox  info={weatherInfo}/>
        </div>
    )
}