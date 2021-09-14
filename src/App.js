import React from 'react';
import './App.scss';

import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/ForecastWeather';
import Searchbar from './components/Searchbar';

import { getCurrentWeather, getForecast } from './apis/openWeather';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      location: 'Argentina',
      temp: '',
      feels_like: '',
      description: '',
      icon: '',
      hourlyForecast: [],
    }

    this.onFormSubmit();
  }

  onInputChange(e){
    this.setState({
      location: e.target.value,
    });
  }

  async onFormSubmit(e){
    const weatherRes = await getCurrentWeather(this.state.location);
    const lan = weatherRes.data.coord.lat;
    const lon = weatherRes.data.coord.lon;
    const forecastRes = await getForecast(lan,lon);

    this.setState({
      temp: weatherRes.data.main.temp,
      feelsLike: weatherRes.data.main.feels_like,
      description: weatherRes.data.weather[0].main,
      icon: weatherRes.data.weather[0].icon,
      hourlyForecast: forecastRes.data.hourly,

    })
  }


  render(){
    return (
      <div className="App-header">
        <Searchbar
          location={this.state.location}
          inputChange={(e) => this.onInputChange(e)}
          formSubmitted={() => this.onFormSubmit()}
        />
        <CurrentWeather
          currentTemperature = {this.state.temp}
          feelsLike = {this.state.feelsLike}
          description = {this.state.description}
          icon = {this.state.icon}
        />
        <Forecast forecast={this.state.hourlyForecast}/>
      </div>
    );
  }
}

export default App;
