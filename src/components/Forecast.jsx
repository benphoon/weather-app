import React from "react";
import Sunny from "../assets/animated/day.svg"
import CloudyDay from "../assets/animated/cloudy-day-1.svg"
import Cloudy from "../assets/animated/cloudy.svg"
import Rainy from "../assets/animated/rainy-1.svg"
import Snowy from "../assets/animated/snowy-1.svg"
import Thunder from "../assets/animated/thunder.svg"



export class Forecast extends React.Component {
    render() {
        return (
            <div className="forecast-container">
                <div className="forecast-card" id="day-one">
                    <h2>MON</h2>
                    <img className="weather-icon" src={CloudyDay} alt="" />
                    <h2>30°c</h2>
                </div>
                <div className="forecast-card" id="day-two">
                    <h2>TUES</h2>
                    <img className="weather-icon" src={Cloudy} alt="" />
                    <h2>30°c</h2>
                </div>
                <div className="forecast-card" id="day-three">
                    <h2>WED</h2>
                    <img className="weather-icon" src={Rainy} alt="" />
                    <h2>30°c</h2>
                </div>
                <div className="forecast-card" id="day-four">
                    <h2>THUR</h2>
                    <img className="weather-icon" src={Snowy} alt="" />
                    <h2>30°c</h2>
                </div>
                <div className="forecast-card" id="day-five">
                    <h2>FRI</h2>
                    <img className="weather-icon" src={Thunder} alt="" />
                    <h2>30°c</h2>
                </div>
            </div>
        )
    }
}