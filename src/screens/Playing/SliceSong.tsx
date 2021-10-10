import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, Animated, Dimensions, FlatList } from 'react-native'
import { RootStackParamList } from '../../navigation/RootStack';
import ItemSong from './ItemSong';

const { width } = Dimensions.get("window");
const spacing = 60;
const widthImg = width-120;

export interface IRefSliceSong{
  scrollToIndex: (index:number)=>void;
}

interface Props{
  onChangeSound: (index:number)=>void;
}

const SliceSong = React.forwardRef<IRefSliceSong,Props>((props,ref) => {
    const scrollX = React.useRef(new Animated.Value(0)).current;
    const route = useRoute<RouteProp<RootStackParamList, "Playing">>(); 
    const refFlatlist = React.useRef<FlatList>(null)

    const scrollToIndex = React.useCallback((index:number)=>{
      refFlatlist.current?.scrollToIndex({index, viewPosition:0.5})
    },[])

    const onMomentumScrollEnd = React.useCallback(({nativeEvent})=>{
      let index = nativeEvent.contentOffset.x / widthImg
      props.onChangeSound(index);
    },[])

    React.useImperativeHandle(ref,()=>{
      return {
        scrollToIndex:scrollToIndex,
      }
    })

  const renderItem = React.useCallback(({item,index})=>{
    return (
      <ItemSong 
        name={item.name}
        author={item.author}
        uri={item.id}
        id={item.id}
        source={item.source}
        scrollX={scrollX }
        index={index}
      />
    ); 
  },[])
    return (
        <View>
        <Animated.FlatList
          horizontal
          data={route.params.listSong}
          pagingEnabled //scroll het trang
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          decelerationRate="fast"
          snapToInterval={widthImg}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0 }}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {
                  contentOffset: {
                    x: scrollX,
                  },
                },
              },
            ],
            { useNativeDriver: true }
          )}
          contentContainerStyle={{
            paddingHorizontal: spacing,
          }}
          ref={refFlatlist}
          onMomentumScrollEnd={onMomentumScrollEnd}
        />
      </View>
    )
})

export default SliceSong

const styles = StyleSheet.create({})
