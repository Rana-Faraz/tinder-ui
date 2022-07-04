import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image, TouchableOpacity } from "react-native";
import { Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";
import { allUsers } from "../Users";

const HomeScreen = ({ route }) => {
  const Navigation = useNavigation();
  const swipeRef = useRef(null);
  const user = route.params.paramKey;

  return (
    <SafeAreaView>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => Navigation.navigate("Login")}>
          <Image
            source={require("../assets/userPic.png")}
            style={styles.profile}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Navigation.navigate("Info")}>
          <Image
            style={{ height: 80, width: 80 }}
            source={require("../assets/logo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ios-chatbubbles" size={30} color="#ff4f71" />
        </TouchableOpacity>
      </View>

      {/* Cards */}
      <View style={styles.container}>
        <Swiper
          ref={swipeRef}
          cards={allUsers}
          verticalSwipe={false}
          animateCardOpacity
          cardIndex={0}
          overlayLabels={{
            left: {
              title: "Pass",
              style: {
                label: {
                  textAlign: "right",
                  color: "#eb4034",
                },
              },
            },
            right: {
              title: "Like",
              style: {
                label: {
                  textAlign: "left",
                  color: "#34eb34",
                },
              },
            },
          }}
          renderCard={(card) => {
            return (
              <View key={card.id} style={styles.card}>
                <Image
                  source={{ uri: card.thumbnailUrl }}
                  style={styles.userImage}
                />
                <View style={styles.bottomCard}>
                  <View>
                    <Text style={styles.cardName}>{card.name}</Text>
                    <Text style={styles.cardCity}>{card.address.city}</Text>
                  </View>
                  <View>
                    <Text style={styles.cardAge}>{card.age}</Text>
                  </View>
                </View>
              </View>
            );
          }}
          stackSize={3}
        />
      </View>
      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.cross}
          onPress={() => swipeRef.current.swipeLeft()}
        >
          <Entypo name="cross" size={30} color={"#e85f76"} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heart}
          onPress={() => swipeRef.current.swipeRight()}
        >
          <AntDesign name="heart" size={22} color={"#68e85f"} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    marginTop: -10,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 1000,
  },
  logo: {
    height: 50,
  },
  userImage: {
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    borderRadius: 12,
  },
  card: {
    marginTop: -30,
    position: "relative",
    backgroundColor: "white",
    height: "75%",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  bottomCard: {
    position: "absolute",
    backgroundColor: "white",
    width: "100%",
    height: 80,
    bottom: 0,
    borderBottomEndRadius: 12,
    borderBottomStartRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  cardName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  cardAge: {
    fontSize: 24,
    fontWeight: "bold",
  },
  bottomButtons: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    bottom: -620,
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 1000,
  },
  heart: {
    backgroundColor: "#a9e8a5",
    padding: 15,
    borderRadius: 50,
  },
  cross: {
    backgroundColor: "#e897a4",
    padding: 10,
    borderRadius: 50,
  },
});
