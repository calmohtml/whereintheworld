import React from "react";
import useFetch from "../hooks/useFetch";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Button,
} from "react-native";

export const CountryScreen = ({ navigation, route }) => {
  const { countryName } = route.params;
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(
    `${BASE_URL}/name/${countryName}?fullText=true`
  );
  const numbro = require("numbro");

  return (
    <View style={styles.container}>
      <Button title="Go back" onPress={() => navigation.navigate("Home")} />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <View>
          {data.map(({ cca3, population }) => (
            <View key={cca3}>
              <Text style={styles.title}>Population: {population}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
  title: {
    color: "white",
  },
});

{
  /* 
      <Container>
        <Header />
        <ReturnButton onPress={() => navigation.navigate("Home")}>
          <ReturnButtonText>Go back</ReturnButtonText>
        </ReturnButton>
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <Country>
            {data.map((item) => (
              <View key={item.cca3}>
                <CountryFlagContainer>
                  <CountryFlag source={{ uri: `${flags.png}` }} />
                </CountryFlagContainer>
              </View>
            ))}
          </Country>
        )} 
      </Container>
    */
}
