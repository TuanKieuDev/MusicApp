import { NavigationProp, useNavigation } from '@react-navigation/native'
import { t } from 'i18n-js'
import React from 'react'
import { SafeAreaView, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import Text from '../../components/Text'
import { useLocale } from '../../config/Localize'
import { useTheme } from '../../config/Theme'
import { RootStackParamList } from '../../navigation/RootStack'

const Setting = () => {
    const {t} = useLocale();
    const {mode} = useTheme();
    const {navigate} = useNavigation<NavigationProp<RootStackParamList>>();
    return (
        <Layout style={{flex:1}}>
            <SafeAreaView style={{flex: 1}}> 
            <Text style = {{marginLeft: 16, marginBottom: 24}}>{t("setting")}</Text>
            <TouchableOpacity style={{
                flexDirection: "row",
                height: 40,
                alignItems: "center",
                paddingHorizontal: 10,
                justifyContent: "space-between",
                marginBottom: 12,
            }}
                onPress={()=>{
                   
                }}
            >

                <Text size="h2">{t("lang")}</Text>
            </TouchableOpacity>
            </SafeAreaView>
        </Layout>
    )
}

export default Setting

const styles = StyleSheet.create({})
