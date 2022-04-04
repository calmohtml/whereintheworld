import { ActivityIndicator, SafeAreaView, Button, Text } from "react-native";
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
import { Header } from "../components/Header/Header";

export const CountryScreen = ({ route, navigation }) => {
  const { countryName } = route.params;
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(
    `${BASE_URL}/name/${countryName}?fullText=true`
  );
  const numbro = require("numbro");

  if (error) {
    console.log(error);
  } else {
    return (
      <Container>
        <Header />
        <Button onPress={() => navigation.navigate("Home")} title="Go back" />
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <SafeAreaView>
            <List
              data={data}
              keyExtractor={(item) => item.cca3}
              renderItem={({ item }) => (
                <CountryContainer onPress={() => console.log(item.cca3)}>
                  <CountryName>
                    <HeadingOne>{item.name.common}</HeadingOne>
                  </CountryName>
                </CountryContainer>
              )}
            />
          </SafeAreaView>
        )}
      </Container>
    );
  }
};
