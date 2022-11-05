import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Form,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import SweetAlert from 'react-native-sweet-alert';
import { Picker } from "@react-native-picker/picker";
import AllCountriesAndStates from "../countries-states-master/countries";
// import Header from "./components/header";
// import TodoItem from "./components/todoItem";
// import AddTodo from "./components/addTodo";
// import Sandbox from "./components/sandbox";
// import {Ionicons} from '@ex'
export default function Registration({ navigation }) {
  const [firstnamex, setFirstname] = useState("");
  const [lastnamex, setLastname] = useState("");
  const [emailx, setEmail] = useState("");
  const [cityx, setCity] = useState("");
  const [addressx, setAddress] = useState("");
  const [passwordx, setPassword] = useState("");
  const [rPasswordx, setRPassword] = useState("");
  // const [countryx, setCountryx] = useState("");

  const { countriesAndStates: AlCountry } = AllCountriesAndStates();
  const [allStates, setAllStates] = useState([]);
  const [residentialStatex, setResidentialState] = useState("");
  const [residentialCountryx, setResidentialCountry] = useState("");

  const handleOnChangeRCCountry = (valuex) => {
    console.log(valuex);
    const filteredItems = AlCountry.filter((item) => item.name === valuex);
    console.log(filteredItems);
    setAllStates(filteredItems[0].states);
    setResidentialCountry(valuex);
  };

  const handleOnChangeRCState = (valuex) => {
    setResidentialState(valuex);
  };

  // const handleOnChangeNationality = (e) => {
  //   setNationality(e.target.value);
  // };

  const handlePress = () => {
    const raw = JSON.stringify({
      firstname: firstnamex,
      lastname: lastnamex,
      email: emailx,
      country: residentialCountryx,
      state: residentialStatex,
      city: cityx,
      address: addressx,
      password: passwordx,
    });
    const myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const url = "https://tarastoreservice.plutospace.space";

    fetch(`${url}/users/add`, requestOptions)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.status === "SUCCESS") {
          Alert.alert(result.status, result.message, [{text: "Continue", onPress:() =>{
          navigation.navigate("Home", {replace: true})  
          }}]);
        } else {
          Alert.alert(result.status, result.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // const raw = JSON.stringify({
    //   username: usernamex,
    //   password: passwordx,
    // });
    // const myHeaders = {
    //   "Accept": "application/json",
    //   "Content-Type": "application/json",
    // };
    // const requestOptions = {
    //   method: "POST",
    //   headers: myHeaders,
    //   body: raw,
    // };
    // fetch("https://mywebsite.com/endpoint/", requestOptions)
    // .then((response) => response.json())
    // .then((data) => console.log(data))
    // .catch((err) => {
    //   console.log(err);
    //  });
  };

  const clickHandler = () => {
    if (
      firstnamex.length === 0 ||
      firstnamex === "" ||
      lastnamex.length === 0 ||
      lastnamex === "" ||
      emailx.length === 0 ||
      emailx === "" ||
      cityx.length === 0 ||
      cityx === "" ||
      addressx.length === 0 ||
      addressx === "" ||
      passwordx.length === 0 ||
      passwordx === "" ||
      rPasswordx.length === 0 ||
      rPasswordx === ""
    ) {
      Alert.alert("Damm", "You can't fuckin leave this place empty dude!!");
    } else {
      handlePress();
    }

    // SweetAlert.showAlertWithOptions({
    //   title: result.status,
    //   subTitle: result.message,
    //   confirmButtonTitle: 'OK',
    //   confirmButtonColor: '#000',
    //   otherButtonTitle: 'Cancel',
    //   otherButtonColor: '#dedede',
    //   backgroundColor: "#F96D02",
    //   style: 'success',
    //   cancellable: true
    // },
    //   callback => console.log('callback'));
    
    //fetching api
    // const raw = JSON.stringify({
    //   username: usernamex,
    //   password: passwordx,
    // });
    // const myHeaders = {
    //   Accept: "application/json",
    //   "Content-Type": "application/json",
    // };

    // const url = "https://tarastoreservice.plutospace.space";
    // fetch(url + "http://users/doLogin", {
    //   method: "GET",
    //   headers: myHeaders,
    //   body: raw,
    // });
  };

  return (
    // <Sandbox />
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image source={require("../images/house_of_tara_logo.png")} />
        </View>
        <View style={{ borderRadius: 5 }}>
          <Text
            style={{
              fontSize: 40,
              fontWeight: "900",
              color: "#ffffff",
              paddingHorizontal: 0,
              paddingTop: 40,
              fontFamily: "serif",
              width: 300,
            }}
          >
            Let’s Help You Find Your Match
          </Text>
        </View>
        <Text style={{ color: "#ffffff" }}>
          Meeting the perfect one shouldn't be a hassle.
        </Text>
        <View style={{ paddingTop: 40 }}>
          <Text style={styles.inputText}>First Name:</Text>
          <TextInput
            keyboardType="default"
            placeholder="First Name"
            value={firstnamex}
            onChangeText={(value) => setFirstname(value)}
            style={styles.input}
            placeholderTextColor={"#777"}
          />
          <Text style={styles.inputText}>Last Name:</Text>
          <TextInput
            keyboardType="default"
            placeholder="Last Name"
            value={lastnamex}
            onChangeText={(value) => setLastname(value)}
            style={styles.input}
            placeholderTextColor={"#777"}
          />
          <Text style={styles.inputText}>Email:</Text>
          <TextInput
            keyboardType="default"
            placeholder="Email"
            value={emailx}
            onChangeText={(value) => setEmail(value)}
            style={styles.input}
            placeholderTextColor={"#777"}
          />
          <Picker
            style={{ color: "#ffffff" }}
            selectedValue={residentialCountryx}
            onValueChange={(newValue) => handleOnChangeRCCountry(newValue)}
          >
            <Picker.Item label="Select Country" value="" />
            {AlCountry.map((apic) => (
              <Picker.Item
                label={apic.name}
                key={apic.code3}
                value={apic.name}
              />
            ))}
          </Picker>
          <Picker
            style={{ color: "#ffffff" }}
            selectedValue={residentialStatex}
            onValueChange={(newValue) => handleOnChangeRCState(newValue)}
          >
            <Picker.Item label=" Select State" value="" />
            {allStates.map((apic) => (
              <Picker.Item
                label={apic.name}
                key={apic.code3}
                value={apic.name}
              />
            ))}
          </Picker>
          <Text style={styles.inputText}>City::</Text>
          <TextInput
            keyboardType="default"
            placeholder="City"
            value={cityx}
            onChangeText={(value) => setCity(value)}
            style={styles.input}
            placeholderTextColor={"#777"}
          />
          <Text style={styles.inputText}>House Address:</Text>
          <TextInput
            keyboardType="default"
            placeholder="Address"
            value={addressx}
            onChangeText={(value) => setAddress(value)}
            style={styles.input}
            placeholderTextColor={"#777"}
          />
          <Text style={styles.inputText}>Password:</Text>
          <TextInput
            placeholder="Password"
            value={passwordx}
            onChangeText={(value) => setPassword(value)}
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={"#777"}
          />
          <Text style={styles.inputText}>Confirm Password:</Text>
          <TextInput
            placeholder="Confirm Password"
            value={rPasswordx}
            onChangeText={(value) => setRPassword(value)}
            style={styles.input}
            secureTextEntry={true}
            placeholderTextColor={"#777"}
          />
          <TouchableOpacity onPress={clickHandler}>
            <View style={styles.loginButton}>
              <Text style={styles.loginText}>REGISTER</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              paddingTop: 15,
              flexDirection: "row",
            }}
          >
            <Text style={styles.inputText}>Have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.link}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: "#0F0F0F",
  // },
  // content: {
  //   padding: 40,
  // },
  // list: { marginTop: 20 },
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
    alignItems: "center",
    paddingTop: 60,
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 5,
    width: 300,
    color: "#fff",
    paddingHorizontal: 20,
    borderRadius: 50,
  },
  loginButton: {
    padding: 15,
    marginTop: 30,
    backgroundColor: "#F96D02",
    marginHorizontal: 10,
    borderRadius: 50,
  },
  loginText: {
    textAlign: "center",
    color: "#fff",
  },
  inputText: {
    marginTop: 10,
    alignSelf: "center",
    color: "#fff",
  },
  item: {
    padding: 30,
    marginTop: 24,
    backgroundColor: "#F96D02",
    fontSize: 24,
    marginHorizontal: 10,
  },
  link: {
    marginTop: 10,
    color: "#F96D02",
  },
});

{
  /* <View>
      {people.map((item) => {
        return (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        );
      })}
    </View> */
}
