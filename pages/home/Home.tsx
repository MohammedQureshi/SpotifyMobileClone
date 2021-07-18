import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Album from '../../components/album/Album';

function Home(){
    const styles = StyleSheet.create({
        text: {
            color: '#fff'
        },
        h1: {
            fontSize: 20,
            marginBottom: 10
        },
        background : {
            width: '100%',
            flex: 1,
            backgroundColor: '#121212',
            paddingTop: 20,
            paddingBottom: 20
        },
        container: {
            width: '97%',
            marginLeft: 10,
            alignSelf: 'flex-end',
        }
    });
    return(
        <View style={styles.background}>
            <View style={styles.container}>
                <StatusBar hidden/>
                <View>
                    <Text style={[styles.text, styles.h1]}>Recently Played</Text>
                    <ScrollView horizontal={true}>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <Album text="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Home