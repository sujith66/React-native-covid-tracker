import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import LineChart from './Linechart';

import _ from "lodash";
import CovidDetail from "./CovidDetail";

export default function CountrySelected({ countryId, data, onHomeClick }) {
  const propTypes = {
    countryId: PropTypes.number.isRequired,
    data: PropTypes.array.isRequired,
    onHomeClick: PropTypes.func.isRequired
  };

  const [selectedCountryDetail, setSelectedCountryDetail] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      getSelectedCountryDetails(countryId);
    };
    fetchData();
  }, []);

  //method to filter the country details based on the selected country
  const getSelectedCountryDetails = () => {
    let countryItems = [];
   data.Countries.filter((item) => {
      if (item.CountryCode === countryId) {
        countryItems.push(item)
      }
    });
    setSelectedCountryDetail(countryItems);
  };

  return (
    <View style={styles.dashboard}>
         <TouchableOpacity onPress={onHomeClick}>
          <Text style={styles.homeLink}>Home</Text>
        </TouchableOpacity>
        <View>
      <Text>Daily new cases for past week</Text>
      <LineChart data={data} /></View>
    { !_.isEmpty(selectedCountryDetail)  && <CovidDetail covidSummaryData={ _.head(selectedCountryDetail)}/>}
    </View>
  );
}

const styles = StyleSheet.create({
  dashboard: {
    flex: 1,
    flexDirection: "column",
    alignItems: "stretch",
    marginTop: 20,
  },
  dashboardLayerOne: {
    flexDirection: "row",
    backgroundColor: "rgb(251 251 251)",
    height: 80,
    width: 450,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
  },
  dashboardItems: {
    marginLeft: 40,
    marginTop: 20,
  },
  caseStyles: {
    fontWeight: "500",
  },
  recoveredStyles: {
    color: "green",
    fontWeight: "500",
  },
  deathStyles: {
    color: "red",
    fontWeight: "500",
  },
  homeLink: {
    color: "blue",
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 1,
  },
});
