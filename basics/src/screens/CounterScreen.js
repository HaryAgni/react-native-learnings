import React, { useReducer } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
const reducer = (state, action) => {
  switch (action.type) {
    case "increase_count":
      return {...state, counter: state.counter + 1 };
    case "decrease_count":
      return {...state, counter: state.counter - 1 };
    default:
      return state;
  }
};
const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => dispatch({ type: "increase_count" })}
      />
      <Button
        title="Decrease"
        onPress={() => dispatch({ type: "decrease_count" })}
      />
      <Text>Current count:{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
