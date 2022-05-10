import React from "react";
import { CardGroup, Card } from "react-bootstrap";
import DaysCard from "./DaysCard.tsx";

interface ISevenDaysProps {
  forecastFive: [];
  isLoaded: boolean;
}

const SevenDays = ({ forecastFive, isLoaded }: ISevenDaysProps) => {
  return (
    <>
      {isLoaded && (
        <CardGroup>
          <DaysCard forecastFive={forecastFive} dayNumber={8}/>
          <DaysCard forecastFive={forecastFive} dayNumber={16}/>
          <DaysCard forecastFive={forecastFive} dayNumber={24}/>
          <DaysCard forecastFive={forecastFive} dayNumber={32}/>
          <DaysCard forecastFive={forecastFive} dayNumber={39}/>
        </CardGroup>
      )}
    </>
  );
};

export default SevenDays;
