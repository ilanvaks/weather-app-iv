
import "./currentWeather.css"

export default function CurrentWeather() {

  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny </p>
        </div>
        <img alt= "weather" className="weather-icon" src="/icons01.png" />
      </div>
    </div>
  )
}