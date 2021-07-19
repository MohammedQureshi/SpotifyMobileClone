import React from 'react'
import { StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Button from '../../components/album/Button';

function Search(){
    return(
        <ScrollView style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
            <Button />
            <Text>Your top genres </Text>
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
    }
})

export default Search