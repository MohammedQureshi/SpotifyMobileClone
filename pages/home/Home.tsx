import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardPreview from '../../components/card/CardPreview';
import Colors from '../../lib/Colors';

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
            backgroundColor: Colors.BACKGROUND_COLOR,
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
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" type={CardPreview.Type.ARTIST} imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" date={125125}/>
                    </ScrollView>
                </View>
            </View>
        </View>
    )
}

export default Home