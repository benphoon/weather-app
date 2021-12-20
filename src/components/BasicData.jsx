import React, { useState } from "react";
import { CurrentWeatherIcon } from "./CurrentWeatherIcon";

export const BasicData = (props) => {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]
        let year = d.getFullYear()

        return `${day}, ${date} ${month} ${year}`
    }


    return (
        <div className="basicdata-container">
            <div className="location">{props.weatherData.city}, {props.weatherData.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
            <div className="basicdata-container-two">
                <div className="temps-container">
                    <div className="current-temp">{props.weatherData.currentTemp}°c</div>
                    <div className="min-max">
                        <div className="min">{props.weatherData.minTemp}°c</div>
                        <div className="max">{props.weatherData.maxTemp}°c</div>
                    </div>
                </div>
                <CurrentWeatherIcon weatherDescription={props.weatherData.description}/>
            </div>
        </div>
    )

}