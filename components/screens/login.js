// import React from 'react'

// const login = () => {
//   return (

//   const clickHandler = () => {
//     if (
//       usernamex.length === 0 ||
//       usernamex === "" ||
//       passwordx.length === 0 ||
//       passwordx === "" ||
//       rPasswordx.length === 0 ||
//       rPasswordx === ""
//     ) {
//       Alert.alert("Damm", "You can't fuckin leave this place empty dude!!");
//     } else {
//       handlePress();
//     }


//     //fetching api
//     const raw = JSON.stringify({
//         username: usernamex,
//         password: passwordx,
//       });
//       const myHeaders = {
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       };
      
//       const url = "https://tarastoreservice.plutospace.space";
//      fetch(url + "http://users/doLogin",{
//       method: "GET",
//       headers: myHeaders,
//       body: raw,
     
//     })
//   };

//   return (
//     // <Sandbox />
//     <View style={styles.container}>
//       <ScrollView>
//         <View>
//           <Image source={require("./images/house_of_tara_logo.png")} />
//         </View>
//         <View style={{ borderRadius: 5 }}>
//           <Text
//             style={{
//               fontSize: 40,
//               fontWeight: "900",
//               color: "#ffffff",
//               paddingHorizontal: 0,
//               paddingTop: 40,
//               fontFamily: "serif",
//               width: 300,
//             }}
//           >
//             Let’s Help You Find Your Match
//           </Text>
//         </View>
//         <Text style={{ color: "#ffffff" }}>
//           Meeting the perfect one shouldn’t be a hassle.
//         </Text>
//         <View style={{ paddingTop: 40 }}>
//           <Text style={styles.inputText}>Username:</Text>
//           <TextInput
//             keyboardType="default"
//             placeholder="Username"
//             value={usernamex}
//             onChangeText={(value) => setUsername(value)}
//             style={styles.input}
//             placeholderTextColor={"#777"}
//           />
//           <Text style={styles.inputText}>Password:</Text>
//           <TextInput
//             placeholder="Password"
//             value={passwordx}
//             onChangeText={(value) => setPassword(value)}
//             style={styles.input}
//             secureTextEntry={true}
//             placeholderTextColor={"#777"}
//           />
//           <Text style={styles.inputText}>Confirm Password:</Text>
//           <TextInput
//             placeholder="Confirm Password"
//             value={rPasswordx}
//             onChangeText={(value) => setRPassword(value)}
//             style={styles.input}
//             secureTextEntry={true}
//             placeholderTextColor={"#777"}
//           />
//           <TouchableOpacity onPress={clickHandler}>
//             <View style={styles.loginButton}>
//               <Text style={styles.loginText}>LOGIN</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//         <View 
//           style={{
//             paddingTop: 15,
//             flex:1,
//             }}>
//           <Text style={styles.inputText}>
//             New Customer?
//             Create an account
//           </Text>
//         </View>

//         {/* <View>
//       {people.map((item) => {
//         return (
//           <View key={item.key}>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>
//         );
//       })}
//     </View> */}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   // container: {
//   //   flex: 1,
//   //   backgroundColor: "#0F0F0F",
//   // },
//   // content: {
//   //   padding: 40,
//   // },
//   // list: { marginTop: 20 },
//   container: {
//     flex: 1,
//     backgroundColor: "#0F0F0F",
//     alignItems: "center",
//     paddingTop: 60,
//     // justifyContent: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//     padding: 20,
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#777",
//     padding: 8,
//     margin: 5,
//     width: 300,
//     color: "#fff",
//     paddingHorizontal: 20,
//     borderRadius: 50,
//   },
//   loginButton: {
//     padding: 15,
//     marginTop: 30,
//     backgroundColor: "#F96D02",
//     marginHorizontal: 10,
//     borderRadius: 50,
//   },
//   loginText: {
//     textAlign: "center",
//     color: "#fff",
//   },
//   inputText: {
//     marginTop: 10,
//     alignSelf: "center",
//     color: "#fff",
//   },
//   item: {
//     padding: 30,
//     marginTop: 24,
//     backgroundColor: "#F96D02",
//     fontSize: 24,
//     marginHorizontal: 10,
//   },
// });


// export default login