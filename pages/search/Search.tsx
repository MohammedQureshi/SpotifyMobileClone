import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

function Search(){
    return(
        <View style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
        </View>
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