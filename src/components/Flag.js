import React from "react";
import { CountryFlagContainer, CountryFlag } from "../styles/GlobalStyles";

export const Flag = ({ flags }) => {
  return (
    <CountryFlagContainer>
      <CountryFlag source={flags} resizeMode="stretch" />
    </CountryFlagContainer>
  );
};
