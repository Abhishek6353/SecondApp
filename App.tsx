import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from './components/FlatCards'
import ElevatedCards from './components/ElevatedCards'

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView>
            <FlatCards
            />
            <ElevatedCards
            />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({})