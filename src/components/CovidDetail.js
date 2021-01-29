//component that can bse reused to show covid summary
import React from 'react'
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";

const CovidDetail = ({covidSummaryData}) => {

  const propTypes = {
    covidSummaryData: PropTypes.object.isRequired,
  };

    return (
        <View>
      <View style={styles.dashboardLayerOne}>
        <View style={styles.dashboardItems}>
          <Text>Total Cases</Text>
          <Text style={styles.caseStyles}>{covidSummaryData.TotalConfirmed}</Text>
        </View>
        <View style={styles.dashboardItems}>
          <Text>New Cases</Text>
          <Text style={styles.caseStyles}>{covidSummaryData.NewConfirmed}</Text>
        </View>
      </View>

      <View style={styles.dashboardLayerOne}>
        <View style={styles.dashboardItems}>
          <Text>Total Deaths</Text>
          <Text style={styles.deathStyles}>{covidSummaryData.TotalDeaths}</Text>
        </View>
        <View style={styles.dashboardItems}>
          <Text>New Deaths</Text>
          <Text style={styles.deathStyles}>{covidSummaryData.NewDeaths}</Text>
        </View>
      </View>

      <View style={styles.dashboardLayerOne}>
        <View style={styles.dashboardItems}>
          <Text>Total Recovered</Text>
          <Text style={styles.recoveredStyles}>{covidSummaryData.TotalRecovered}</Text>
        </View>
        <View style={styles.dashboardItems}>
          <Text>New Recovered</Text>
          <Text style={styles.recoveredStyles}>{covidSummaryData.NewRecovered}</Text>
        </View>
      </View>
      </View>
    )
}
const styles = StyleSheet.create({
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
    fontWeight: '500'
  },
  recoveredStyles: {
    color: "green",
    fontWeight: '500'
  }, deathStyles: {
    color: "red",
    fontWeight: '500'
  }
});

export default CovidDetail;
