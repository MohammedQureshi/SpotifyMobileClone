import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import CardPreview from '../../components/card/CardPreview';
import SuggestionHeader from '../../components/suggestion/SuggestionHeader';
import Colors from '../../lib/Colors';
import { Buffer } from "buffer"

function Home(){
    const styles = StyleSheet.create({
        text: {
            color: '#fff'
        },
        h1: {
            fontSize: 20,
            marginBottom: 20,
            marginTop: 20,
            fontWeight: 'bold'
        },
        background : {
            width: '100%',
            flex: 1,
            backgroundColor: Colors.BACKGROUND_COLOR,
            paddingTop: 20,
            paddingBottom: 20,
            overflow: 'scroll'
        },
        container: {
            width: '97%',
            marginLeft: 10,
            alignSelf: 'flex-end'
        }
    });
    return(
        <View style={styles.background}>
            <StatusBar hidden/> 
            <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text style={[styles.text, styles.h1]}>Recently Played</Text>
                    <ScrollView horizontal={true}>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" type={CardPreview.Type.ARTIST} imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" />
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" type={CardPreview.Type.PODCAST} duration="11 min" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                    </ScrollView>
                </View>

                <View>
                    <SuggestionHeader artist={{
                        id: Buffer.from('AC DC', 'utf-8').toString('base64'),
                        name: "AC DC",
                        imageURL : "https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"
                    }}/>
                    <ScrollView horizontal={true}>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                    </ScrollView>
                </View>


                <View>
                    <Text style={[styles.text, styles.h1]}>Workout</Text>
                    <ScrollView horizontal={true}>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" type={CardPreview.Type.ARTIST} imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg" />
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" type={CardPreview.Type.PODCAST} duration="11 min" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius arcu eu nibh facilisis, non blandit augue volutpat. Morbi pharetra." imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                        <CardPreview.Element title="Hello World" imageURL="https://www.flat-e.com/flate5/wp-content/uploads/cover.jpg"/>
                    </ScrollView>
                </View>
            </View>
            </ScrollView>
        </View>
    )
}

export default Home