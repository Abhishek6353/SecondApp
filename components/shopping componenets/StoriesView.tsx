import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function StoriesView() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>Stories</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.cardContentContainer}>
                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../../assets/images/stories/stories_1.png')} />
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../../assets/images/stories/stories_2.png')} />
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../../assets/images/stories/stories_3.png')} />
                </View>

                <View style={styles.card}>
                    <Image style={styles.cardImage} source={require('../../assets/images/stories/stories_4.png')} />
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 28,
    },
    headingText: {
        color: '#000',
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 30,
        marginBottom: 12,
        paddingHorizontal: 20,
    },
    cardContentContainer: {
        gap: 6,
        paddingRight: 20,
        alignItems: 'flex-start',
        paddingHorizontal: 20,
    },

    card: {
        width: 104,
        height: 175,
        borderRadius: 9,
        overflow: 'hidden',
    },
    cardImage: {
        width: 104,
        height: 175,
        resizeMode: 'cover',
    },
})