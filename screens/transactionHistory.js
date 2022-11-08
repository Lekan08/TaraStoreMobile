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

export default function TransactionHistory({ navigation }) {
  return (
    <View style={globalStyles.container}>
    <View style={{
      backgroundColor: "#54B435",
      height:"100%",
      borderRadius: 20,
    }}>
<Text style={{
  color: "#ffff",
  fontSize: 50,
  alignSelf:"center",
  paddingTop: 40,
}}>
  YOUR SHITTY SECRET 😂😂🤣
</Text>
    </View>
    </View>
  );
}
