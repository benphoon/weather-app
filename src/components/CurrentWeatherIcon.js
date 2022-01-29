import React, { useState, useEffect } from "react";
import { dayIcons } from "./WeatherIcons";
import { nightIcons } from "./WeatherIcons";


export const CurrentWeatherIcon = ({ weatherData }) => {

    const [icon, setIcon] = useState()

    useEffect(
        () => {
            if (weatherData.currentTime >= weatherData.sunrise && weatherData.currentTime <= weatherData.sunset) {
                setIcon(dayIcons[weatherData.gradientPrompt]);
            } else {
                setIcon(nightIcons[weatherData.gradientPrompt]);
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