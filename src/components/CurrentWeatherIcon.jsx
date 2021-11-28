import React from "react";
import icon from "../assets/animated/day.svg"

export class CurrentWeatherIcon extends React.Component {
    render() {
        return (
            <div className="currentweathericon-container">
                <img className="weather-icon" src={icon} alt="" />
            </div>
        )
    }
}