import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

function MealsList({displayedMeals}) {
  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
  });
