import React from "react";
import { CurrentWeatherIcon } from "./CurrentWeatherIcon";

export class BasicData extends React.Component {

    render() {
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
                <div className="location">Perth, Australia</div>
                <div className="date">{dateBuilder(new Date())}</div>
                <div className="basicdata-container-two">
                    <div className="temps-container">
                        <div className="current-temp">35°c</div>
                        <div className="min-max">
                            <div className="min">19°c</div>
                            <div className="max">35°c</div>
                        </div>
                    </div>
                    <CurrentWeatherIcon />
                </div>
            </div>
        )
    }
}