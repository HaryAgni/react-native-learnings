import { NavigationContainer } from "@react-navigation/native";
import SearchScreen from "./src/screens/SearchScreens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Button, View } from "react-native";
const Stack = createNativeStackNavigator();
const App = ({ navigation }) => {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ title: "Bussiness  Screen" }}
            name="Search"
            component={SearchScreen}
          />
        </Stack.Navigator>
      </NavigationContainer> 
  );
};

export default App;
