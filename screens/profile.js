import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [categories, setcategories] = useState("");
  const [country, setcountry] = useState("");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [address, setaddress] = useState("");
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      // getting data
      const getUser = async () => {
        try {
          const userData = JSON.parse(await AsyncStorage.getItem("userInfo"));
          setFirstName(`${userData.firstname}`);
          setLastName(`${userData.lastname}`);
          setEmail(`${userData.email}`);
          setcategories(`${userData.categories}`);
          setcountry(`${userData.country}`);
          setstate(`${userData.state}`);
          setcity(`${userData.city}`);
          setaddress(`${userData.address}`);
          console.log(userData);
        } catch (error) {
          console.log(error);
        }
      };
      getUser();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  return (
    <View style={globalStyles.container}>
      <View
        style={{
          backgroundColor: "#ffff",
          height: "60%",
          width: "100%",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 25,
            marginLeft: 20,
          }}
        >
          Firstname: {firstName}
        </Text>

        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 25,
            marginLeft: 20,
          }}
        >
          Lastname: {lastName}
        </Text>

        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 25,
            marginLeft: 20,
          }}
        >
          Email: {email}
        </Text>

        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 25,
            marginLeft: 20,
          }}
        >
          Category: {categories}
        </Text>

        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            paddingTop: 25,
            marginLeft: 20,
          }}
        >
          Address:{address}, {city},  {state}, {country}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: "#7743DB",
          height: "10%",
          borderRadius: 30,

          alignContent: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: "#0F0F0F",
            fontWeight: "700",
            fontSize: 20,
            alignSelf: "center",
          }}
        >
          {" "}
          Edit Profile
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate("changePassword")}>
        <View
          style={{
            backgroundColor: "#54B435",
            height: "30%",
            width: "100%",
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 20,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              color: "#0F0F0F",
              fontSize: 20,
              alignSelf: "center",
              fontWeight: "700",
            }}
          >
            {" "}
            Change Password
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

// "data": Object {
//   "address": "6590 block 8 LA CA ",
//   "categories": null,
//   "city": " Los Angeles ",
//   "country": "United States",
//   "deviceID": null,
//   "email": "alexxavier508@gmail.com",
//   "firstname": "Abeeblah",
//   "id": "636a55c9e743063d91274aa2",
//   "lastname": "Abdullah",
//   "password": "1000:3f5965d5310bb3a0850f90b942a1d662:084dff9f24302ac39008862cfbd2f5ed2a520b1af2fae6ea456c5795b35146da420299fb1a9140e24b22c602cb4811b431650dee38c48bdc8f8217440ff97c85",
//   "state": "California",
//   "username": "alexxavier508@gmail.com",
