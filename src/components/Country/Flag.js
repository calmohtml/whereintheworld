import React from "react";
import { CountryFlagContainer, CountryFlag } from "../../styles/CountryStyles";

export const Flag = ({ flags }) => {
  return (
    <CountryFlagContainer>
      <CountryFlag source={flags} />
    </CountryFlagContainer>
  );
};
