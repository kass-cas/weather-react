import Forecast from "./Forecast";
import Footer from "./Footer";
import "./App.css";
import "./Forecast.css";
import "./Footer.css";
import "./Weather.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

function Weather() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <form className="mb-3">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Search City..."
                    className="form-control"
                    autocomplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>

            <div className="current-location-info">
              <div className="city">
                <h1>Los Angeles</h1>
                <ul>
                  <li>
                    <span id="date-stamp">November 28, 2022</span>
                  </li>
                  <li>
                    <span className="weatherDescription">Sunny</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="d-flex weather-temperature">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                    alt="Clear"
                  />
                  <div>
                    <strong>101</strong>
                    <span className="units">
                      <a href="/">°F</a> | <a href="/">°C</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    Humidity: <span>29</span>%
                  </li>
                  <li>
                    Wind: <span>10</span> mph
                  </li>
                </ul>
              </div>
            </div>
            <hr />

            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Weather;
