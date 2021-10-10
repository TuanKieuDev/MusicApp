import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../components/Icon'

const ControlShuffle = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon name="volume-high-outline"/>
            </TouchableOpacity>
            <View style={{
                flexDirection: "row"
            }}>
              <TouchableOpacity style={{marginRight:12}}>
                <Icon name="repeat"/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Icon name="shuffle"/>
              </TouchableOpacity>
            </View>
        </View>
    )
}

export default ControlShuffle

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        marginTop: 16,
    }
})
