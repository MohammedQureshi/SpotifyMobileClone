import React from 'react'
import { StyleSheet, Text, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../../lib/Colors';

function Button(){
    return(
            <Pressable style={styles.button}>
                <Icon name="magnify" style={styles.icon} /> 
                <Text style={styles.text}>Artists, songs, or podcasts</Text>
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
        backgroundColor: Colors.WHITE,
        flexDirection: 'row',
    },
    text:{
        fontSize: 24,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: Colors.GREY,
        paddingLeft: 15,
    },
    icon: {
        marginLeft: 10,
        fontSize: 40,
        color: Colors.GREY,
        flexDirection: 'column',
    }
})

export default Button