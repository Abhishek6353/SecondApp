import { Image, Linking, Pressable, ScrollView, StyleSheet, Text, TouchableNativeFeedbackComponent, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { style } from 'framer-motion/client';

export class Chats extends Component {

    private chatData = [
        {
            id: '1',
            name: 'Henrique Alves',
            message: "I'm here, I'm waiting for you in front of the bakery.",
            time: '20:03',
            unreadCount: 10,
            avatar:
                'https://randomuser.me/api/portraits/men/11.jpg',
            online: true,
            typing: false,
            delivered: true,
        },
        {
            id: '2',
            name: 'Lucas B.',
            message:
                'Then send me that link you mentioned, I forgot to save it',
            time: '19:45',
            unreadCount: 4,
            avatar:
                'https://randomuser.me/api/portraits/men/32.jpg',
            online: true,
            typing: false,
            delivered: true,
        },
        {
            id: '3',
            name: 'Lari Mendes',
            message:
                "Hahaha okay, but if you're late again you'll pay for the coffee 😭",
            time: '19:32',
            unreadCount: 0,
            avatar:
                'https://randomuser.me/api/portraits/women/44.jpg',
            online: false,
            typing: true,
            delivered: true,
        },
        {
            id: '4',
            name: 'Bruna ✨',
            message: 'Let me know when you get home',
            time: '18:08',
            unreadCount: 0,
            avatar:
                'https://randomuser.me/api/portraits/women/65.jpg',
            online: false,
            typing: true,
            delivered: true,
        },
        {
            id: '5',
            name: 'Gabi Lins',
            message:
                "Aaaa I'm so happy for you ❤️ We'll talk more later, I'm in the middle of a meeting",
            time: '12:06',
            unreadCount: 0,
            avatar:
                'https://randomuser.me/api/portraits/women/22.jpg',
            online: true,
            typing: false,
            delivered: true,
        },
        {
            id: '6',
            name: 'Ana Luiza Gomes',
            message: 'Typing...',
            time: '09:01',
            unreadCount: 0,
            avatar:
                'https://randomuser.me/api/portraits/women/50.jpg',
            online: true,
            typing: true,
            delivered: false,
        },
        {
            id: '7',
            name: 'Leo Cunha',
            message:
                'Dude, you could have just spoken up before. You could have avoided all this.',
            time: 'Ontem',
            unreadCount: 0,
            avatar:
                'https://randomuser.me/api/portraits/men/40.jpg',
            online: false,
            typing: false,
            delivered: true,
        },
        {
            id: '8',
            name: 'Bruninho',
            message: 'Did you watch the game yesterday? 🔥',
            time: 'Ontem',
            unreadCount: 1,
            avatar:
                'https://randomuser.me/api/portraits/men/75.jpg',
            online: true,
            typing: false,
            delivered: true,
        },

        {
            id: '9',
            name: 'Nirahua Rickshawa',
            message: "I'm here, I'm waiting for you in front of the bakery.",
            time: '20:03',
            unreadCount: 59,
            avatar:
                'https://randomuser.me/api/portraits/men/12.jpg',
            online: true,
            typing: false,
            delivered: true,
        },
    ];

    render() {
        return (
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1, backgroundColor: '#000000ff' }}>
                    <View style={styles.mainContainer}>
                        <Text style={styles.headingText}>Chats</Text>
                        <ScrollView showsVerticalScrollIndicator={false} style={{ paddingTop: 10 }}>
                            {this.chatData.map((chat) => (
                                <Pressable key={chat.id} style={styles.usersCard} onPress={() => Linking.openURL(chat.avatar)}>

                                    <Image source={{ uri: chat.avatar }} style={styles.userImage} />
                                    <View style={styles.userText}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Text style={styles.userName}>{chat.name}</Text>
                                            <Text style={styles.chatTime}>{chat.time}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', gap: 4 }}>
                                            {chat.typing == true ? <Text style={[styles.userMessage, { color: '#67fc31ff' }]}>Typing...</Text> : <Text style={styles.userMessage}>{chat.message}</Text>}
                                            {chat.unreadCount > 0 && (
                                                <View style={styles.unreadCountView}>
                                                    <Text style={styles.unreadCountText}>{chat.unreadCount}</Text>
                                                </View>
                                            )}
                                        </View>
                                    </View>
                                </Pressable>
                            ))}
                        </ScrollView>

                    </View>
                </SafeAreaView>
            </SafeAreaProvider>
        )
    }
}

export default Chats

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20
    },

    headingText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#ffffffff'
    },

    usersCard: {
        paddingVertical: 10,
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },

    userImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    userText: {
        flex: 1,
        gap: 3,
        marginLeft: 10
    },

    userName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    userMessage: {
        color: '#a5a5a5ff',
        fontSize: 14,
        flex: 1
    },

    chatTime: {
        color: '#67fc31ff',
        fontSize: 12
    },

    unreadCountView: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: '#67fc31ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    unreadCountText: {
        color: '#000',
        fontSize: 10
    }
})