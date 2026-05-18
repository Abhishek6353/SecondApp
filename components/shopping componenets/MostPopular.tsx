import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function MostPopular() {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>Most Popular</Text>
                <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.arrowContainer}>
                        <Image
                            source={require('../../assets/Icons/arrow.png')}
                        />
                    </View>
                </View>
            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                contentContainerStyle={styles.scrollContainer}
            >
                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_1.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$1200</Text>
                            <Text style={styles.cardCategory}>New</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_2.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$350</Text>
                            <Text style={styles.cardCategory}>Sale</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_3.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$1150</Text>
                            <Text style={styles.cardCategory}>Hot</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_4.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$4500</Text>
                            <Text style={styles.cardCategory}>New</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_1.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$1200</Text>
                            <Text style={styles.cardCategory}>New</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_2.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$350</Text>
                            <Text style={styles.cardCategory}>Sale</Text>
                        </View>

                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_3.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$1150</Text>
                            <Text style={styles.cardCategory}>Hot</Text>
                        </View>

                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.outerCard}>
                    <View style={styles.cardDetailContainer}>
                        <Image style={styles.cardImage} source={require('../../assets/images/mostpopular/MostPopular_4.png')}></Image>
                        <View style={styles.cardTextContainer}>
                            <Text style={styles.cardPrice}>$4500</Text>
                            <Text style={styles.cardCategory}>New</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 25,
        paddingHorizontal: 20,
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

    // Scroll Container
    scrollContainer: {
        marginTop: 10,
        paddingHorizontal: 20,
        gap: 6,
    },

    outerCard: {
        padding: 6,
        borderRadius: 10,
        backgroundColor: "#ffffff",
        marginBottom: 24,

        // shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,

        elevation: 5,
    },

    cardDetailContainer: {
    },

    cardImage: {
        width: 95,
        height: 105,
        borderRadius: 10,
        resizeMode: 'cover',
    },

    cardTextContainer: {
        flex: 1,
        marginTop: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    cardPrice: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 19,
    },

    cardCategory: {
        color: '#202020',
        fontSize: 13,
        fontWeight: 'medium',
        lineHeight: 17,
    },

})