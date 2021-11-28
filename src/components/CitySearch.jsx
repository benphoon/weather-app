import React from "react";
import { WeatherDisplay } from "./WeatherDisplay";

export class CitySearch extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            city: null,
            displayCity: false
        }
    }
    
    handleKeyPress = e => {
        if(e.key === 'Enter') {
            this.handleClick()
            console.log(e)
        }
    }
    
    handleChange = e => {
        this.setState({city: e.target.value})
        if (e.target.value === '') {
            this.setState({displayCity: false})
        }
    }

    handleClick = () => {
        this.setState({displayCity: true})
        console.log(this.state.city)
    }
    
    render() {
        return(
            <div class="search-bar">
                <input 
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search Location"
                />
                <button onClick={this.handleClick} class="hvr-sweep-to-right">Search</button>
                {
                    this.state.displayCity && <WeatherDisplay city={this.state.city} />
                }
            </div>
        )
    }
}