import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const colorsPalette = {
  red: "#B91817",
  white: "#FFFFFF",
  black: "#000000",
  placeholder: "rgba(0, 0, 0, 0.5)",
  input: "#c4c4c4",
};

const Header = (props) => {
  const [fontsLoaded] = useFonts({
    "Gruppo-Regular": require("../fonts/Gruppo-Regular.ttf"),
  });

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: colorsPalette.red,
    alignItems: "center",
    width: "100%",
    height: 70,
    justifyContent: "center",
  },
  text: {
    color: colorsPalette.white,
    fontSize: 36,
    fontFamily: "Gruppo-Regular",
  },
});

export default Header;
