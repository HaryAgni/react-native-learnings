import { StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourites-context";
import MealsList from "../components/MealsList/MealsList";

function FavouritesScreen() {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const displayedMeals = MEALS.filter((mealItem) => {
    return favouriteMealsCtx.ids.includes(mealItem.id);
  });

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    );
  }

  return <MealsList displayedMeals={displayedMeals} />;
}

export default FavouritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    opacity: 0.7,
  },
});
