import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native';

function Search(){
    return(
        <ScrollView style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 20,
        paddingLeft: 10,
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default Search