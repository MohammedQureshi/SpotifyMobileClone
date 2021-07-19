import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

interface params{
    passBackgroundColor: String;
}

function Card(params: any){
    return(
        <View style={{backgroundColor: params.passBackgroundColor}}>
            <Text>Hi</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'red'
    }
})

export default Card