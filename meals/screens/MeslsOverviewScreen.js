import { StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    }).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
