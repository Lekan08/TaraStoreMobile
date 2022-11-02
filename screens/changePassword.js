import { Alert } from "bootstrap-4-react/lib/components";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
export default function ChangePassword({ navigation }) {
    const [currentPasswordx, getCurrentPassword] = useState("");
    const [newPasswordx, getNewPassword] = useState("");
    const [newRPasswordx, getRNewPassword] = useState("")

    const handlePress = () => {
        const raw = JSON.stringify({
            newPassword: newPasswordx,
        });const myHeaders = {
            Accept: "application/json",
            "Content-Type": "application/json",
              };
        
              const url = "https://tarastoreservice.plutospace.space";
              fetch(url + "http://users/changePass", {
                method: "POST",
                headers: myHeaders,
                body:   raw,
              })
              .then((response) => response.json())
              .then((data) => {
                console.log(data)
                Alert.alert(data.status, data.message, [{text: "Continue", onPress:() => {
                  navigation.navigate("Home")
                } }]);
                })
              .catch((err) => {
                
                Alert.alert(err.status, err.message);
                console.log(err);
               });

    }    

    const clickHandler = () => {

        if(currentPasswordx.length === 0 || currentPasswordx.length === "" ||
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
                    Change Password
                </Text>
            </View>
            <Text style={styles.inputText}>Current password:</Text>
            <TextInput
                placeholder="Enter current Password"
                value={rPasswordx}
                onChangeText={(value) => getCurrentPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
            <Text style={styles.inputText}>New password:</Text>
            <TextInput
                placeholder="Enter a new Password"
                value={rPasswordx}
                onChangeText={(value) => getNewPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
            <Text style={styles.inputText}>Confirm new password:</Text>
            <TextInput
                placeholder="Retype new Password"
                value={rPasswordx}
                onChangeText={(value) => getRNewPassword(value)}
                style={styles.input}
                secureTextEntry={true}
                placeholderTextColor={"#777"}
            /> 
            <TouchableOpacity onPress={clickHandler}>
                <View style={styles.changePassButton}>
                    <Text style={styles.changePassText}>Change password</Text>
                </View>
            </TouchableOpacity>

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
      changePassText: {
        textAlign: "center",
        color: "#fff",
      },  
})
