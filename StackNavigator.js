import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import Chat from "./screens/Chat";
import LoginScreen from "./screens/LoginScreen";
import SignIn from "./screens/SignIn";
import { useState } from "react";
import InfoScreen from "./screens/InfoScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  const user = "";
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Chat" component={Chat} />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Info" component={InfoScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
