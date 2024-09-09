import { useSQLiteContext } from "expo-sqlite";
import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  const databaseCtx = useSQLiteContext();
  async function createPlaceHandler(place) {
    await insertPlace(place, databaseCtx);
    navigation.navigate("AllPlaces");
  }
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
}

export default AddPlace;
