import React from 'react'
import { StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Search(){
    return(
        <ScrollView style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
            <Pressable style={styles.button}>
                <Text style={styles.text}><Icon name="magnify" style={styles.icon} /> Artists, songs, or podcasts</Text>
            </Pressable>
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
    button: {
        paddingVertical: 14,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'white',
    },
    text:{
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#535353',
        paddingLeft: 15,
    },
    icon: {
        fontSize: 40,
        color: '#535353',
        flexDirection: 'column',
    }
})

export default Search