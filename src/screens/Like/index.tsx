import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, FlatList, ActivityIndicator } from "react-native";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import urls from "../../config/Api";
import likeSongs, { ISong } from "../../data/likeSong";
import { RootStackParamList } from "../../navigation/RootStack";
import ItemSong from "./ItemSong";
import ListHeader from "./ListHeader";
const Like = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = React.useState<ISong[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [isRefresh, setIsRefresh] = React.useState(false);

  React.useEffect(() => {
    fetch(urls.song)
      .then((response) => response.json())
      .then((songs) => {
        setData(songs)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const goPlaying = React.useCallback(() => {
    navigate("Playing", {
      listSong: data,
    });
  }, [data]);
  const onRefresh = React.useCallback(() => {
    setIsRefresh(true);
    fetch(urls.song)
      .then((response) => response.json())
      .then((songs) => {
        setData(songs)
        setIsRefresh(false)
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const onEndReached = React.useCallback(() => {
    //check
    //setData((prev: ISong[]) => prev.concat(likeSongs));
  }, []);
  const renderItem = React.useCallback(
    ({ item }: { item: ISong }) => {
      return (
        <ItemSong
          name={item.name}
          author={item.author}
          uri={item.uri}
          id={item.id}
          source={item.source}
          onPress={goPlaying}
        />
      );
    },
    [goPlaying]
  );

  if(loading){
    return(
      <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator/>
      </Layout>
    )
  }
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnRight={{ icon: "options-outline", onPress: () => {} }}
      />
      <FlatList
        data={data}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        ListHeaderComponent={ListHeader}
        refreshing={isRefresh}
        onRefresh={onRefresh}
        keyExtractor={(item, index) => index.toString()}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached} //load more data
      />
    </Layout>
  );
};

export default Like;

const styles = StyleSheet.create({});
