import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ContantList() {

    const contacts = [
        {
            uid: 1,
            name: 'Aarav Mehta',
            status: 'Designing better payment experiences',
            imageUrl: 'https://avatars.githubusercontent.com/u/583231?v=4',
        },
        {
            uid: 2,
            name: 'Priya Sharma',
            status: 'Exploring Flutter animations',
            imageUrl: 'https://avatars.githubusercontent.com/u/810438?v=4',
        },

        {
            uid: 3,
            name: 'Aditya Singh',
            status: 'Coffee + Code = Productivity',
            imageUrl: 'https://avatars.githubusercontent.com/u/3626071?v=4',
        },
        {
            uid: 4,
            name: 'Neha Patel',
            status: 'Crafting smooth UI experiences',
            imageUrl: 'https://avatars.githubusercontent.com/u/170270?v=4',
        },
        {
            uid: 5,
            name: 'Rohan Verma',
            status: 'Making your UPI faster',
            imageUrl: 'https://avatars.githubusercontent.com/u/9919?v=4',
        },
        {
            uid: 6,
            name: 'Sneha Kapoor',
            status: 'Building scalable mobile apps',
            imageUrl: 'https://avatars.githubusercontent.com/u/10639145?v=4',
        },
        {
            uid: 7,
            name: 'Kunal Joshi',
            status: 'Learning SwiftUI every day',
            imageUrl: 'https://avatars.githubusercontent.com/u/10639145?v=4',
        },
        {
            uid: 8,
            name: 'Ishita Rao',
            status: 'Debugging life one bug at a time',
            imageUrl: 'https://avatars.githubusercontent.com/u/3626071?v=4',
        },
        {
            uid: 9,
            name: 'Rahul Nair',
            status: 'Turning ideas into products',
            imageUrl: 'https://avatars.githubusercontent.com/u/18133?v=4',
        },
        {
            uid: 10,
            name: 'Meera Iyer',
            status: 'Building secure fintech solutions',
            imageUrl: 'https://avatars.githubusercontent.com/u/170270?v=4',
        },
    ];

    return (
        <View>
            <Text style={styles.headingText}>ContantList</Text>

            <ScrollView scrollEnabled={false} showsVerticalScrollIndicator={false} style={styles.container} >

                {contacts.map(({ uid, name, imageUrl, status }) => (

                    <TouchableOpacity key={uid} onPress={() => { Linking.canOpenURL(imageUrl).then((supported) => { if (supported) { Linking.openURL(imageUrl) } }) }} >
                        <View style={styles.userCard}>
                            <Image source={{ uri: imageUrl }} style={styles.userImage}></Image>

                            <View style={styles.userText}>
                                <Text style={styles.userName}>{name}</Text>
                                <Text style={styles.userStatus}>{status}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                ))}

            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({

    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    container: {
        margin: 12,
    },

    userCard: {
        padding: 15,
        backgroundColor: '#cc88e9ff',
        marginBottom: 8,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },

    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    userStatus: {
        fontSize: 14,
        color: '#17071eff'
    },

    userText: {
        marginLeft: 10,
        gap: 4
    }

})