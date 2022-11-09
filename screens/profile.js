import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { globalStyles } from "../styles/global";

export default function Profile({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Profile Screen</Text>
    </View>
  );
}

const ProfileScreen = props => {
  const user = useSelector(state => state.users.user);
  const fetchUser = useSelector(state => state.users.fetchUser);
  const UserId = props.navigation.getParam('id');

  const dispatch = useDispatch();
  useEffect(() => {
    const loadUser = async () => {
      try {
        setIsLoading(true);
        await dispatch(usersActions.fetchUserData(UserId));
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
      }
    };
    loadUser();
  }, [UserId]);

  return (
    <View style={styles.container}>
      <Text> Name: {fetchUser.name}</Text>
    </View>
  );
};