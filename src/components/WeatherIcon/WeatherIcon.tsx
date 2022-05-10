import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloud,
  faFeather,
  faCloudRain,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export interface IWeatherIconProps {
  iconProp: string;
}

const WeatherIcon = ({ iconProp }: IWeatherIconProps) => {
  const [weatherCheck, setWeatherCheck] = useState("");

  useEffect(() => {
    const iconCheckHandler = (wait: iconProp) => {
      if (iconProp === "Clouds") {
        setWeatherCheck(faCloud);
      } else if (iconProp === "Rain") {
        setWeatherCheck(faCloudRain);
      } else if (iconProp === "Clear") {
        setWeatherCheck(faSun);
      } else {
        setWeatherCheck(faFeather);
      }
    };

    iconCheckHandler();
  }, [iconProp]);

  console.log(iconProp);
  console.log("weatherCheck", weatherCheck);

  return <FontAwesomeIcon icon={weatherCheck} size="10x" />;
};

export default WeatherIcon;
