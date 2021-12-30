import React, { useState, useEffect } from "react";
import { dayIcons } from "./WeatherIcons";
import { nightIcons } from "./WeatherIcons";


export const CurrentWeatherIcon = ({ weatherData }) => {

    const [icon, setIcon] = useState()

    useEffect(
        () => {
            if (weatherData.currentTime >= weatherData.sunrise && weatherData.currentTime <= weatherData.sunset) {
                setIcon(dayIcons[weatherData.gradientPrompt]);
                console.log("it's working")
            } else {
                setIcon(nightIcons[weatherData.gradientPrompt]);
                console.log("it's working")
            }
        }
    )

    return (
        <div className="currentweathericon-container">
            <img
                className="weather-icon"
                src={icon}
                alt="" />
        </div>
    )
}