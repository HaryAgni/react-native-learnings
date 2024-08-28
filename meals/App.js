import { StyleSheet } from "react-native";
import CatogeriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <CatogeriesScreen />
    </>
  );
}

const styles = StyleSheet.create({});
