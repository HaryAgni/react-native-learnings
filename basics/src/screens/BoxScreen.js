import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: "black",
    backgroundColor:'gray',
    height: 150,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewOneStyle: {
    height: 50,
    width: 50,
    backgroundColor: "orange",
  },
  viewTwoStyle: {
    height: 50,
    width: 50,
    backgroundColor: "white",
    marginTop: 50,
  },
  viewThreeStyle: {
    height: 50,
    width: 50,
    backgroundColor: "green",
  },
});
export default BoxScreen;
