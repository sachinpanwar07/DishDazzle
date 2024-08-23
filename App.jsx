import { StyleSheet, Text, View,StatusBar } from 'react-native'
import React from 'react'
import BotttomTabNavigation from './src/navigation/BotttomTabNavigation'
import StackNavigation from './src/navigation/StackNavigation'

const App = () => {
  return (
    <>
     <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
    <StackNavigation/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})