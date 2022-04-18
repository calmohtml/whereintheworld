import React from "react";
import { CountryName } from "../../styles/CountryStyles";
import { HeadingOne } from "../../styles/GlobalStyles";

export const Name = ({ name }) => {
  return (
    <CountryName>
      <HeadingOne>{name}</HeadingOne>
    </CountryName>
  );
};
