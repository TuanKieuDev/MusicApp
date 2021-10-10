import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Header from "../../components/Header";
import Layout from "../../components/Layout";
import { useLocale } from "../../config/Localize";
import { RootStackParamList } from "../../navigation/RootStack";
import RowList from "./RowList";

const Home = () => {
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const {t} = useLocale()
  return (
    <Layout style={{ flex: 1 }}>
      <Header
        title=""
        btnLeft={{ icon: "menu", onPress: () => {} }}
        btnRight={{
          icon: "search",
          onPress: () => {
            navigate("Search");
          },
        }}
      />
      <ScrollView>
        <RowList title={t("recommendForYou")} />
        <RowList title={"My Playlist"} />
      </ScrollView>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({});
