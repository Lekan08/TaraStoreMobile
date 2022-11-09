// import { Row } from "bootstrap-4-react/lib/components/layout";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Button,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { globalStyles } from "../styles/global";

// export default function TransactionHistory({ navigation }) {
//   return (
//     <View style={globalStyles.container}>
//     <View style={{
//       backgroundColor: "#54B435",
//       height:"100%",
//       borderRadius: 20,
//     }}>
// <Text style={{
//   color: "#ffff",
//   fontSize: 50,
//   alignSelf:"center",
//   paddingTop: 40,
// }}>
//   YOUR SHITTY SECRET 😂😂🤣
// </Text>
//     </View>
//     </View>
//   );
// }
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
  const [amount, setAmount] = useState("");
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
          // flexDirection: "row",
          backgroundColor: "#ffff",
          width: "100%",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            color: "#0F0F0F",
            fontSize: 15,
            paddingTop: 25,
            paddingLeft: 15,
            flexDirection: "row",
            // marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            Name:{" "}
          </Text>
          <Text>
            {firstName} {lastName}
          </Text>
        </View>
        <View
          style={{
            color: "#0F0F0F",
            fontSize: 15,
            paddingTop: 25,
            paddingLeft: 15,
            flexDirection: "row",

            // marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            Amount:{" "}
          </Text>
          <Text>{firstName}</Text>
        </View>
        <View
          style={{
            color: "#0F0F0F",
            fontSize: 15,
            paddingTop: 25,
            paddingLeft: 15,
            paddingBottom: 25,
            flexDirection: "row",
            // marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontWeight: "700",
            }}
          >
            Email:{" "}
          </Text>
          <Text>{email}</Text>
        </View>
      </View>
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
