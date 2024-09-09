import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AllPlaces from "./screens/AllPlaces";
import AddPlace from "./screens/AddPlace";
import IconButton from "./components/UI/IconButton";
import { Colors } from "./constants/colors";
import Map from "./screens/Map";
import { SQLiteProvider } from "expo-sqlite";
import { init } from "./util/database";
import * as SplashScreen from "expo-splash-screen";
import PlaceDetails from "./screens/PlaceDetails";

SplashScreen.preventAutoHideAsync();

async function initializeDb(db) {
  await init(db);
  await SplashScreen.hideAsync();
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar />
      <SQLiteProvider databaseName="places.db" onInit={initializeDb}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerStyle: { backgroundColor: Colors.primary500 },
              headerTintColor: Colors.gray700,
              contentStyle: { backgroundColor: Colors.gray700 },
            }}
          >
            <Stack.Screen
              name="AllPlaces"
              component={AllPlaces}
              options={({ navigation }) => ({
                title: "Your Favourite Places",
                headerRight: ({ tintColor }) => (
                  <IconButton
                    iconName="add"
                    color={tintColor}
                    size={24}
                    onPress={() => navigation.navigate("AddPlace")}
                  />
                ),
              })}
            />
            <Stack.Screen
              name="AddPlace"
              component={AddPlace}
              options={{
                title: "Add a new Place",
              }}
            />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen
              name="PlaceDetails"
              component={PlaceDetails}
              options={{ title: "Loading..." }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SQLiteProvider>
    </>
  );
}
