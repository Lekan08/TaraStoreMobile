import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: "one",
    title: "JUST TRAVEL",
    text: "The best things is to look natural, but it takes make-up to look natural.",
    image: require("../images/appslider1.png"),
  },
  {
    key: "two",
    title: "TAKE A BREAK",
    text: "Joy is the best make-up. But a little lipstick is a close runner-up",
    image: require("../images/perfume.jpeg"),
  },
  {
    key: "three",
    title: "ENJOY YOUR JOURNEY",
    text: "Beauty, to me , is about being comfortable in your own skin. That, a kik-ass red lipsick.",
    image: require("../images/makeup.jpeg"),
  },
];

export default function Appiintro({ navigation }) {
  const [showHomePage, setshowHomePage] = useState(false);
  const _renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, backgroundColor: "#BAD1C2" }}>
        <Image
          source={item.image}
          style={{
            resizeMode: "cover",
            height: "60%",
            width: "100%",
            borderBottomLeftRadius: 35,
            borderBottomRightRadius: 35,
          }}
        />
        <Text
          style={{
            paddingTop: 25,
            paddingBottom: 10,
            fontSize: 23,
            fontWeight: "bold",
            color: "#F96D02",
            alignSelf: "center",
          }}
        >
          {item.title}
        </Text>

        <Text
          style={{
            textAlign: "center",
            color: "#0f0f0f",
            fontSize: 16,
            paddingHorizontal: 30,
          }}
        >
          {item.text}
        </Text>

        <TouchableOpacity
          style={{ width: 300, paddingTop: 10 }}
          onPress={() => navigation.navigate("Login")}
        >
          <View style={styles.loginButton}>
            <Text style={styles.loginText}>LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  if (showHomePage) {
    return <App />;
  } else
    return (
      <AppIntroSlider
        renderItem={_renderItem}
        data={slides}
        dotStyle={{
          backgroundColor: "#0f0f0f",
        }}
        activeDotStyle={{
          backgroundColor: "#F96D02",
          width: 30,
        }}
      />
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  loginButton: {
    padding: 15,
    marginTop: 30,
    marginLeft: 45,
    backgroundColor: "#F96D02",
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 15,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
  },
});
