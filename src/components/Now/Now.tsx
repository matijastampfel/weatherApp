import React from "react";
import { Row, Card, Col } from "react-bootstrap";
import WeatherIcon from "../WeatherIcon/WeatherIcon.tsx";

interface INowProps {
  forecastFive: [];
  isLoaded: boolean;
}

const Now = ({ forecastFive, isLoaded }: INowProps) => {
  return (
    <div>
      {isLoaded && (
        <Row xs={12} md={12} className="g-4">
          <Col>
            <Card>
              
              <WeatherIcon iconProp={forecastFive.list[0].weather[0].main} />

              <Card.Body>
                <Card.Title></Card.Title>

                <Row xs={12} md={12} className="g-4">
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>Feels Like:</Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>
                      {forecastFive.list[0].main.feels_like} C
                    </Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>Humidity:</Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>
                      {forecastFive.list[0].main.humidity} %
                    </Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>Pressure:</Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>
                      {forecastFive.list[0].main.pressure} hPa
                    </Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>Wind:</Card.Text>
                  </Col>
                  <Col xs={6} md={6} className="g-4">
                    <Card.Text>
                      {forecastFive.list[0].wind.speed} km/h
                    </Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default Now;
