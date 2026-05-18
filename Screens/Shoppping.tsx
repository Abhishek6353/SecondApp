import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context'
import HeaderView from '../components/shopping componenets/HeaderView'
import RecentlyViewed from '../components/shopping componenets/RecentlyViewed'
import MyOrdersView from '../components/shopping componenets/MyOrdersView'
import StoriesView from '../components/shopping componenets/StoriesView'
import NewItems from '../components/shopping componenets/NewItems'
import MostPopular from '../components/shopping componenets/MostPopular'
import Categories from '../components/shopping componenets/Categories'


export default function Shoppping() {
    return (
        <SafeAreaProvider style={{ backgroundColor: 'white' }}>
            <SafeAreaView>
                <ScrollView>
                    <View style={styles.container}>

                        <HeaderView />
                        <Text style={styles.headingText}>Hello, Romina!</Text>
                        <View style={styles.announcementContainer}>

                            <View style={styles.announcementTextContainer}>
                                <Text style={styles.announcementTitle}>
                                    Announcement
                                </Text>

                                <Text style={styles.announcementDescription}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Maecenas hendrerit luctus libero ac vulputate.
                                </Text>
                            </View>

                            <View style={styles.arrowContainer}>
                                <Image
                                    style={styles.arrowIcon}
                                    source={require('../assets/Icons/arrow.png')}
                                />
                            </View>

                        </View>
                        <RecentlyViewed />
                        <MyOrdersView />
                        <StoriesView />
                        <NewItems />
                        <MostPopular />
                        <Categories />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </SafeAreaProvider >
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 20,
        paddingTop: 27,
        paddingBottom: 30
    },

    headingText: {
        color: '#000',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
        paddingHorizontal: 20,
    },

    announcementContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',

        marginTop: 20,
        backgroundColor: '#F8F8F8',

        borderRadius: 18,
        padding: 18,
        marginHorizontal: 20
    },
    announcementTextContainer: {
        flex: 1,
        flexShrink: 1,
        marginRight: 15,
    },


    announcementTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#000',
    },

    announcementDescription: {
        marginTop: 6,
        fontSize: 10,
        lineHeight: 15,
        color: '#5C5C5C',
    },

    arrowIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
    },

    arrowContainer: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        backgroundColor: '#004CFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
})