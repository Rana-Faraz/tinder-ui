import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import StackNavigator from "./StackNavigator";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState();
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
