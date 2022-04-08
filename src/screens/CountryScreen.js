import React from "react";
import useFetch from "../hooks/useFetch";
import { View, ActivityIndicator } from "react-native";
import { HeadingOne, HeadingTwo, HeadingThree } from "../styles/GlobalStyles";
import { Header } from "../components/Header/Header";
import {
  Container,
  ReturnButton,
  ReturnButtonText,
  Country,
  CountryFlagContainer,
  CountryFlag,
  CountryName,
  CountryInfoSeparator,
  CountryInfo,
  BorderCountryContainer,
  BorderCountry,
} from "../styles/CountryStyles";

export const CountryScreen = ({ navigation, route }) => {
  const { countryName } = route.params;
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(
    `${BASE_URL}/name/${countryName}?fullText=true`
  );
  const numbro = require("numbro");

  if (error) {
    console.error(error);
  } else {
    return (
      <Container>
        <Header />
        <ReturnButton onPress={() => navigation.navigate("Home")}>
          <ReturnButtonText>Go back</ReturnButtonText>
        </ReturnButton>
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <Country>
            {data.map(
              ({
                cca3,
                population,
                region,
                subregion,
                capital,
                tld,
                currencies,
                languages,
                flags,
                borders,
                name: { common, nativeName },
              }) => (
                <View key={cca3}>
                  <CountryFlagContainer>
                    <CountryFlag source={{ uri: `${flags.png}` }} />
                  </CountryFlagContainer>
                  <CountryName>
                    <HeadingOne>{common}</HeadingOne>
                  </CountryName>
                  <CountryInfoSeparator>
                    <CountryInfo>
                      <HeadingTwo>Native name: </HeadingTwo>
                      <HeadingThree>
                        {Object.values(nativeName)[0].common}
                      </HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Population: </HeadingTwo>
                      <HeadingThree>
                        {numbro(population).format({ thousandSeparated: true })}
                      </HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Region: </HeadingTwo>
                      <HeadingThree>{region}</HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Sub Region: </HeadingTwo>
                      <HeadingThree>{subregion}</HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Capital: </HeadingTwo>
                      <HeadingThree>{capital}</HeadingThree>
                    </CountryInfo>
                  </CountryInfoSeparator>
                  <CountryInfoSeparator>
                    <CountryInfo>
                      <HeadingTwo>Top Level domain: </HeadingTwo>
                      <HeadingThree>{tld[0]}</HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Currencies: </HeadingTwo>
                      <HeadingThree>
                        {Object.values(currencies)[0].name}
                      </HeadingThree>
                    </CountryInfo>
                    <CountryInfo>
                      <HeadingTwo>Languages: </HeadingTwo>
                      <HeadingThree>{Object.values(languages)[0]}</HeadingThree>
                    </CountryInfo>
                  </CountryInfoSeparator>
                  <CountryInfoSeparator>
                    <CountryInfo>
                      <HeadingTwo>Borders: </HeadingTwo>
                      {borders.map((borderCountry) => (
                        <BorderCountryContainer key={borderCountry}>
                          <BorderCountry>{borderCountry}</BorderCountry>
                        </BorderCountryContainer>
                      ))}
                    </CountryInfo>
                  </CountryInfoSeparator>
                </View>
              )
            )}
          </Country>
        )}
      </Container>
    );
  }
};
