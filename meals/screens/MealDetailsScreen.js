import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavouritesContext } from "../store/context/favourites-context";

function MealDetailScreen({ route, navigation }) {
  const favouriteMealsCtx = useContext(FavouritesContext);

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => {
    return meal.id === mealId;
  });

  const mealIsFavourite = favouriteMealsCtx.ids.includes(mealId);

  function changeFavouriteStatusHandler() {
    if (mealIsFavourite) {
      favouriteMealsCtx.removeFavourite(mealId);
    } else {
      favouriteMealsCtx.addFavourite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavourite ? "star" : "star-outline"}
            color="white"
            onPress={changeFavouriteStatusHandler}
            title="Tap Me"
          />
        );
      },
    });
  }, [navigation, changeFavouriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.rootListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  rootListContainer: {
    alignItems: "center",
  },
  rootContainer: {
    marginBottom: 32,
  },
});
