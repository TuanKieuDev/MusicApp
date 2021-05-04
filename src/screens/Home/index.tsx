import React from 'react'
import { ScrollView, StyleSheet} from 'react-native'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import RowList from './RowList'


const Home = () => {
    return (
        <Layout style={{flex:1}}>
            <Header title=""/>
            <ScrollView>
                <RowList title={"Recommended for you"} />
                <RowList title={"My Playlist"} />
            </ScrollView>
        </Layout>
    )
}

export default Home

const styles = StyleSheet.create({})
