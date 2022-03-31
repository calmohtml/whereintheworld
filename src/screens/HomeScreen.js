import { ActivityIndicator, Text } from "react-native";
import React, { Fragment } from "react";
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

export const HomeScreen = () => {
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(`${BASE_URL}/all`);

  if (error) {
    console.log(error);
  } else {
    return (
      <Container>
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <Fragment>
            <HeadingOne>Where in the world?</HeadingOne>
            <List
              data={data}
              keyExtractor={(item) => item.cca3}
              renderItem={({ item }) => (
                <CountryContainer onPress={() => console.log(item.cca3)}>
                  <CountryFlagContainer>
                    <CountryFlag source={{ uri: `${item.flags.png}` }} />
                  </CountryFlagContainer>
                  <CountryName>
                    <HeadingOne>{item.name.common}</HeadingOne>
                  </CountryName>
                  <CountryInfo>
                    <HeadingTwo>Population: </HeadingTwo>
                    <HeadingThree>{item.population}</HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Region: </HeadingTwo>
                    <HeadingThree>{item.region}</HeadingThree>
                  </CountryInfo>
                  <CountryInfo>
                    <HeadingTwo>Capital: </HeadingTwo>
                    <HeadingThree>{item.capital}</HeadingThree>
                  </CountryInfo>
                </CountryContainer>
              )}
            />
          </Fragment>
        )}
      </Container>
    );
  }
};
