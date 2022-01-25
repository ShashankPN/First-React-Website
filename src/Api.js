import React from 'react'

const apiKey = 'f8fd862019b2bb826d82e95a2b834b05';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ['Click on Refresh to Load...'],
        }
    }
    processState = (result)=>{

    }
    locationSuccess = async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        console.log('current position: ', lat, lon);
        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
            const result = await response.json();
            console.log(result);
            // processState(result);
            let arr = [];
            arr.push(`Location: ${result.name}`);
            arr.push(`Temperature: ${(result.main.temp - 273).toFixed()}`);
            arr.push(`Feels Like: ${(result.main.feels_like-273).toFixed()}`);
            arr.push(`Humidity: ${result.main.humidity}%`);
            console.log(arr);
            this.setState({
                data: arr
            })
        } catch (err) {
            console.log(err);
        }

    }
    weatherHandler = () => {
        console.log('refreshing Weather');
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.locationSuccess,
                (err) => { console.log(err) }
            );

        }
        else {
            console.log('Browser Doesnt support GeoLocation');
        }
    }
    render() {
        const { data } = this.state;

        const result = data.map((element, index) => {
            return (<li id={index}>{element}</li>)
        })
        console.log(result);
        return (
            <div className="weatherContainer">
                <hr />
                <h3>Weather Api</h3>
                <button id='refresh' onClick={this.weatherHandler}>Refresh</button>
                <ul id='apiResults'>
                    {result}
                </ul>
            </div>
        )
    }
}

export default Api;