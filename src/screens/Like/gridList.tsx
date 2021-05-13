import React from 'react'
import { Dimensions, FlatList, StyleSheet, View } from 'react-native'
import ItemList from '../Home/ItemList'
import Text from '../../components/Text'

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
    {
        id: "3",
        title: "Moment Apart",
        name: "ODESZA",
        source: require("../../asset/img/img2.png"),
    },
    {
        id: "4",
        title: "Monster Go Bump",
        name: "ERIKA RECINOS",
        source: require("../../asset/img/img1.png"),
    },
    {
        id: "5",
        title: "Moment Apart",
        name: "ODESZA",
        source: require("../../asset/img/img2.png"),
    },
    {
        id: "6",
        title: "Believer",
        name: "IMAGINE DRAGON",
        source: require("../../asset/img/img3.png"),
    },
    {
        id: "7",
        title: "Moment Apart",
        name: "ODESZA",
        source: require("../../asset/img/img2.png"),
    },
]
interface Props {
    title: string;
}

const {width} = Dimensions.get('window');
const itemWidth = (width) / 2;

const GridList = ({title}:Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.txtText} font="Bold">{title}</Text>
            <View style={{display: "flex"}}>
            <FlatList 
                style={styles.list}
                data={data}
                horizontal={false}
                numColumns={2}
                renderItem={({item, index}) => {
                return <ItemList
                key={index}
                title={item.title}
                source={item.source}
                name={item.name}
                />
                }}
            />
            </View>
        </View>
    )
}

export default GridList

const styles = StyleSheet.create({
    container: {
        marginTop:24,
    },
    txtText: {
        marginBottom:20,
        paddingLeft:16,
    },
    list: {
        
    }
})
