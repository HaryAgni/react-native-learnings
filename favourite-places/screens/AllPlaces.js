import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";
import { useSQLiteContext } from "expo-sqlite";
import { getAllPlaces } from "../util/database";

function AllPlaces() {
  const [loadedPlaces, setLoadedPlaces] = useState([]);

  const isFocused = useIsFocused();

  const databaseCtx = useSQLiteContext();

  useEffect(() => {
    async function getPlaces() {
      if (isFocused) {
        const places = await getAllPlaces(databaseCtx);
        setLoadedPlaces(places);
      }
    }
    getPlaces();
  }, [isFocused]);

  return <PlacesList places={loadedPlaces} />;
}

export default AllPlaces;
