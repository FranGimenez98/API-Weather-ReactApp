import React from "react";
import './forecast.scss'

class Forecast extends React.Component{
    render(){
        const forecastItems = this.props.forecast.map((f, i) => {
            const key = `forecast-item_${i}`
            const url = `http://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`
            let ampm = "AM";
            let hour = new Date(f.dt * 1000).getHours();
            if (hour > 12){
                hour = hour - 12;
                ampm = "PM";
            }

            return (
                <div className="forecast-items" key={key}>
                    <p className="forecast-items__hour">{hour}:00 {ampm}</p>

                    <p className="forecast-items__temp">{f.temp}°</p>

                    <img src={url} alt={f.weather[0].descrption}/>

                    <p className="forecast-items__description">{f.weather[0].main}</p>
                </div>
            )
        })
        

        return(
            <div className="forecast">
                <h2 className="forecast-title">Hourly Forecast</h2>
                <div className="forecast-item">
                    {forecastItems}
                </div>
            </div>
        )
    }
}

export default Forecast;