import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

const Header = ({headerValue}) => {

    const propTypes = {
        covidSummaryData: PropTypes.string.isRequired
  };
    const {header,headerText} = styles;
    return (
        <View style={header}> 
            <Text style={headerText}>{headerValue}</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    header: {
        backgroundColor: '#000',
        height: 70,
        paddingTop:30,
        justifyContent : 'center',
        alignItems: 'center',
        width:"100%"
    },
    headerText: {
        color: '#FFF',
        fontSize: 20,
        marginBottom: 25
    }
})
export default Header
