import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  StyleSheet,  
  ScrollView,
  TouchableOpacity,
} from "react-native";
export default function ChangePassword({ navigation }) {
    const [usernamex, getUsername] = useState("");
    const [currentPasswordx, getCurrentPassword] = useState("");
    const [newPasswordx, getNewPassword] = useState("");
    const [newRPasswordx, getRNewPassword] = useState("")

    const handlePress = () => {
      const raw = JSON.stringify({
        username: usernamex,
        password: currentPasswordx,
        newPassword: newPasswordx,
      });
      const myHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json",
      };
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
  
      const url = "https://tarastoreservice.plutospace.space";
  
      fetch(`${url}/users/changePass`, requestOptions)
          .then((res) => res.json())
          .then((result) => {
         if (result.status === "SUCCESS"){
          Alert.alert(result.status, result.message, [{text: "Continue", onPress:() => {
            navigation.navigate("Home", {replace: true})
          }}]);
         }else{ 
          Alert.alert(result.status, result.message);
         }
          })
          .catch((error) => {
            console.log(error);
          });
         
        };
 
    const clickHandler = () => {

        if(usernamex.length === 0 || usernamex.length === "" || 
           currentPasswordx.length === 0 || currentPasswordx.length === "" ||
           newPasswordx.length === 0 || newPasswordx.length === "" ||
           newRPasswordx.length === 0 || newRPasswordx.length === ""){
           Alert.Alert("Please fill all empty textfields") 
           }  
        // if(newPasswordx !== newRPasswordx){
        //     Alert.Alert("passwords don't match")
        // }   
        else handlePress();   
           
    }

    return(
        <View>
          <ScrollView>
         {/* <Image source={require("../images/house_of_tara_logo.png")} /> */}

            <View>
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
                    Change your Password
                </Text>
            </View>  
            <View style={{ paddingTop: 40, paddingBottom: 40 }}>
            <Text style={styles.inputText}>Username:</Text>
            <TextInput
                placeholder="Enter your email"
                keyboardType="default"
                value={usernamex}
                onChangeText={(value) => getUsername(value)}
                style={styles.input}
                placeholderTextColor={"#777"}
            /> 
            <Text style={styles.inputText}>Current password:</Text>
            <TextInput
                placeholder="Enter current Password"
                value={currentPasswordx}
                onChangeText={(value) => getCurrentPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
            <Text style={styles.inputText}>New password:</Text>
            <TextInput
                placeholder="Enter a new Password"
                value={newPasswordx}
                onChangeText={(value) => getNewPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
            <Text style={styles.inputText}>Confirm new password:</Text>
            <TextInput
                placeholder="Retype new Password"
                value={newRPasswordx}
                onChangeText={(value) => getRNewPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
        
            <TouchableOpacity onPress={clickHandler}>
                <View style={styles.changePassButton}>
                    <Text style={styles.inputText}>Change password</Text>
                </View>
            </TouchableOpacity>
             </View>
            </ScrollView>
        </View>

    )
}
const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: "#777",
        padding: 8,
        margin: 5,
        width: 300,
        color: "#fff",
        marginTop: 10,
        alignSelf: "center",
        paddingHorizontal: 20,
        borderRadius: 50,
      },
      changePassButton : {
        padding: 15,
        marginTop: 30,
        backgroundColor: "#F96D02",
        marginHorizontal: 10,
        borderRadius: 50,
      },
      inputText: {
        textAlign: "center",
        color: "#fff",
      },  
})
