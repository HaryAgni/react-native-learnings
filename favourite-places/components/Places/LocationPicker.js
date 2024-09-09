import { Alert, StyleSheet, Text, View } from "react-native";
import OutlinedButton from "../UI/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  PermissionStatus,
  useForegroundPermissions,
} from "expo-location";
import { useEffect, useLayoutEffect, useState } from "react";
import { getAddress } from "../../util/location";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";

function LocationPicker({ onPickLocation }) {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const [pickedLocation, setPickedLocation] = useState();
  const isFocused = useIsFocused();

  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    if (isFocused && route.params) {
      const mapPickedLocation = {
        latitude: route.params.pickedLat,
        longitude: route.params.pickedLng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      };
      setPickedLocation(mapPickedLocation);
    }
  }, [route, isFocused]);

  useEffect(() => {
    async function handleLocation() {
      if (pickedLocation) {
        const address = await getAddress(
          pickedLocation.latitude,
          pickedLocation.longitude
        );
        onPickLocation({ ...pickedLocation, address });
      }
    }
    handleLocation();
  }, [pickedLocation, onPickLocation]);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation((currentState) => ({
      ...currentState,
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }));
  }

  function getOnMapHandler() {
    navigation.navigate("Map", { pickedLocation, isEditable: true });
  }

  function selectLocationHandler(event) {
    const latitude = event.nativeEvent.coordinate.latitude;
    const longitude = event.nativeEvent.coordinate.longitude;

    setPickedLocation((currentState) => ({
      ...currentState,
      latitude,
      longitude,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    }));
  }

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    // locationPreview = (
    //   <Image
    //     style={styles.image}
    //     source={{
    //       uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
    //     }}
    //   />
    // );

    locationPreview = (
      <MapView
        style={styles.map}
        region={pickedLocation}
        onPress={selectLocationHandler}
      >
        <Marker
          title="Picked Location"
          coordinate={{
            latitude: pickedLocation.latitude,
            longitude: pickedLocation.longitude,
          }}
        />
      </MapView>
    );
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={getOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 4,
  },
});
