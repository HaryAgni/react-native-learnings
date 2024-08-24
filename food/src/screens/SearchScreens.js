import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  const searchApi = async () => {
    const response = await yelp.get("/search", {
      params: { term, limit: 50, location: "san jose" },
    });
    setResults(response.data.bussinesses);
  };
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={searchApi}
      />
      <Text>Search Screen</Text>
      <Text>Search Screendfiojgiudnfiu{results?.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
