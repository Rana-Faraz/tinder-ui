import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

const LoginScreen = (props) => {
  const Navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.logo}
        source={require("../assets/tinder.png")}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => Navigation.navigate("Sign In")}
        >
          <Text style={styles.text}>Sign in</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="light" animated />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: { flex: 1 },
  container: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    bottom: 100,
    left: "-3%",
    width: "100%",
    backgroundColor: "white",
    marginHorizontal: "35%",
    borderRadius: 16,
    padding: 16,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
});
