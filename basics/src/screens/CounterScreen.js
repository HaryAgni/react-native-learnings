import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const CounterScreen = () => {
  const [counter, setcounter] = useState(0);
  
  return (
    <View>
      <Button title="Increase" onPress={()=>setcounter(counter+1)} />
      <Button title="Decrease" onPress={()=>setcounter(counter-1)} />
      <Text>Current count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
