import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  Button,
  Pressable,
  FlatList,
  TextInput,
  Modal,
  Alert,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import { Picker } from "@react-native-picker/picker";
import AllCountriesAndStates from "../countries-states-master/countries";

import { REACT_APP_TARA_URL } from "@env";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

function Cart() {
  const [userDatax, setUserData] = useState({});

  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      async function fetchData() {
        console.log("nowwww");
        const myHeaders = {
          Accept: "application/json",
          "Content-Type": "application/json",
        };
        let userID;
        // getting data
        try {
          const userData = JSON.parse(await AsyncStorage.getItem("userInfo"));
          setUserData(userData);
          userID = userData.id;
        } catch (error) {
          console.log(error);
        }
        const headers = myHeaders;
        let isMounted = true;
        console.log;
        await fetch(`${REACT_APP_TARA_URL}/purchaseRequest/gets`, {
          headers,
        })
          .then(async (res) => res.json())
          .then((result) => {
            console.log(result);
            if (result.message === "Expired Access") {
              navigate("/authentication/sign-in");
              window.location.reload();
            }
            if (result.message === "Token Does Not Exist") {
              navigate("/authentication/sign-in");
              window.location.reload();
            }
            if (result.message === "Unauthorized Access") {
              navigate("/authentication/forbiddenPage");
              window.location.reload();
            }
            if (isMounted) {
              console.log(result);
            }
          });
        return () => {
          isMounted = false;
        };
      }
      fetchData();
    }
  }, [isFocused]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Cart</Text>
    </View>
  );
}

export default Cart;
