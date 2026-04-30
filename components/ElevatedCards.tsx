import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'

export default class ElevatedCards extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}>Elevated Cards</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.container}>
                        <View style={[styles.card, styles.cardOne]}>
                            <Text>Tap</Text>
                        </View>
                        <View style={[styles.card, styles.cardTwo]}>
                            <Text>me</Text>
                        </View>
                        <View style={[styles.card, styles.cardThree]}>
                            <Text>to</Text>
                        </View>
                        <View style={[styles.card, styles.cardFour]}>
                            <Text>scroll</Text>
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }
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
    },

    cardFour: {
        backgroundColor: '#81f5b3ff'
    }
})