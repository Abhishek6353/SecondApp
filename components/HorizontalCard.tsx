import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HorizontalCard() {
    return (
        <View>
            <Text style={styles.headingText}>HorizontalCard</Text>

            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: { fontSize: 24, fontWeight: 'bold', paddingHorizontal: 10 },
})