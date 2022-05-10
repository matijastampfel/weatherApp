import { useState, useEffect, useCallback } from "react";

import "./App.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import SevenDays from "./components/SevenDays/SevenDays.tsx";
import Now from "./components/Now/Now.tsx";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [forecastFive,  setForecastFive] = useState([]);

  const API_KEY = "2f6e21b516b6278b53b0342b7cc13e06";

  const onCityHandler = useCallback(
    (city) => {
      setCity(city);
    },
    [city]
  );

  const onSelectCity = useCallback(
    (selectedCity) => {
      setSelectedCity(selectedCity);
    },
    [selectedCity]
  );

  const onLatHandler = useCallback(
    (lat) => {
      setLat(lat);
    },
    [lat]
  );

  const onLonHandler = useCallback(
    (lon) => {
      setLon(lon);
    },
    [lon]
  );

  console.log("selectedCity", selectedCity);
  console.log("lat", lat);
  console.log("lon", lon);
  console.log('forecastFive', forecastFive.list)

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${
        city === "" ? "London" : city
      }&limit=5&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [city]);

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=${lat === "" ? "51.5073219" : lat}&lon=${lon === "" ? "-0.1276474" : lon}&appid=${API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setForecastFive(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(false);
          setError(error);
        }
      );
  }, [lat]);

  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar
          items={items}
          onCityHandler={onCityHandler}
          onLatHandler={onLatHandler}
          onLonHandler={onLonHandler}
          onSelectCity={onSelectCity}
        />
        <Now forecastFive={forecastFive} isLoaded={isLoaded}/>
        <SevenDays forecastFive={forecastFive} isLoaded={isLoaded}/>
      </header>
    </div>
  );
}

export default App;
