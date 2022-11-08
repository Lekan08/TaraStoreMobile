import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Profile({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Profile Screen</Text>
      {/* <Button onPress={() => navigation.navigate("changePassword")} /> */}
      <TouchableOpacity onPress={() => navigation.navigate("changePassword")}>
        <View style={{
          backgroundColor: "#F96D02",
          height: "30%",
          width:"100%",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 10,
        }}>
          <Text style={{
            fontSize: 15,
            color: "#ffff",
            // alignSelf:"center",
            // borderBottomWidth: 5
          }}>    Change Password</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
