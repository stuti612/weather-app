import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Template() {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Mumbai");

  useEffect(() => {
    (async function () {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e220ca9c309b96a540c24f7b1a72f851`;
      const { data } = await axios.get(url);
      //console.log(response.data);
      setCity(data);
    })();
  }, [search]);

  return (
    <div className="main">
      <div className="main__input">
        <input
          type="search"
          placeholder="City Name"
          className="main__search"
          onChange={(event) => {
            setSearch(event.target.value);
          }}
        />
        <FontAwesomeIcon
          icon="search"
          className="main__searchicon"
          size="1.5x"
        />
      </div>
      {!city ? (
        <p>No Data Found</p>
      ) : (
        <div className="main__info">
          <div className="main__city">
            <span>{city.name}</span>
          </div>
          <div className="main__tempinfo">
            <img
              src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
              className="main--icon"
            />
            <div className="main--info">
              <div className="info--temp">
                {city.main.temp}
                <span>&deg;C</span>
              </div>
              <div className="info--description">
                {city.weather[0].description}
              </div>
              <div className="info--feels">
                Feels like : {city.main.feels_like}&deg;C
              </div>
              <div className="info--temp_minmax">
                Min : {city.main.temp_min}&deg;C | Max : {city.main.temp_max}
                &deg;C
              </div>
              <div className="info--humid">Humidity : {city.main.humidity}</div>
              <div className="info--speed">
                Wind Speed : {city.wind.speed} m/s
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Template;
