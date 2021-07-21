import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../lib/Colors';

enum CardPreviewType {
    ARTIST, // When Selected the image should be round.
    PLAYLIST,
    PODCAST,
}

interface CardPreviewProps {
    imageURL?: string, // the image url 
    title?: string, // the title you want to add to the card,
    subtitle?: string // the subtitle you want to add to the card
    type?: CardPreviewType, // the card type (depending on type, this will render differently)
    duration?: string // the duration that shows up when the type is PODCAST
}

// the card styling
const cardPreviewStyle = StyleSheet.create({
    card: {
        width: 180,
        marginLeft: 10,
        backgroundColor: Colors.Card.backgroundColor,
        padding: 15,
        borderRadius: 7
    },
    marginTop10 : {
        marginTop: 10
    },
    marginTop20 : {
        marginTop: 20
    },
    whiteText: {
        color: Colors.WHITE,
    },
    greyText : {
        color: Colors.LIGHT_GREY
    },
    cardImage: {
        width: 150,
        height: 150
    },
    round: {
        borderRadius: 100
    },
    bold : {
        fontWeight: 'bold'
    },
    durationText : {
        fontSize: 11
    },
    defaultText: {
        color: Colors.WHITE
    }
});

// the card object 
const CardPreviewItem: React.FC<CardPreviewProps> = ({
    imageURL = "", // the default image url is blank
    title = "", // the default text is blank
    subtitle = "", // the default sub title is blank
    type = CardPreviewType.PLAYLIST, // the default card type is playlist (as this is the most common type)
    duration = "" // setting the default duration
}) => {
    const cardImageStyle = type !== CardPreviewType.ARTIST ? cardPreviewStyle.cardImage : [cardPreviewStyle.cardImage, cardPreviewStyle.round];
    return <View style={cardPreviewStyle.card}>
            {/** this will be changed in the future but the default height and width is 150, this will change depending on card type */}
            <Image style={cardImageStyle} source={{
                uri: imageURL // the image uri 
            }}/>

            <Text style={[cardPreviewStyle.whiteText, cardPreviewStyle.bold, cardPreviewStyle.marginTop20]} numberOfLines={2}>{title}</Text>
            <Text style={[cardPreviewStyle.greyText, cardPreviewStyle.marginTop10]} numberOfLines={2}>{ type == CardPreviewType.ARTIST ? 'Artist' : subtitle}</Text>

            {/** TODO: if the type is podcast we need to display the date underneath the card */}
            { type === CardPreviewType.PODCAST ? <Text style={[cardPreviewStyle.whiteText, cardPreviewStyle.marginTop10, cardPreviewStyle.bold, cardPreviewStyle.durationText]} numberOfLines={1}>{duration}</Text>: null}
    </View>
}


const CardPreview = {
    Element : CardPreviewItem,
    Type : CardPreviewType
}
export default CardPreview