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
      <Text style={globalStyles.titleText}>Transaction History Screen</Text>
      <View style={{
        flexDirection
      }}>
        <Text style={styles.head}>Date:</Text>
        <Text style={styles.head}>Amount:</Text>
        <Text style={styles.head}>Name:</Text>
        <Text style={styles.head}>No of Items:</Text>
      </View>
      














      {/* var oneRecord = "";
                oneRecord = '<tr><td>' + jsonData[i].title + '</td><td>' + jsonData[i].content + '</td><td>' + changeType(jsonData[i].status) + '</td><td>' + changeDate(jsonData[i].createdTime) +  '</td><td class="options-ham-menu"> <div class="actions dropdown"> \
                                <span class="actions  dropdown-toggle" href="#"  id="action-dropDown2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">...</span> \
                                <div class="action dropdown-menu" aria-labelledby="action-dropDown2"> \
                                <a class="dropdown-item" href="#">Placeholder</a></div></div></td></tr>';
            
            listing_table.innerHTML += oneRecord; */}
    </View>
  );
  
}
const styles = StyleSheet.create({
 head:{
  flexDirection: "row",
  width: 150,
  alignItems: "center",
  backgroundColor:"#fff"
 }
})