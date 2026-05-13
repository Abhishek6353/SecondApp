import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function MyOrdersView() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>My Orders</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 18,
    },

    headingText: {
        color: '#000',
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 30,
        marginBottom: 10,
    },
})