import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

import * as Yup from 'yup'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'


const passswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
        .min(4, "At least 4 characters")
        .max(16, "At most 16 characters")
        .required("Length is required"),
})

export default function password() {


    return (
        <SafeAreaProvider>
            <SafeAreaView>
                <View>
                    <Text style={styles.hedingText}>Password Generator</Text>

                    <TextInput
                        placeholder='Password Length'
                        style={styles.input}
                        keyboardType='number-pad'
                    ></TextInput>

                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#ffffffff', fontSize: 16 }}>Generate Password</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
    hedingText: {
        paddingTop: 15,
        paddingHorizontal: 16,
        fontSize: 24,
        fontWeight: '800',
        textAlign: 'center'
    },
    input: {
        margin: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        fontSize: 16
    },
    button: {
        margin: 16,
        padding: 10,
        borderWidth: 1,
        backgroundColor: '#000000ff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    }
})  