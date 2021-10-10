import React from 'react'
import { StyleSheet, View } from 'react-native'
import Text from '../../components/Text'
const ListHeader = () => {
    return (
        <Text
              font="Bold"
              size={"h1"}
              style={styles.txtHeader}
            >
              Liked Songs
        </Text>
    )
}

export default ListHeader

const styles = StyleSheet.create({
    txtHeader: {
        marginLeft: 16,
        marginBottom: 16
    }
})
