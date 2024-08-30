import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverviewScreens from "./screens/MeslsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailsScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
import FavouritesContextProvider from "./store/context/favourites-context";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#00ADB5" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#393E46" },
        headerTitleAlign: "center",
        drawerContentStyle: { backgroundColor: "#CBF1F5" },
        drawerInactiveTintColor: "#252A34",
        drawerActiveTintColor: "#FF2E63",
        drawerActiveBackgroundColor: "#71C9CE",
      }}
    >
      <Drawer.Screen
        name="All Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="list" />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons color={color} size={size} name="star" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <FavouritesContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#00ADB5" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#393E46" },
              headerTitleAlign: "center",
            }}
          >
            <Stack.Screen
              name="MealsCategories"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreens}
              // options={({ route, navigation }) => {
              //   const catId = route.params.CategoryId;
              //   return {
              //     title: catId,
              //   };
              // }}
            />
            <Stack.Screen
              name="MealDetail"
              component={MealDetailScreen}
              options={{ title: "About the Meal" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FavouritesContextProvider>
    </>
  );
}

const styles = StyleSheet.create({});
