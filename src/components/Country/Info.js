import React from "react";
import { CountryInfo } from "../../styles/CountryStyles";
import { HeadingTwo, HeadingThree } from "../../styles/GlobalStyles";

export const Info = ({ infoName, infoDetails }) => {
  return (
    <CountryInfo>
      <HeadingTwo>{infoName}</HeadingTwo>
      <HeadingThree>{infoDetails}</HeadingThree>
    </CountryInfo>
  );
};
