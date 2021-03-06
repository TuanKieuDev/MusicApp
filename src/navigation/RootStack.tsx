import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';
import { ISong } from '../data/likeSong';
import Playing from '../screens/Playing';
import Search from '../screens/Search'

export type RootStackParamList = {
    MainTab: undefined;
    Playing:{
        listSong: ISong[];
    }
    Search: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
        <Stack.Screen name="Playing" component={Playing} options={{headerShown:false}}/>
        <Stack.Screen name="Search" component={Search} options={{headerShown:false}}/>
    </Stack.Navigator>
    
    )
}

export default RootStack

const styles = StyleSheet.create({})
