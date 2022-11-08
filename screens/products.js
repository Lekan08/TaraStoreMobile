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
  TouchableOpacity,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { globalStyles } from "../styles/global";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Products({ navigation }) {
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const myHeaders = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };
    let userID;
    // getting data
    const getUser = async () => {
      try {
        const userData = JSON.parse(await AsyncStorage.getItem("userInfo"));
        setUserName(`${userData.firstname}`);
        userID = userData.id;
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
    const headers = myHeaders;
    let isMounted = true;
    fetch(
      `${process.env.REACT_APP_TARA_URL}/productAssignment/getForUser/${userID}`,
      {
        headers,
      }
    )
      .then(async (res) => {
        const aToken = res.headers.get("token-1");
        localStorage.setItem("rexxdex", aToken);
        return res.json();
      })
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
        console.log(result);
        if (isMounted) {
          setProducts(result);
        }
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <View style={globalStyles.dashContainer}>
      <ScrollView>
        <View
          style={{
            height: "100%",
            maxHeight: "50%",
            backgroundColor: "#F96D02",
            borderBottomLeftRadius: 40,
            borderBottomRightRadius: 40,
          }}
        ></View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <View style={styles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}
            >
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>Hello World!</Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                  >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal>
            <Pressable
              style={[styles.button, styles.buttonOpen]}
              onPress={() => setModalVisible(true)}
            >
              <Text style={styles.textStyle}>Show Modal</Text>
            </Pressable>
          </View>
          <Text
            style={{
              color: "#F96D02",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Clothes
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/cart.jpeg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/2.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              color: "#F96D02",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Clothes
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/cart.jpeg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/2.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              color: "#F96D02",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Clothes
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/cart.jpeg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/2.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={{ paddingHorizontal: 40, marginTop: 25 }}>
          <Text
            style={{
              color: "#F96D02",
              marginTop: 50,
              fontSize: 17,
            }}
          >
            Clothes
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={{ marginHorizontal: -40, marginTop: 30 }}
          >
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/cart.jpeg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/2.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                  marginHorizontal: 20,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: "#FEFEFE",
                  height: 200,
                  width: 190,
                  borderRadius: 15,
                  padding: 5,
                }}
              >
                <Image
                  source={require("../images/3.jpg")}
                  style={{ width: 180, borderRadius: 10, height: 130 }}
                />
                <View
                  style={{
                    flexDirection: "row",
                    width: 150,
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 5,
                      paddingVertical: 5,
                    }}
                  >
                    {/* <Text
                    style={{
                      fontFamily: "RobotoRegular",
                      fontSize: 11,
                      color: "#F96D02",
                    }}
                  >
                    Lorem impsum dolor sit amet, consectetuer adipscing elit,
                  </Text> */}

                    <TouchableOpacity
                      onPress={() => navigation.navigate("Registration")}
                    >
                      <View style={styles.loginButton}>
                        <Text style={styles.loginText}>Add To Cart</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      backgroundColor: "#FFB9B9",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 40,
                      width: 40,
                      borderRadius: 50,
                    }}
                  >
                    <Icon name="cart-outline" size={25} color="#bb32fe" />
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </ScrollView>
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
    backgroundColor: "#8D9EFF",
    marginHorizontal: 10,
    borderRadius: 10,
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
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
    marginBottom: 15,
    textAlign: "center",
  },
});
