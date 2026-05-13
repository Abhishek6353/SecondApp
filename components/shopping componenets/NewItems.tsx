import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function NewItems() {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>NewItems</Text>
                <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.arrowContainer}>
                        <Image
                            source={require('../../assets/Icons/arrow.png')}
                        />
                    </View>
                </View>
            </View>


            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.itemContainer}>
                <View style={styles.itemCard}>
                    <View style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={require('../../assets/images/user_profile_1.png')} />
                    </View>
                    <Text style={styles.itemName}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.itemPrice}>$17,00</Text>
                </View>

                <View style={styles.itemCard}>
                    <View style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={require('../../assets/images/user_profile_1.png')} />
                    </View>
                    <Text style={styles.itemName}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.itemPrice}>$17,00</Text>
                </View>

                <View style={styles.itemCard}>
                    <View style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={require('../../assets/images/user_profile_1.png')} />
                    </View>
                    <Text style={styles.itemName}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.itemPrice}>$17,00</Text>
                </View>

                <View style={styles.itemCard}>
                    <View style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={require('../../assets/images/user_profile_1.png')} />
                    </View>
                    <Text style={styles.itemName}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.itemPrice}>$17,00</Text>
                </View>

                <View style={styles.itemCard}>
                    <View style={styles.itemImageContainer}>
                        <Image style={styles.itemImage} source={require('../../assets/images/user_profile_1.png')} />
                    </View>
                    <Text style={styles.itemName}>Lorem ipsum dolor sit amet consectetur.</Text>
                    <Text style={styles.itemPrice}>$17,00</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 25,
    },

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headingText: {
        color: '#000',
        fontSize: 21,
        fontWeight: 'bold',
        lineHeight: 30
    },

    seeAllContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 13,
    },

    seeAllText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000'

    },

    arrowContainer: {
        width: 30,
        height: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue'
    },


    // Items Container
    itemContainer: {
        marginTop: 10,
        paddingHorizontal: 5,
        gap: 6
    },

    itemCard: {
        width: 140,
    },

    itemImageContainer: {
        flex: 1,
        borderWidth: 5,
        borderColor: '#fff',
        borderRadius: 10,
        marginBottom: 6,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10,
        elevation: 2,
    },
    itemImage: {
        width: 130,
        height: 130,
        resizeMode: 'contain',
        borderRadius: 10
    },
    itemName: {
        fontSize: 12,
        fontWeight: 'regular',
        lineHeight: 16,
        color: '#000'

    },
    itemPrice: {
        fontSize: 17,
        lineHeight: 21,
        fontWeight: 'bold',
        color: '#000'
    },

})