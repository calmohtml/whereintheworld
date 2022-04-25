import React from "react";
import useFetch from "../hooks/useFetch";
import { View, ActivityIndicator, Text } from "react-native";
import { HeadingThree } from "../styles/GlobalStyles";
import { Header } from "../components/Header";
import {
  Container,
  ReturnButton,
  ReturnButtonText,
  Country,
  CountryInfoSeparator,
  BorderCountryContainer,
  BorderCountry,
} from "../styles/CountryStyles";
import { Flag } from "../components/Flag";
import { Name } from "../components/Name";
import { Info } from "../components/Info";

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
                flag,
                demonyms,
                area,
                name: { common, nativeName },
              }) => (
                <View key={cca3}>
                  <Flag flags={{ uri: `${flags.png}` }} />
                  <Name name={common} emoji={flag} />
                  <CountryInfoSeparator>
                    <Info
                      infoName="Native name: "
                      infoDetails={
                        !nativeName ? (
                          <Text>None</Text>
                        ) : (
                          Object.values(nativeName)[0].common
                        )
                      }
                    />
                    <Info
                      infoName="Population: "
                      infoDetails={numbro(population).format({
                        thousandSeparated: true,
                      })}
                    />
                    <Info infoName="Region: " infoDetails={region} />
                    <Info
                      infoName="Sub Region: "
                      infoDetails={subregion || "Antartic"}
                    />
                    {capital !== undefined ? (
                      <Info
                        infoName="Capital: "
                        infoDetails={capital.map((capital) => (
                          <HeadingThree key={capital}>{capital} </HeadingThree>
                        ))}
                      />
                    ) : (
                      <Info infoName="Capital" infoDetails="None" />
                    )}
                  </CountryInfoSeparator>
                  <CountryInfoSeparator>
                    <Info infoName="Top Level domain: " infoDetails={tld[0]} />
                    <Info
                      infoName="Currencies: "
                      infoDetails={
                        !currencies ? (
                          <Text>None</Text>
                        ) : (
                          Object.values(currencies)[0].name
                        )
                      }
                    />
                    <Info
                      infoName="Languages: "
                      infoDetails={
                        !languages ? (
                          <Text>None</Text>
                        ) : (
                          Object.values(languages)[0]
                        )
                      }
                    />
                  </CountryInfoSeparator>
                  <CountryInfoSeparator>
                    <Info infoName="Demonyms: " infoDetails={demonyms.eng.m} />
                    <Info
                      infoName="Area: "
                      infoDetails={`${numbro(area).format({
                        thousandSeparated: true,
                      })} km²`}
                    />
                  </CountryInfoSeparator>
                  <CountryInfoSeparator>
                    <Info
                      infoName="Borders: "
                      infoDetails={
                        !borders ? (
                          <BorderCountryContainer>
                            <BorderCountry>None</BorderCountry>
                          </BorderCountryContainer>
                        ) : (
                          borders.map((borderCountry) => (
                            <BorderCountryContainer key={borderCountry}>
                              <BorderCountry>{borderCountry}</BorderCountry>
                            </BorderCountryContainer>
                          ))
                        )
                      }
                    />
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
