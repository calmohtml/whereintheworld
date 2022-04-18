import React from "react";
import { CountryName } from "../../styles/HomeStyles";
import { HeadingOne } from "../../styles/GlobalStyles";

export const Name = ({ name }) => {
  return (
    <CountryName>
      <HeadingOne>{name}</HeadingOne>
    </CountryName>
  );
};
