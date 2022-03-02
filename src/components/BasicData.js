import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { CurrentWeatherIcon } from "./CurrentWeatherIcon";

const BasicData = ({ weatherData }) => {
    const dateBuilder = (d) => {
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        let day = days[d.getDay()]
        let date = d.getDate()
        let month = months[d.getMonth()]

        return `${day}, ${date} ${month}`
    }


    return (
        <div className="basicdata-container">
            {(typeof weatherData.gradientPrompt != "undefined") ? (
                <div>
                    <div className="locationDate">
                        <div className="location">{weatherData.city}, {weatherData.country}</div>
                        <div className="date">{dateBuilder(new Date())}</div>
                    </div>
                    <CurrentWeatherIcon weatherData={weatherData} />
                    <div className="basicdata-container-two">
                        <div className="temps-container">
                            <div className="current-temp">{weatherData.currentTemp}°C</div>
                            <div className="min-max">
                                <div className="max">
                                    <FontAwesomeIcon icon={faAngleUp} size="sm" />
                                    <p>{weatherData.maxTemp}°C</p>
                                </div>
                                <div className="min">
                                    <FontAwesomeIcon icon={faAngleDown} size="sm" />
                                    <p>{weatherData.minTemp}°C</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ("")}
        </div>
    )

}
export default BasicData;