import React from "react";
import {WeatherIcon} from "./WeatherIcon"

const dummyData = {
    today: {
        minTemp: 14,
        maxTemp: 25,
        currentTemp: 15,
        description: 'fine'
    },
}

export class WeatherDisplay extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        return(
            <>
                <p>{this.props.city}</p>
                <p>
                    Today's Min = {dummyData.today.minTemp}, 
                    Today's Max = {dummyData.today.maxTemp},
                </p>
                <p>
                    It is currently {dummyData.today.currentTemp} and {dummyData.today.description}.
                </p>
                <WeatherIcon description={dummyData.today.description}/>
            </>
        )
    }
}