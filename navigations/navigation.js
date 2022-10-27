import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "../screens/registration";
import Login from "../screens/login";
import ForgotPassword from "../screens/forgotPassword";
// import Home from "../screens/home";
import BottomTabs from "./bottomNavigation";

const Stack = createStackNavigator();

function NavigationStack() {
  return (
    <NavigationContainer>
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
            title: "Login",
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
          name="Home"
          component={BottomTabs}
          options={{
            title: "Home",
            headerShown: false,
            //   headerStyle: { backgroundColor: "tomato" },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ title: "Forgot Password" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default NavigationStack;
