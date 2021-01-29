import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import _ from "lodash";
import { StyleSheet, Text, View } from "react-native";
import { getCountryList, getCovidSummary} from "./api";
import Dashboard from "./src/components/Dashboard";
import Header from "./src/components/Header";
import SearchDetail from "./src/components/SearchDetail";
import CountrySelected from './src/components/CountrySelected';
import { count } from "d3";

export default function App() {
  const [covidCountSummary, setCovidCountSummary] = useState([]);
  const [isButtonClicked, setButtonClick] = useState(false);
  const [isCurrentCountryId, setCountryId] = useState(null);
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const summary = await getCovidSummary();
      const listOfcountries = await getCountryList();
      setCovidCountSummary(summary);
      setCountryList(listOfcountries);
    };
    fetchData();
  }, []);

  //Method to set country selected which is passed down as props to the detail component
  const setCountry = (countryId)=>{
      setCountryId(countryId)
  }

  
  const onButtonClick = () => {
    setButtonClick(!isButtonClicked);
  };

  //Method called home button is clicked
  const onHomeClick = () =>{
    setButtonClick(null);
    setCountryId(null)
  }

  if(! _.isNull(isCurrentCountryId)){
    return (
      <View style={styles.container}>
        <Header headerValue="United Kingdom" />
       <CountrySelected countryId={isCurrentCountryId} onHomeClick={onHomeClick} data={covidCountSummary}/>
      </View>
    );
  }

  if (isButtonClicked) {
    return (
      <View style={styles.container}>
        <Header headerValue="Country details" />
        {countryList.length > 0 ? <SearchDetail searchData={countryList} onBack={onButtonClick}  onItemPress={setCountry}/> : <Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />}
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Header headerValue="Global Statistics" />
      <View>
        {!_.isEmpty(covidCountSummary?.Global)  && (
          <Dashboard
            covidSummaryData={covidCountSummary?.Global}
            onButtonPress={onButtonClick}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
