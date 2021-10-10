import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TStatusSound } from ".";
import Icon from "../../components/Icon";

interface Props {
  playSound: () => void;
  pauseSound: () => void;
  statusSound: TStatusSound;
  nextSound: () => void;
  prevSound: () => void;
}

const ControlPlay = ({
  playSound,
  pauseSound,
  statusSound,
  nextSound,
  prevSound,
}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={prevSound}>
        <Icon name="play-skip-back-outline" size={32} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginHorizontal: 16 }}
        onPress={() => {
          if (statusSound === "loading") return;
          if (statusSound === "playing") {
            pauseSound();
          } else {
            playSound();
          }
        }}
      >
        {statusSound === "loading" ? (
          <ActivityIndicator />
        ) : statusSound === "playing" ? (
          <Icon name="pause" size={32} />
        ) : (
          <Icon name="play" size={32} />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={nextSound}>
        <Icon name="play-skip-forward-outline" size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default ControlPlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
