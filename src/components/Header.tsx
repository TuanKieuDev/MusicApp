import React from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from './Text'
import Layout from './Layout'
import {Ionicons} from "@expo/vector-icons"
import Constants from 'expo-constants'
import { useTheme } from '../config/Theme'

interface Props {
    title:string;
}
const Header = ({title}:Props) => {
    const {theme} = useTheme();
    return (
        <Layout style={styles.container}>
            <TouchableOpacity style ={styles.btn}>
                <Ionicons name="menu" size={24} color={theme.icon_color}/>
            </TouchableOpacity>
            <View style={styles.body}>
                <Text>{title}</Text>
            </View>
            <TouchableOpacity style={styles.btn}>
                <Ionicons name="search" size={24} color={theme.icon_color}/>
            </TouchableOpacity>
        </Layout>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 48,
        flexDirection: 'row',
        marginTop: Constants.statusBarHeight,
    },
    btn: {
        width: 48,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    body: {
        flex: 1,
    }

})
