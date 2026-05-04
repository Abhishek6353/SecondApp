import { StyleSheet, Text, View, Image, ScrollView, Dimensions } from 'react-native'
import React from 'react'

const { width } = Dimensions.get('window')

export default function Fancycard() {
    return (
        <View>
            <Text style={styles.headingText}>Fancy card</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                // contentContainerStyle={{ paddingRight: 16 }}
                decelerationRate={'fast'}
                snapToInterval={width * 0.8 + 30}
            >
                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>

                <View style={styles.card}>

                    <Image source={{
                        uri: 'https://reactjs.org/logo-og.png'
                    }}
                        style={styles.cardImage}
                    />
                    <Text style={styles.titleText}>Learn React Native </Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.descriptionText}>Many of the images you will display in your app will not be available at compile time, or you will want to load some</Text>
                    <Text style={styles.footerText}>In your 15Km radios, you can find 15 restaurants</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10
    },

    cardImage: {
        height: 200,
        borderRadius: 8,
        width: '100%',
    },

    card: {
        margin: 15,
        width: width * 0.8,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#bcfedeff'
    },

    titleText: {
        fontSize: 22,
        fontWeight: '500',
        paddingTop: 12
    },

    descriptionText: {
        fontSize: 14,
        paddingBottom: 5,
        paddingTop: 5
    },

    footerText: {
        fontSize: 12,
        paddingTop: 15,
        color: 'gray',
        fontStyle: 'italic'
    }
})