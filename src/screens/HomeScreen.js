import { ActivityIndicator } from "react-native";
import React from "react";
import useFetch from "../hooks/useFetch";
import { HeadingOne, HeadingTwo, HeadingThree } from "../styles/GlobalStyles";
import {
  Container,
  List,
  CountryContainer,
  CountryFlagContainer,
  CountryFlag,
  CountryName,
  CountryInfo,
} from "../styles/HomeStyles";
import { Header } from "../components/Header/Header";

export const HomeScreen = ({ navigation }) => {
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(`${BASE_URL}/all`);
  const numbro = require("numbro");

  if (error) {
    console.log(error);
  } else {
    return (
      <Container>
        <Header />
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <List>
            {data.map(({ cca3, name, flags, population, region, capital }) => (
              <CountryContainer
                key={cca3}
                onPress={() => {
                  navigation.navigate("Country", {
                    countryName: name.common,
                  });
                }}
              >
                <CountryFlagContainer>
                  <CountryFlag source={{ uri: `${flags.png}` }} />
                </CountryFlagContainer>
                <CountryName>
                  <HeadingOne>{name.common}</HeadingOne>
                </CountryName>
                <CountryInfo>
                  <HeadingTwo>Population: </HeadingTwo>
                  <HeadingThree>
                    {numbro(population).format({
                      thousandSeparated: true,
                    })}
                  </HeadingThree>
                </CountryInfo>
                <CountryInfo>
                  <HeadingTwo>Region: </HeadingTwo>
                  <HeadingThree>{region}</HeadingThree>
                </CountryInfo>
                <CountryInfo>
                  <HeadingTwo>Capital: </HeadingTwo>
                  <HeadingThree>{capital || "None"}</HeadingThree>
                </CountryInfo>
              </CountryContainer>
            ))}
          </List>
        )}
      </Container>
    );
  }
};
