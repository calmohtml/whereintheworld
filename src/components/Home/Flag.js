import React from "react";
import { CountryFlagContainer, CountryFlag } from "../../styles/HomeStyles";

export const Flag = ({ flags }) => {
  return (
    <CountryFlagContainer>
      <CountryFlag source={flags} />
    </CountryFlagContainer>
  );
};
