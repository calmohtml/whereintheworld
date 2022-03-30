import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  FlatList,
  TouchableOpacity,
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
            <Text>Home</Text>
            <FlatList
              data={data}
              keyExtractor={(item) => item.cca3}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => console.log("Hello!")}>
                  <Text>{item.cca3}</Text>
                </TouchableOpacity>
              )}
            />
          </SafeAreaView>
        )}
      </Fragment>
    );
  }
};
