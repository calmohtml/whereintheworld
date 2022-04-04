import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components";
import { HomeScreen } from "./src/screens/HomeScreen";
import { CountryScreen } from "./src/screens/CountryScreen";
import themes from "./src/themes";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <ThemeProvider theme={themes.dark}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Country" component={CountryScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
