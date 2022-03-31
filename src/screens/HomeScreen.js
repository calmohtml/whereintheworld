import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  View,
} from "react-native";
import React, { Fragment } from "react";
import useFetch from "../hooks/useFetch";

export const HomeScreen = () => {
  const BASE_URL = "https://restcountries.com/v3.1";
  const { data, loading, error } = useFetch(`${BASE_URL}/all`);

  if (error) {
    console.log(error);
  } else {
    return (
      <Fragment>
        {loading ? (
          <ActivityIndicator size="large" color="#fafafa" />
        ) : (
          <SafeAreaView>
            <Text>Where in the world?</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.cca3}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => console.log(item.cca3)}>
                  <View>
                    <Image source={{ uri: `${item.flags.png}` }} />
                  </View>
                  <View>
                    <Text>{item.name.common}</Text>
                  </View>
                  <View>
                    <Text>Population: </Text>
                    <Text>{item.population}</Text>
                  </View>
                  <View>
                    <Text>Region: </Text>
                    <Text>{item.region}</Text>
                  </View>
                  <View>
                    <Text>Capital: </Text>
                    <Text>{item.capital}</Text>
                  </View>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        )}
      </Fragment>
    );
  }
};
