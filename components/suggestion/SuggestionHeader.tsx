import React from "react";
import { Linking, Text, StyleSheet, Image, View } from "react-native";
import Colors from "../../lib/Colors";
import Artist from "../../lib/artist/Artist";

interface SuggestionHeaderProps {
    artist: Artist
}

// const SuggestionHeaderStyles = new StyleSheet({

// });

const defaultArtist : Artist = {
    id: "",
    name: "",
    imageURL: ""
};

const SuggestionHeaderStyles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    moreLikeText : {
        color: Colors.LIGHT_GREY,
        textTransform: 'uppercase',
        fontSize: 10,
        marginLeft: 2
    },
    artistName : {
        color: 'white',
        fontSize: 21,
        fontWeight: 'bold',
    },
    artistImage : {
        width: 45,
        height: 45,
        borderRadius: 100,
    },
    extraInfo: {
        marginLeft: 10,
        justifyContent: 'center',
    }
});
export const SuggestionHeader : React.FC<SuggestionHeaderProps> = ({
    artist = defaultArtist
}) => {
    return <View style={SuggestionHeaderStyles.container}>
        <Image style={SuggestionHeaderStyles.artistImage} source={{
                uri: artist.imageURL // the image uri 
        }}/>
        <View style={SuggestionHeaderStyles.extraInfo}>
            <Text style={SuggestionHeaderStyles.moreLikeText}>More Like</Text>
            <Text style={SuggestionHeaderStyles.artistName} onPress={() => Linking.openURL(`artist/${artist.id}`)}>{artist.name}</Text>
        </View>
    </View>
}

export default SuggestionHeader;
