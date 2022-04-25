import React from "react";
import { TouchableOpacity } from "react-native";
import { HeadingOne, HeadingTwo } from "../styles/GlobalStyles";
import { HeaderContainer } from "../styles/HeaderStyles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeadingOne>Where in the world?</HeadingOne>
      <TouchableOpacity>
        <HeadingTwo>Dark Mode</HeadingTwo>
      </TouchableOpacity>
    </HeaderContainer>
  );
};
