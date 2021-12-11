import React from "react";

export class CitySearch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: null,
            displayCity: false
        }
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.handleClick()
            console.log(e)
        }
    }

    handleChange = e => {
        this.setState({ city: e.target.value })
        if (e.target.value === '') {
            this.setState({ displayCity: false })
        }
    }

    handleClick = () => {
        this.setState({ displayCity: true })
        console.log(this.state.city)
    }

    render() {
        return (
            <div className="search-box">
                <input
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Search..."
                    type="text"
                />
            </div>
        )
    }
}