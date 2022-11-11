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
  const [products, setProducts] = useState([]);
  const [mainItems, setMainItems] = useState([]);
  const [productName, setProductName] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productIDx, setProductID] = useState("");
  const [quantityx, setQuantity] = useState(0);

  const isFocused = useIsFocused();

  function getAllImage(ddata, result) {
    const myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    const headers = myHeaders;
    fetch(`${REACT_APP_TARA_URL}/media/getS3Urls/${ddata}`, {
      headers,
    })
      .then(async (res) => res.json())
      .then((imgResult) => {
        console.log(imgResult);
        if (imgResult.length !== 0) {
          const products2 = [];
          result.map((item, index) => {
            Object.assign(item, { image: imgResult[index] });
            products2.push(item);
          });
          console.log(products2);
          setProducts(products2);
          setMainItems(products2);
        } else {
          setProducts(result);
          setMainItems(result);
        }
      });
  }

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
        const date = new Date();
        const firstDay = new Date(2021, date.getMonth(), 1).getTime();
        const curDay = new Date().getTime();

        const raw = JSON.stringify({
          startTime: firstDay,
          endTime: curDay,
          status: 0,
        });
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: raw,
          redirect: "follow",
        };
        let isMounted = true;
        console.log;
        await fetch(
          `${REACT_APP_TARA_URL}/purchaseRequest/gets`,
          requestOptions
        )
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
              const imageArray = [];
              result.map((item) => {
                imageArray.push(item.product.fileName);
              });
              console.log(imageArray);
              getAllImage(imageArray, result);
            }
          });
        return () => {
          isMounted = false;
        };
      }
      fetchData();
    }
  }, [isFocused]);

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);

  const modalView = (item) => {
    setQuantity(0);
    setFirstname("");
    setLastname("");
    setEmail("");
    setPno("");
    setCity("");
    setAddress("");
    setModalVisible(true);
    setProductName(item.product.name);
    setProductQuantity(item.quantity);
  };

  const addRemoveQuantity = (val) => {
    const conQuant = parseInt(quantityx, 10);
    console.log(conQuant);
    if (val === 0) {
      if (conQuant > 0) {
        setQuantity(conQuant - 1);
      }
    } else if (val === 1) {
      if (conQuant < productQuantity) {
        setQuantity(conQuant + 1);
      }
    }
  };

  // Function to search table
  const searchFunc = (val) => {
    console.log(val);
    // const input = document.getElementById("search").value;
    const input = val;
    console.log(input);
    const filter = input.toUpperCase();
    const jsonData = [];
    // eslint-disable-next-line array-callback-return
    mainItems.map((item) => {
      let docName = item.product.name;
      if (docName == null) {
        docName = "";
      }
      if (
        item.product.name.toUpperCase().indexOf(filter) > -1 ||
        docName.toUpperCase().indexOf(filter) > -1
      ) {
        jsonData.push(item);
      }
    });
    setProducts(jsonData);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#0F0F0F",
        // paddingTop: 80,
      }}
    >
      <View
        style={{
          maxHeight: 50,
          minHeight: 50,
          backgroundColor: "#F96D02",
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <View
          style={{
            margin: 8,
            width: 300,
            color: "#fff",
            paddingHorizontal: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Icon name="search" size={25} color="white" />
          <TextInput
            keyboardType="default"
            onChangeText={(value) => searchFunc(value)}
            placeholder="Search Products"
            placeholderTextColor={"#fff"}
            style={{ width: "90%", color: "#fff" }}
            autoCapitalize="none"
            autoCorrect={false}
            enablesReturnKeyAutomatically
          />
        </View>
      </View>

      <View
        style={{
          paddingHorizontal: 5,
          marginTop: 25,
          flex: 1,
          alignItems: "center",
        }}
      >
        <FlatList
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              colors={["#F96D02", "#0F0F0f"]}
              onRefresh={onRefresh}
            />
          }
          keyExtractor={(item) => item.id}
          numColumns={1}
          data={products}
          renderItem={({ item }) => {
            const imagee = `${item.image}`;
            console.log(imagee);
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("ProductDetails", item)}
              >
                <View
                  style={{
                    backgroundColor: "#BAD1C2",
                    height: 200,
                    width: "100%",
                    maxWidth: "100%",
                    borderRadius: 10,
                    padding: 5,
                    margin: 5,
                    flexDirection: "row",
                  }}
                >
                  <Image
                    source={{ uri: imagee }}
                    style={{
                      marginTop: 40,
                      width: 110,
                      borderRadius: 10,
                      height: 130,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: 9,
                    }}
                  >
                    <View
                      style={
                        {
                          // paddingHorizontal: 5,
                          // paddingVertical: 5,
                          // alignSelf: "flex-end",
                        }
                      }
                    >
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: "800",
                          alignSelf: "center",
                        }}
                      >
                        {item.product.name}
                      </Text>
                    </View>
                    <View
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        // alignSelf: "flex-end",
                      }}
                    >
                      <Text
                        style={{
                          marginTop: 125,
                          fontWeight: "bold",
                          marginLeft: 20,
                          fontSize: 20,
                        }}
                      >
                        ₦{item.product.pricePerQuantity}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <View
                      style={{
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                        marginRight: 50,
                        alignSelf: "flex-end",
                        width: "100%",
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          modalView(item);
                          setProductID(item.productId);
                        }}
                      >
                        <View style={styles.purchaseButton}>
                          <Text
                            style={{
                              color: "#fff",
                              fontWeight: "bold",
                              marginRight: 15,
                              textTransform: "uppercase",
                              alignSelf: "center",
                              fontSize: 12,
                            }}
                          >
                            Request Purchase
                          </Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                    {/* <View
                      style={{
                        backgroundColor: "#FFB9B9",
                        justifyContent: "center",
                        alignItems: "center",
                        height: 40,
                        width: 40,
                        borderRadius: 50,
                        paddingHorizontal: 5,
                        paddingVertical: 5,
                      }}
                    >
                      <Icon name="cart-outline" size={25} color="#bb32fe" />
                    </View> */}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#0F0F0F",
    alignItems: "center",
    // paddingTop: 60,
    justifyContent: "center",
  },
  buttonContainer: {
    marginTop: 20,
    padding: 20,
  },

  loginButton: {
    padding: 10,
    marginTop: 10,
    backgroundColor: "#F96D02",
    // marginHorizontal: 10,
    width: "100%",
    borderRadius: 5,
  },
  addRemove: {
    backgroundColor: "#F96D02",
    width: 30,
    height: 30,
    borderRadius: 5,
  },
  purchaseButton: {
    padding: 10,
    backgroundColor: "#F96D02",
    width: "120%",
    borderRadius: 5,
  },
  pickerContainer: {
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    width: "100%",
    color: "#fff",
    // paddingHorizontal: 20,
    // borderRadius: 50,
  },
  input: {
    borderBottomColor: "#777",
    borderBottomWidth: 1,
    padding: 5,
    margin: 5,
    width: "100%",
    color: "#000",
    // paddingHorizontal: 20,
    // borderRadius: 50,
  },
  inputText: {
    marginTop: 20,
    alignSelf: "flex-start",
    color: "#777",
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
  // modal style
  centeredView: {
    flex: 1,
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    marginVertical: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 30,
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
  },
});

export default Cart;
