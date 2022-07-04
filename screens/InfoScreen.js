import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native";
import { Keyboard } from "react-native";

const InfoScreen = () => {
  const Navigation = useNavigation();
  useLayoutEffect(() => {
    Navigation.setOptions({
      headerTitle: "Update Your Profile",
      headerStyle: {
        backgroundColor: "#FF5864",
      },
      headerTitleStyle: {
        color: "white",
      },
    });
  }, []);
  const [user, setUser] = useState();
  const [age, setAge] = useState();
  const [city, setCity] = useState();

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Image
            source={require("../assets/logoLong.png")}
            style={styles.logo}
            resizeMode={"contain"}
          />
          <View style={styles.body}>
            <View>
              <Text style={styles.text}>Update Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setUser}
              />
            </View>
            <View style={styles.padding}>
              <Text style={styles.text}>Enter Age</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setAge}
                keyboardType={"numeric"}
              />
            </View>
            <View style={styles.padding}>
              <Text style={styles.text}>Enter City</Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={setCity}
              />
            </View>
          </View>
          <View style={{ height: 300 }}></View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default InfoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // position: "absolute",
    height: "100%",
    // top: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: "60%",
    height: "15%",
  },
  body: {
    flex: 1,
    paddingHorizontal: "10%",
    paddingTop: -100,
    height: "15%",
    width: "100%",
  },
  text: {
    color: "black",
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingTop: 16,
    fontSize: 18,
  },
  padding: {
    paddingTop: "15%",
  },
});
