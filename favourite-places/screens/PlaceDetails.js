import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../components/UI/OutlinedButton";
import { Colors } from "../constants/colors";
import { useEffect, useState } from "react";
import { useSQLiteContext } from "expo-sqlite";
import { deletePlaceById, getPlaceById } from "../util/database";
import IconButton from "../components/UI/IconButton";

function PlaceDetails({ navigation, route }) {
  const [displayedPlace, setDisplayedPlace] = useState({});

  const selectedPlaceId = route.params.placeId;

  const databaseCtx = useSQLiteContext();

  function showOnMapHandler() {
    const pickedLocation = {
      latitude: displayedPlace.lat,
      longitude: displayedPlace.lng,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    };
    navigation.navigate("Map", { pickedLocation, isEditable: false });
  }

  async function deletePlaceHandler() {
    await deletePlaceById(databaseCtx, selectedPlaceId);
    navigation.navigate("AllPlaces");
    Alert.alert("Success!", "Place has been removed from favourite places");
  }

  useEffect(() => {
    async function getPlace() {
      const place = await getPlaceById(databaseCtx, selectedPlaceId);
      setDisplayedPlace(place);
      navigation.setOptions({
        title: place.title,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              iconName="remove"
              size={24}
              color={tintColor}
              onPress={deletePlaceHandler}
            />
          );
        },
      });
    }
    getPlace();
  }, [selectedPlaceId]);

  if (!displayedPlace) {
    return (
      <View style={styles.fallBack}>
        <Text>Loading Place Data...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: displayedPlace.imageUri }} />
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{displayedPlace.address}</Text>
        </View>
        <OutlinedButton icon="map" onPress={showOnMapHandler}>
          View on Map
        </OutlinedButton>
      </View>
    </ScrollView>
  );
}

export default PlaceDetails;

const styles = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  fallBack: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
