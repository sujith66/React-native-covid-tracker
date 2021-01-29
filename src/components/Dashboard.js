import React , {useEffect,useRef}from "react";
import * as d3 from "d3";
import { View, Text, StyleSheet, Button } from "react-native";
import PropTypes from "prop-types";
import BarChart from './Barchart';
import CovidDetail from '../components/CovidDetail';

export default function Dashboard({ covidSummaryData, onButtonPress }) {

  const svgRef = useRef();
  const color = '#FFC77D';
  const propTypes = {
    covidSummaryData: PropTypes.object.isRequired,
    onButtonPress: PropTypes.func.isRequired,
  };
  
  //handler for listening to press event
  const handlePress = ()=>{
    onButtonPress();
  }
 
  return (
    <View style={styles.dashboard}>
      <View><Text>Daily new cases for past week</Text><BarChart data={covidSummaryData}/></View>
      <CovidDetail  covidSummaryData={covidSummaryData} />
      
      <Button
        onPress={handlePress}
        title="Search by Country"
        color="#6699CC"
        accessibilityLabel="Learn more about this purple button"
      />
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
