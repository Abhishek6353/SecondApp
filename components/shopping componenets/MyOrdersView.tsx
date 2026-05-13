import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MyOrdersView() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>My Orders</Text>

            <View style={styles.cardContainer}>
                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardText}>To Pay</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardText}>To Recieve</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <Text style={styles.cardText}>To Review</Text>
                </TouchableOpacity>
            </View>
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

    cardContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },

    card: {
        backgroundColor: '#E5EBFC',
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 18,
    },

    cardText: {
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 21,
        color: "#0042E0",
    },
})