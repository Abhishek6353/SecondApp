import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsites(link: string) {
        Linking.openURL(link)
    }
    return (
        <View>
            <Text style={styles.headingText}>ActionCard</Text>

            <Pressable onPress={() => openWebsites('https://reactnative.dev/')}>
                <View style={[styles.card, styles.elevatedCard]}>

                    <Image
                        source={{ uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}
                        style={styles.cardImage}
                    />

                    <View style={styles.cardBody}>
                        <Text style={styles.cardTitle}>Learn React Native</Text>

                        <Text style={styles.cardDescription}>React Native is an open-source framework developed by Meta (formerly Facebook) that is primarily used to build cross-platform mobile applications for iOS and Android...</Text>
                    </View>

                </View>
            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 10,
    },

    card: {
        padding: 15,
        borderRadius: 10,
        margin: 15,
        backgroundColor: "#a7a1e1ff",
        flexDirection: 'row'
    },

    cardImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },

    cardBody: {
        paddingHorizontal: 10,
        flex: 1,
        flexShrink: 1,
    },

    elevatedCard: {
        elevation: 3,
        shadowColor: "#2b00ffff",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 5,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingBottom: 8
    },

    cardDescription: {
        fontSize: 14,
        flexWrap: 'wrap',

    },


})