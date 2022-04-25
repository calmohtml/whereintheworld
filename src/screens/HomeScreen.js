import { TextInput, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { HeadingThree } from "../styles/GlobalStyles";
import { Container, List, CountryContainer } from "../styles/HomeStyles";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Flag } from "../components/Flag";
import { Name } from "../components/Name";

export const HomeScreen = ({ navigation }) => {
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(`${BASE_URL}/all`);
  const numbro = require("numbro");
  const [text, setText] = useState("");

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
            <TextInput
              defaultValue={text}
              placeholder="Search"
              onChangeText={(newText) => setText(newText)}
            />
            {data
              .filter(({ name }) => {
                if (text == "") {
                  return name.common;
                } else if (
                  name.common.toLowerCase().includes(text.toLowerCase())
                ) {
                  return name.common;
                }
              })
              .map(
                ({ cca3, name, flags, flag, population, region, capital }) => (
                  <CountryContainer
                    key={cca3}
                    onPress={() => {
                      navigation.navigate("Country", {
                        countryName: name.common,
                      });
                    }}
                  >
                    <Flag flags={{ uri: `${flags.png}` }} />
                    <Name name={name.common} emoji={flag} />
                    <Info
                      infoName="Population: "
                      infoDetails={numbro(population).format({
                        thousandSeparated: true,
                      })}
                    />
                    <Info infoName="Region: " infoDetails={region} />
                    {capital !== undefined ? (
                      <Info
                        infoName="Capital: "
                        infoDetails={capital.map((capital) => (
                          <HeadingThree key={capital}>{capital} </HeadingThree>
                        ))}
                      />
                    ) : (
                      <Info infoName="Capital: " infoDetails="None" />
                    )}
                  </CountryContainer>
                )
              )}
          </List>
        )}
      </Container>
    );
  }
};
