import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "../screens/registration";
import Login from "../screens/login";
import ForgotPassword from "../screens/forgotPassword";
// import Home from "../screens/home";
import BottomTabs from "./bottomNavigation";
import Home from "../screens/home";
import Welcome from "../screens/welcome";
import Profile from "../screens/profile";
import Checkout from "../screens/checkout"
import Dashboard from "../screens/dashboard";
import kpurkish from "../screens/kpurkish";
import { ColorSpace } from "react-native-reanimated";
import ChangePassword from "../screens/changePassword";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer theme={{ colors:{ background: "#0f0f0f"} }}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#F96D02", height: 80 },
        }}
      >
     

       <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerTintColor: "white",
            title: "Login",
            //   headerStyle: { backgroundColor: "tomato" },
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome",
            headerTintColor: "white",
            //   headerStyle: { backgroundColor: "tomato" },
          }}
        />
       
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: "Create An Account",
            //   headerStyle: { backgroundColor: "tomato" },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Forgot Password" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: "Profile" }}
        />
      <Stack.Screen
          name="Home"
          component={BottomTabs}
          options={{
            title: "Home",
            headerShown: false,
            //   headerStyle: { backgroundColor: "tomato" },
          }}
        />
  <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ title: "Checkout" }}
          />
        <Stack.Screen
          name="changePassword"
          component={ChangePassword}
          options={{ title: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationStack;
