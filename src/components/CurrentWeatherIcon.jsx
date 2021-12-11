import React from "react";
import Sunny from "../assets/animated/day.svg"

export class CurrentWeatherIcon extends React.Component {
    render() {
        return (
            <div className="currentweathericon-container">
                <img className="weather-icon" src={Sunny} alt="" />
            </div>
        )
    }
}