import { useWeatherStor } from '../../store/weatherStore'
import './Weather.css'

function Weather() {
    const { weather } = useWeatherStor()
    return (
        <div>
            {weather ? (
                <div className="weather">
                    <div className="weather-header">
                        <img 
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
                            alt="weather icon"
                            className="weather-icon"
                        />
                        <h1 className="city-name">{weather.name}</h1>
                    </div>
                    
                    <div className="temperature">
                        <span className="temp">{Math.round(weather.main.temp)}°</span>
                    </div>
                    
                    <div className="weather-description">
                        <p className="text">{weather.weather[0].description}</p>
                    </div>
                    
                    <div className="weather-details">
                        <div className="item x">
                            <span className="label">Ощущается</span>
                            <span className="value">{Math.round(weather.main.feels_like)}°</span>
                        </div>
                        <div className="item x">
                            <span className="label">Влажность</span>
                            <span className="value">{weather.main.humidity}%</span>
                        </div>
                        <div className="item">
                            <span className="label">Ветер</span>
                            <span className="value">{weather.wind.speed} м/с</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="state">
                    <h1>Введите ваш город</h1>
                </div>
            )}
        </div>
    )
}

export default Weather
