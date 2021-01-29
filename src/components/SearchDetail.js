import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import PropTypes from "prop-types";

const SearchDetail = ({ searchData, onBack, onItemPress }) => {
    
  const propTypes = {
    searchData: PropTypes.array.isRequired,
    onBack: PropTypes.func.isRequired,
    onItemPress: PropTypes.func.isRequired,
  };

  const [searchResult, setSearchResult] = useState([]);

  //Sorting the data based on the country name alphabetically
  searchData.sort(function (item1, item2) {
    var nameA = item1.Country.toUpperCase();
    var nameB = item2.Country.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

  //method to filter country based on the search item
  const filterList = (searchItem) => {
    const returnedResults = searchData.filter((item) =>
      item.Country.toLowerCase().includes(searchItem.toLowerCase())
    );
    setSearchResult(returnedResults);
  };

  //handler function to handle when an item is clicked
  const handlePress = (id) => {
    onItemPress(id);
  };

  return (
   
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.backLink}>Back</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Search by country"
          style={styles.input}
          onChangeText={(searchItem) => filterList(searchItem)}
        ></TextInput>

        {(searchResult.length > 0 ? (
          <FlatList
            data={searchResult}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onItemPress(item.ISO2)}>
                <View style={styles.item}>
                  <Text style={styles.title}>{item.Country}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        ) :  (
          <FlatList data={searchData.sort()} renderItem={({ item }) => (
            <TouchableOpacity onPress={() => onItemPress(item.ISO2)}>
              <View style={styles.item}>
                <Text style={styles.title}>{item.Country}</Text>
              </View>
            </TouchableOpacity>
          )} />
        ))}
      </View>
    
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    alignItems: "flex-start",
    width: "100%",
  },
  backLink: {
    color: "blue",
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 5,
  },
  input: {
    height: 40,
    width: "90%",
    marginLeft: 25,
    marginRight: 10,
  },
  item: {
    border: "#e0dae1",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
});
export default SearchDetail;
