import React from 'react'
import { ScrollView, StyleSheet, View, Image } from 'react-native'
import Text from '../../components/Text'
import ItemList from './ItemList'

const data = [
    {
        id: "0",
        title: "Monster Go Bump",
        name: "ERIKA RECINOS",
        source: require("../../asset/img/img1.png"),
    },
    {
        id: "1",
        title: "Moment Apart",
        name: "ODESZA",
        source: require("../../asset/img/img2.png"),
    },
    {
        id: "2",
        title: "Believer",
        name: "IMAGINE DRAGON",
        source: require("../../asset/img/img3.png"),
    },
]

interface Props {
    title: string;
}

const RowList = ({title}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtText} font="Bold">{title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {data.map((item,index)=>{
                    return(
                        <ItemList
                            key={index}
                            title={item.title}
                            source={item.source}
                            name={item.name}
                        />
                    );
                })}
            </ScrollView>
        </View>
        
    )
}

export default RowList

const styles = StyleSheet.create({
    container: {
        marginTop: 24,
    },
    txtText: {
        paddingLeft:16,
        marginBottom: 20,
    },

})
