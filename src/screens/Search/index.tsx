import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Layout from "../../components/Layout";
import Text from "../../components/Text";
import Colors from "../../config/Colors";
import { ISong } from "../../data/likeSong";
import { RootStackParamList } from "../../navigation/RootStack";
import _ from "lodash";
import urls from "../../config/Api";

const Search = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const [data, setData] = React.useState<ISong[]>([]);
  const [key, setKey] = React.useState<string>("");
  const getSongByKey = React.useCallback(
    _.debounce((text: string) => {
      fetch(urls.songByKey(text))
        .then((response) => response.json())
        .then((songs) => {
          setData(songs);
        })
        .catch((error) => {
          console.error(error);
        });
    }, 500),
    [key]
  );
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView>
        <View style={styles.header}>
          <View style={styles.containerInput}>
            <TextInput
              placeholder="Search"
              value={key}
              onChangeText={(text: string) => {
                setKey(text);
                getSongByKey(text);
              }}
            />
          </View>
          <Pressable
            style={{ height: "100%", justifyContent: "center" }}
            onPress={goBack}
          >
            <Text size="h3">Cancel</Text>
          </Pressable>
        </View>
        <ScrollView>
          {data.map((item: ISong, index) => {
            return (
              <View
                style={{
                  width: "100%",
                  height: 50,
                  marginVertical: 8,
                  backgroundColor: "red",
                  flexDirection: "row",
                  paddingLeft: 16,
                }}
                key={index}
              >
                <Image
                  source={{ uri: item.source }}
                  style={{ width: 50, height: 50 }}
                  borderRadius={4}
                />
                <View style={{
                  paddingLeft: 12,
                  justifyContent: 'center',
                }}>
                  <Text size="h2">{item.name}</Text>
                  <Text size="h4">{item.author}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  header: {
    height: 56,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: Colors.color_basic_4_6,
  },
  containerInput: {
    backgroundColor: Colors.color_basic_1,
    flex: 1,
    height: 40,
    marginRight: 8,
    borderRadius: 4,
    justifyContent: "center",
    paddingLeft: 8,
  },
});
