import { StyleSheet, Text, View } from "react-native";

function Subtitle({children}) {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
}

export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: "#FF2E63",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#EAEAEA",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});
