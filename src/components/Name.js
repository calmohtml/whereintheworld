import React from "react";
import { CountryName, HeadingOne } from "../styles/GlobalStyles";

export const Name = ({ name, emoji }) => {
  return (
    <CountryName>
      <HeadingOne>
        {name} {emoji}
      </HeadingOne>
    </CountryName>
  );
};
