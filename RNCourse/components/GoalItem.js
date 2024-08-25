import { Pressable, StyleSheet, Text, View } from "react-native";

function GoalItem({ text, id, onDeleteGoalItem }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "blue" }}
        onPress={onDeleteGoalItem.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#694F8E",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
