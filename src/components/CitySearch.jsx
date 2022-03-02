import React, { useState } from "react";
import api from "../api";

export const CitySearch = (props) => {
    // const [city, setCity] = useState(null)
    // const [displayCity, setDisplayCity] = useState(false)
    const [query, setQuery] = useState('')
    // const [weather, setWeather] = useState({})

    const handleErrors = (response) => {
        let error = document.getElementsByClassName("error-message")

        if (!response.ok) {
            throw Error("what now?" + error)
        }
        return response;
    }

    const search = evt => {
        if (evt.key === 'Enter') {
            fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
                .then(handleErrors)
                .then(res => res.json())
                .then(result => {
                    props.handleSearch(result)
                    console.log(result)
                })
                .catch(error => {
                    console.error("Location not found")
                })
        }
    }

    return (
        <div>
            <div className="search-box">
                <input
                    onChange={e => setQuery(e.target.value)}
                    value={query}
                    onKeyPress={e => search(e)}
                    placeholder="Search..."
                    type="text"
                />
            </div>
            <span className="error-message"></span>
        </div>
    )
}