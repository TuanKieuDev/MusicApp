import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import MainTab from './MainTab';

export type RootStackParamList = {
    MainTab: undefined;
    
  };

const Stack = createStackNavigator<RootStackParamList>();

const RootStack = () => {
    return (
    <Stack.Navigator>
        <Stack.Screen name="MainTab" component={MainTab} options={{headerShown:false}}/>
    </Stack.Navigator>
    )
}

export default RootStack

const styles = StyleSheet.create({})
