import { StyleSheet, Text } from "react-native";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 2 : 1,
    // borderWidth: Platform.select({ ios: 3, android: 2 }),
    borderWidth: 3,
    borderColor: "white",
    padding: 16,
    maxWidth: "80%",
  },
});
