import { Text, StyleSheet, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import FlatCards from '../components/z_learning/FlatCards'
import ElevatedCards from '../components/z_learning/ElevatedCards'
import Fancycard from '../components/z_learning/Fancycard'
import HorizontalCard from '../components/z_learning/HorizontalCard'
import ActionCard from '../components/z_learning/ActionCard'
import ContantList from '../components/z_learning/ContantList'

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