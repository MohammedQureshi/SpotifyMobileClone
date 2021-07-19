import React from 'react'
import { StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Button from '../../components/button/Button';

function Search(){
    return(
        <ScrollView style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
            <Button />
            <Text style={styles.genres}>Your top genres </Text>

            <Text style={styles.genres}>Popular podcast categories </Text>

            <Text style={styles.genres}>Browse all </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 60,
        paddingBottom: 45,
        paddingLeft: 20,
        color: 'white',
        fontSize: 45,
        fontWeight: 'bold'
    },
    genres: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        padding: 20
    }
})

export default Search