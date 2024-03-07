import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const colorsPalette = {
  red: "#B91817",
  white: "#FFFFFF",
  black: "#000000",
  placeholder: "rgba(0, 0, 0, 0.5)",
  input: "#c4c4c4",
};

const Button = (props) => {
  const [fontsLoaded] = useFonts({
    "Gruppo-Regular": require("../fonts/Gruppo-Regular.ttf"),
  });

  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colorsPalette.red,
    width: 170,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginTop: 30,
  },
  text: {
    color: colorsPalette.white,
    fontSize: 24,
    fontFamily: "Gruppo-Regular",
  },
});

export default Button;
