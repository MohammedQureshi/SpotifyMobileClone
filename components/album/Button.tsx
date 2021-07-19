import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Button(){
    return(
            <Pressable style={styles.button}>
                <Text style={styles.text}><Icon name="magnify" style={styles.icon} /> Artists, songs, or podcasts</Text>
            </Pressable>
    )
}

const styles = StyleSheet.create({
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

export default Button