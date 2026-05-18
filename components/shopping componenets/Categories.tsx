import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Categories() {
    return (
        <View style={styles.mainContainer}>

            <View style={styles.headerContainer}>
                <Text style={styles.headingText}>Categories</Text>
                <View style={styles.seeAllContainer}>
                    <Text style={styles.seeAllText}>See All</Text>
                    <View style={styles.arrowContainer}>
                        <Image source={require('../../assets/Icons/arrow.png')} />
                    </View>
                </View>
            </View>

            <View style={styles.categoryGrid}>
                <View style={styles.categoryCard}>
                    <View style={styles.categoryImageGrid}>
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/cloth_1.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/cloth_2.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/cloth_3.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/cloth_4.png')} />
                    </View>
                    <View style={styles.categoryFooter}>
                        <Text style={styles.categoryName}>Clothing</Text>
                        <View style={styles.productCountContainer}>
                            <Text style={styles.productCount}>109</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryCard}>
                    <View style={styles.categoryImageGrid}>
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/shoes_1.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/shoes_2.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/shoes_3.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/shoes_4.png')} />
                    </View>
                    <View style={styles.categoryFooter}>
                        <Text style={styles.categoryName}>Shoes</Text>
                        <View style={styles.productCountContainer}>
                            <Text style={styles.productCount}>530</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryCard}>
                    <View style={styles.categoryImageGrid}>
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/bags_1.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/bags_2.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/bags_3.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/bags_4.png')} />
                    </View>
                    <View style={styles.categoryFooter}>
                        <Text style={styles.categoryName}>Bags</Text>
                        <View style={styles.productCountContainer}>
                            <Text style={styles.productCount}>87</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.categoryCard}>
                    <View style={styles.categoryImageGrid}>
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/lingerie_1.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/lingerie_2.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/lingerie_3.png')} />
                        <Image style={styles.categoryImage} source={require('../../assets/images/categories/lingerie_4.png')} />
                    </View>
                    <View style={styles.categoryFooter}>
                        <Text style={styles.categoryName}>Lingerie</Text>
                        <View style={styles.productCountContainer}>
                            <Text style={styles.productCount}>218</Text>
                        </View>
                    </View>
                </View>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
    },

    headerContainer: {
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headingText: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#000',
        lineHeight: 30
    },

    seeAllContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 15
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

    // card style

    categoryGrid: {
        marginTop: 10,
        paddingBottom: 25,
        paddingHorizontal: 20,
        gap: 7,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    categoryCard: {
        backgroundColor: "#FFF",
        borderRadius: 10,
        padding: 8,

        width: '49%',

        //shadow
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.16,
        shadowRadius: 8,
        elevation: 4,
    },

    categoryImageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    categoryImage: {
        borderRadius: 5
    },

    categoryFooter: {
        marginTop: 6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    categoryName: {
        color: '#202020',
        fontSize: 17,
        fontWeight: 'bold',
        lineHeight: 21
    },

    productCountContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
        width: 38,
        borderRadius: 6
    },

    productCount: {
        color: '#202020',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: 21
    }

})