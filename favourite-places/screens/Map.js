import { useCallback, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import IconButton from "../components/UI/IconButton";
import { useRoute } from "@react-navigation/native";

function Map({ navigation }) {
  const [selectedLocation, setSelectedLocation] = useState();
  const route = useRoute();

  const region = route.params.pickedLocation
    ? route.params.pickedLocation
    : {
        latitude: 28.6125461,
        longitude: 77.2293728,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };

  function selectLocationHandler(event) {
    if (route.params.isEditable) {
      const lat = event.nativeEvent.coordinate.latitude;
      const lng = event.nativeEvent.coordinate.longitude;

      setSelectedLocation({ lat, lng });
    }
  }

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      Alert.alert(
        "No location picked!",
        "You have to pick a location (by tapping on the map)"
      );
      return;
    }

    navigation.navigate("AddPlace", {
      pickedLat: selectedLocation.lat,
      pickedLng: selectedLocation.lng,
    });
  }, [navigation, selectedLocation]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ({ tintColor }) => {
        return (
          route.params.isEditable && (
            <IconButton
              iconName="save"
              size={24}
              color={tintColor}
              onPress={savePickedLocationHandler}
            />
          )
        );
      },
    });
  }, [navigation, savePickedLocationHandler]);

  let marker;
  if (selectedLocation) {
    marker = (
      <Marker
        title="Picked Location"
        coordinate={{
          latitude: selectedLocation.lat,
          longitude: selectedLocation.lng,
        }}
      />
    );
  } else if (route.params.pickedLocation) {
    const markedLocation = route.params.pickedLocation;
    marker = (
      <Marker
        title="Picked Location"
        coordinate={{
          latitude: markedLocation.latitude,
          longitude: markedLocation.longitude,
        }}
      />
    );
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={region}
      onPress={selectLocationHandler}
    >
      {marker}
    </MapView>
  );
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
