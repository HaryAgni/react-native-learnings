import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { AuthContext } from "../store/auth-context";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMessage] = useState("");

  const authCtx = useContext(AuthContext);

  const token = authCtx.token;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://user-authentication-dea5d-default-rtdb.firebaseio.com/message.json?auth=${token}`
        );
        setFetchedMessage(response.data);
      } catch (error) {
        Alert.alert("Session expired!!!", "Please log in again.");
        authCtx.logout();
      }
    }

    if (token) {
      fetchData();
    }
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Text>{fetchedMessage}</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
