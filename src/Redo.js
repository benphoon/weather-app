import { CitySearch } from "./components/CitySearch";
import { BasicData } from "./components/BasicData";
import { useState } from "react/cjs/react.development";
import { DetailedData } from "./components/DetailedData";
import bpLogo from "./assets/bp-logo-black.png"


function Redo() {
    const [data, setData] = useState({})
    const handleSearch = (result) => {
        // set state
        setData({
            city: result.name,
            country: result.sys.country,
            currentTemp: result.main.temp,
            minTemp: result.main.temp_min,
            maxTemp: result.main.temp_max,
            iconPrompt: result.weather.main,
            weatherDescription: result.weather.description,
            humidity: result.main.humidity,
            windSpeed: result.wind.speed,
            windDirection: result.wind.deg
        })
        console.log(data)
    }

    return (
        <div className='app'>
            <main>
                <CitySearch
                    handleSearch={handleSearch}
                />
                <BasicData
                    weatherData={data}
                />
                <DetailedData
                    weatherData={data}
                />
            </main>
            <footer>
                <img 
                    src={bpLogo}
                    alt="Ben Phoon Logo"
                 />
            </footer>
        </div>
    );
}

export default Redo;


// To Do
// - Handle Errors
// - Figure out time and weather icons
// - Update UI and other data to pull in
// - Complete javascript functionality
// - Hook up some sort of destination library to search bar/input (Google Places API)
// - Build another version using Google Earth API. Have background of app be moving globe which centres on city depending on search input (which would return a value which can be plugged into background image?)
// - Use above to do forecast