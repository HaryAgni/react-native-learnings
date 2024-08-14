import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextScreen = () => {
  const [password, setPassword] = useState("");
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newvalue) => setPassword(newvalue)}
      />
      { password.length > 5 && <Text>Password should be less than 5 characters</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 0,
    borderColor: "black",
    borderWidth: 1,
  },
});

export default TextScreen;
