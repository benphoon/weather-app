import React from "react";
import Sunny from "../assets/animated/day.svg"

export const CurrentWeatherIcon = (props) => {
    const weatherDesciptions = {
        day_clear: "../assets/animated/day.svg",

    }

    // let weatherIcon = ()

    return (
        <div className="currentweathericon-container">
            <img className="weather-icon" src={Sunny} alt="" />
        </div>
    )
}