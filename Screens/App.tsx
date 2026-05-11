import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from '../components/FlatCards'
import ElevatedCards from '../components/ElevatedCards'
import Fancycard from '../components/Fancycard'
import HorizontalCard from '../components/HorizontalCard'
import ActionCard from '../components/ActionCard'
import ContantList from '../components/ContantList'

export default class App extends Component {
  render() {
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ContantList />
            <FlatCards
            />
            <ElevatedCards
            />
            <Fancycard />
            <ActionCard />
          </ScrollView>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({})