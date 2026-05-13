import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function RecentlyViewed() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>Recently viewed</Text>

            <View style={styles.cardContainer}>

                <TouchableOpacity style={styles.card} >
                    <Image style={styles.cardImage} source={require('../../assets/images/user_profile_1.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} >
                    <Image style={styles.cardImage} source={require('../../assets/images/user_profile_2.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} >
                    <Image style={styles.cardImage} source={require('../../assets/images/user_profile_3.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card} >
                    <Image style={styles.cardImage} source={require('../../assets/images/user_profile_4.png')} />
                </TouchableOpacity>TouchableOpacity

                <TouchableOpacity style={styles.card} >
                    <Image style={styles.cardImage} source={require('../../assets/images/user_profile_5.png')} />
                </TouchableOpacity>
            </View >
        </View >
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
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 10,
    },

    card: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // height: 60,
        borderRadius: 30,
        padding: 5,
        backgroundColor: '#FFFFFF',
        // shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10,
    },

    cardImage: {
        borderRadius: 25
    },
})