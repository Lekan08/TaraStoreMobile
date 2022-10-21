import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require("./images/house_of_tara_logo.png")} />
      <View style={{ borderRadius: 5 }}>
        <Text
          style={{
            fontSize: 56,
            color: "#ffffff",
            paddingHorizontal: 0,
            fontFamily: "serif",
            width: 300,
          }}
        >
          Let’s Help You Find Your Match
        </Text>
      </View>
      <Text style={{ color: "#ffffff" }}>
        Meeting the perfect one shouldn’t be a hassle.
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    alignItems: "center",
    justifyContent: "center",
  },
});
