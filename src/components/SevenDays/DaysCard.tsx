import React from "react";
import { Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTemperatureFull, faDroplet, faWind, faTemperatureHalf} from '@fortawesome/free-solid-svg-icons'
import WeatherIcon from "../WeatherIcon/WeatherIcon.tsx";


interface IDaysCardProps {
  forecastFive: [];
  dayNumber: number;
}

const DaysCard = ({ forecastFive, dayNumber }: IDaysCardProps) => {

  return (
    <>
      <Card>
      <WeatherIcon iconProp={forecastFive.list[dayNumber].weather[0].main}/>
        
        <Card.Body>
          <Card.Title>
            {forecastFive.list[dayNumber].weather[0].main}
          </Card.Title>
          <Card.Text>
          <FontAwesomeIcon icon={faTemperatureFull} /> : {forecastFive.list[dayNumber].main.feels_like} C
            <br />
            <FontAwesomeIcon icon={faDroplet} /> : {forecastFive.list[dayNumber].main.humidity} %
            <br />
            <FontAwesomeIcon icon={faTemperatureHalf} /> : {forecastFive.list[dayNumber].main.pressure} hPa
            <br />
            <FontAwesomeIcon icon={faWind} /> : {forecastFive.list[dayNumber].wind.speed} km/h
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Date: {forecastFive.list[dayNumber].dt_txt.slice(5, 10).replace("-", ".")}</small>
        </Card.Footer>
      </Card>
    </>
  );
};

export default DaysCard;
