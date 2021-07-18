import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

// function Album(){
//     return(
//         <View>
//             <Text>Album</Text>
//         </View>
//     )
// }

enum AlbumType {
    RECENTLY_PLAYED,
    DEFAULT, 
    PODCAST
}

interface AlbumProps {
    imageURL?: string,
    text?: string,
    type?: AlbumType
    date?: number
}

const styles = StyleSheet.create({
    album : {
        marginLeft: 10
    },
    text : {
        color: '#fff'
    },
    recentlyPlayed : {
        color: '#fff',
        fontWeight: 'bold'
    },
    defaultText: {
        color: '#ccc'
    }
})

const Album : React.FC<AlbumProps> = ({
    imageURL = "",
    text = "",
    type = AlbumType.DEFAULT,
    date = Date.now()
}) => {
    return <View style={styles.album}>
        <Image style={{
            height: 150,
            width: 150
        }} source={{
            uri: imageURL
        }}/>
        <Text style={ type === AlbumType.DEFAULT ? styles.defaultText : styles.recentlyPlayed}>{text}</Text>
        { type === AlbumType.PODCAST ? <Text>{date}</Text> : null}
    </View>
}

export default Album