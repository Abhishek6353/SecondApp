import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { style } from 'framer-motion/client'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <View style={styles.container}>
                <View style={[styles.cardOne, styles.card]}>
                    <Text> Red</Text>
                </View>
                <View style={[styles.cardTwo, styles.card]}>
                    <Text> Green</Text>
                </View>
                <View style={[styles.cardThree, styles.card]}>
                    <Text> Blue</Text>
                </View>

                <View style={[styles.cardThree, styles.card]}>
                    <Text> Blue</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 14,
        margin: 10
    },

    cardOne: {
        backgroundColor: '#f58181ff'
    },

    cardTwo: {
        backgroundColor: '#80ff8fff'
    },

    cardThree: {
        backgroundColor: '#818df5ff'
    }
})