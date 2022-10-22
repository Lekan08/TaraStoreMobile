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
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [username, setUsername] = useState("Daniel");
  const [Pasword, setPassword] = useState("");
  const [RPasword, setRPassword] = useState("");
  const [todos, setTodos] = useState([
    { text: "bolu is dancing one kind", id: 1 },
    { text: "emmanuel don cast oooooo", id: 2 },
    { text: "daniel has landed a big role", id: 3 },
    { text: "anthony is my father's name", id: 4 },
  ]);
  const [countx, setCountx] = useState(todos.length);

  const submitHandler = (text) => {
    if (text.length > 3) {
      setCountx(countx + 2);
      setTodos((todo) => {
        return [{ text: text, id: countx + 2 }, ...todos];
      });
    } else {
      Alert.alert("OOPS!", "Todos must be over 3 characters long", [
        { text: "UNDERSTOOD", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        console.log("keyboard dismissed");
      }}
    >
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/** to form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>

        {/* <View>
          {people.map((item) => {
            return (
              <View key={item.key}>
                <Text style={styles.item}>{item.name}</Text>
              </View>
            );
          })}
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0F0F0F",
  },
  content: {
    padding: 40,
  },
  list: { marginTop: 20 },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#0F0F0F",
  //   alignItems: "center",
  //   // justifyContent: "center",
  // },
  // buttonContainer: {
  //   marginTop: 20,
  //   padding: 20,
  // },
  // input: {
  //   borderWidth: 1,
  //   borderColor: "#777",
  //   padding: 8,
  //   margin: 5,
  //   width: 300,
  //   color: "#777",
  //   borderRadius: 50,
  // },
  // inputText: {
  //   marginTop: 10,
  //   alignSelf: "center",
  //   color: "#fff",
  // },
  // item: {
  //   padding: 30,
  //   marginTop: 24,
  //   backgroundColor: "#F96D02",
  //   fontSize: 24,
  //   marginHorizontal: 10,
  // },
});

// <View style={styles.container}>
//   <ScrollView>
//     <View>
//       <Image source={require("./images/house_of_tara_logo.png")} />
//     </View>
//     <View style={{ borderRadius: 5 }}>
//       <Text
//         style={{
//           fontSize: 40,
//           fontWeight: "900",
//           color: "#ffffff",
//           paddingHorizontal: 0,
//           fontFamily: "serif",
//           width: 300,
//         }}
//       >
//         Let’s Help You Find Your Match
//       </Text>
//     </View>
//     <Text style={{ color: "#ffffff" }}>
//       Meeting the perfect {username} shouldn’t be a hassle.
//     </Text>
//     <View>
//       <Text style={styles.inputText}>Username:</Text>
//       <TextInput
//         keyboardType="default"
//         placeholder="Username"
//         onChangeText={(value) => setUsername(value)}
//         style={styles.input}
//       />
//       <Text style={styles.inputText}>Password:</Text>
//       <TextInput
//         placeholder="Username"
//         onChangeText={(value) => setPassword(value)}
//         style={styles.input}
//       />
//       <Text style={styles.inputText}>Retype Password:</Text>
//       <TextInput
//         placeholder="Username"
//         onChangeText={(value) => setRPassword(value)}
//         style={styles.input}
//       />
//       <View style={styles.buttonContainer}>
//         <Button color="#F96D02" title="Login" onPress={clickHandler} />
//       </View>
//     </View>

//     {/* <View>
//       {people.map((item) => {
//         return (
//           <View key={item.key}>
//             <Text style={styles.item}>{item.name}</Text>
//           </View>
//         );
//       })}
//     </View> */}
//   </ScrollView>
//   <FlatList
//     numColumns={2}
//     data={people}
//     keyExtractor={(item) => item.id}
//     renderItem={({ item }) => (
//       <TouchableOpacity onPress={() => pressHandler(item.id)}>
//         <Text style={styles.item}>{item.name}</Text>
//       </TouchableOpacity>
//     )}
//   />
// </View>
