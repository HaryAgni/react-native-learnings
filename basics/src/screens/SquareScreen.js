import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  return (
    <View>
      <ColorCounter color="RED" />
      <ColorCounter color="GREEN" />
      <ColorCounter color="BLUE" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
