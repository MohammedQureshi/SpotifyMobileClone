import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

interface params{
    passBackgroundColor: String;
    title: String;
    image: String;
}

function Card(params: any){
    return(
        <View style={{backgroundColor: params.passBackgroundColor, width: '45%', padding: 10, margin: 10, borderRadius: 5, height: 100, overflow: "hidden"}}>
            <Text style={styles.title}>{params.title}</Text>
            <Image
                style={styles.tinyLogo}
                source={{
                uri: params.image,
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color:'white',
        fontWeight: 'bold',
        fontSize: 16,
        flexWrap: 'wrap',
        width: 100
    },
    tinyLogo: {
        width: 70,
        height: 70,
        position: 'absolute',
        right: -20,
        bottom: -5,
        transform: [{rotate: '27deg'}],
      },
})

export default Card