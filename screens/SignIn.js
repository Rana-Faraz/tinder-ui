import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function SignIn(props) {
  const Navigation = useNavigation();
  const [user, setUser] = useState();
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.box}>
        <TouchableOpacity onPress={() => Navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.heading}>My name is</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            onChangeText={setUser}
            maxLength={10}
          />
        </View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <>
            {user ? (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() =>
                    Navigation.navigate("Home", {
                      paramKey: user,
                    })
                  }
                >
                  <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <TouchableOpacity disabled style={styles.button}>
                  <Text style={styles.text}>Continue</Text>
                </TouchableOpacity>
              </View>
            )}
          </>
        </KeyboardAvoidingView>
        <StatusBar style="dark" animated />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

export default SignIn;

const styles = StyleSheet.create({
  box: { flex: 1, marginHorizontal: 10 },
  container: {
    flex: 1,
    marginHorizontal: "15%",
  },
  heading: { fontSize: 36, fontWeight: "bold", paddingVertical: 10 },
  input: {
    width: "100%",
    borderStyle: "solid",
    borderBottomWidth: 1,
    paddingVertical: 4,
    paddingTop: 16,
    fontSize: 18,
  },
  button: {
    position: "absolute",
    bottom: 30,
    // left: "-3%",
    // width: "100%",
    backgroundColor: "#ff4f71",
    // marginHorizontal: "30%",
    borderRadius: 16,
    padding: 16,
    paddingHorizontal: 40,
  },
  buttonDisable: {
    position: "absolute",
    bottom: 80,
    left: "-3%",
    width: "100%",
    backgroundColor: "#ff4f71",
    marginHorizontal: "35%",
    borderRadius: 16,
    padding: 16,
    opacity: 0.4,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
    color: "white",
  },
});
