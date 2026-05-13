import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HeaderView() {
    return (
        <View style={styles.headerContainer}>

            <View style={styles.headerLeftContent}>

                <View style={styles.profileImageContainer}>
                    <Image
                        style={styles.cardImage}
                        source={{
                            uri: 'https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8MHx8fHx8'
                        }}
                    />
                </View>


                <TouchableOpacity activeOpacity={0.8}>
                    <View style={styles.myActivityContainer}>
                        <Text style={styles.myActivityText}>
                            My Activity
                        </Text>
                    </View>
                </TouchableOpacity>

            </View>

            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.settingView}
            >
                <Image
                    style={styles.settingIcon}
                    source={require('../../assets/Icons/settingIcon.png')}
                />
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({

    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    headerLeftContent: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },

    profileImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        padding: 5,
        backgroundColor: '#FFFFFF',

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 10,
    },

    cardImage: {
        width: 45,
        height: 45,
        borderRadius: 25
    },

    myActivityContainer: {
        height: 35,
        paddingHorizontal: 18,

        backgroundColor: '#004CFF',
        borderRadius: 17.5,

        justifyContent: 'center',
        alignItems: 'center',
    },

    myActivityText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '600',
    },

    settingView: {
        width: 35,
        height: 35,

        backgroundColor: '#F8F8F8',
        borderRadius: 17.5,

        justifyContent: 'center',
        alignItems: 'center',
    },

    settingIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },
})