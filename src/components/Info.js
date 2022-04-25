import React from "react";
import { CountryInfo, HeadingTwo, HeadingThree } from "../styles/GlobalStyles";

export const Info = ({ infoName, infoDetails }) => {
  return (
    <CountryInfo>
      <HeadingTwo>{infoName}</HeadingTwo>
      <HeadingThree>{infoDetails}</HeadingThree>
    </CountryInfo>
  );
};
