import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import GridList from './gridList'

const Like = () => {
    return (
        <Layout style={{flex:1}}>
            <Header title="" />
            <ScrollView>
                <GridList title="Liked Songs"/>
            </ScrollView>
        </Layout>
    )
}

export default Like

const styles = StyleSheet.create({
    
})
