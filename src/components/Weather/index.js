import './index.css'
import axios from 'axios'
import {useState} from 'react'
import Topbar from '../Topbar'
import Sidebar from '../Sidebar'

export default function Weather() {
  const state = [
    ' ',
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jammu and Kashmir',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Tripura',
    'Uttarakhand',
    'Uttar Pradesh',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli',
    'Daman and Diu',
    'Delhi',
    'Lakshadweep',
    'Puducherry',
  ]
  const [weather, setWeather] = useState([''])

  function fetchWeather(event) {
    console.log(document.getElementById('State').value)
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: `${event.target.value},in`,
        lat: '0',
        lon: '0',
        callback: 'test',
        id: '2172797',
        lang: 'null',
        units: 'imperial',
        mode: 'xml',
      },
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': 'f1ca13614bmsh3ee6ac4c6245391p1fa242jsn4b1528031810',
      },
    }

    axios
      .request(options)
      .then(response => {
        const data = response.data.substring(5, response.data.length - 1)
        const parsedData = JSON.parse(data)
        console.log(parsedData.main)
        setWeather(parsedData.main)
      })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="row-container">
      <Sidebar activeTabId="WEATHER" />
      <div className="col-container">
        <Topbar />
        <h1 className="form-heading">Weather</h1>
        <div className="weather-container">
          <p className="input-label">Select State</p>
          <div>
            <select
              className="state"
              id="State"
              name="State"
              onChange={event => {
                fetchWeather(event)
              }}
            >
              {state.map(val => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
          <div className="climate-info-container">
            <div className="temp">
              <p className="forecast-heading">Temperature</p>
              <h1 className="temp-item">{weather.temp}&deg;c</h1>
            </div>
            <p className="vr"> </p>
            <div className="temp">
              <p className="forecast-heading">Humidity</p>
              <h1 className="temp-item">{weather.humidity}</h1>
            </div>
            <p className="vr"> </p>
            <div className="temp">
              <p className="forecast-heading">Pressure</p>
              <h1 className="temp-item">{weather.pressure}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
