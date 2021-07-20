import React from 'react'
import { StyleSheet, Text, ScrollView, View} from 'react-native';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

function Search(){
    const url = 'https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg'
    return(
        <ScrollView style={{ backgroundColor: '#121212', flex:1}}>
            <Text style={styles.header}>Search</Text>
            <Button />
            <Text style={styles.genres}>Your top genres </Text>
            <View style={{flex: 1, flexDirection: 'row', paddingLeft: 10, paddingRight: 10}}>
                <Card passBackgroundColor='#8c66aa' title='Pop' image={url} />
                <Card passBackgroundColor='#dc178c' title='Dance/Electric' image={url} />
            </View>
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