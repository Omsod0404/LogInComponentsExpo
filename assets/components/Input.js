import React from "react";
import { TextInput, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const colorsPalette = {
  red: "#B91817",
  white: "#FFFFFF",
  black: "#000000",
  placeholder: "rgba(0, 0, 0, 0.5)",
  input: "#c4c4c4",
};

const Input = (props) => {
    const [fontsLoaded] = useFonts({
        "Gruppo-Regular": require("../fonts/Gruppo-Regular.ttf"),
    });
    
    return (
        <TextInput
            placeholder={props.placeholder}
            value={props.value}
            keyboardType={props.keyboardType}
            maxLength={props.maxLength}
            multiline={props.multiline}
            onChangeText={props.onChangeText}
            secureTextEntry={props.secureTextEntry}
            style={styles.input}
            placeholderTextColor={colorsPalette.placeholder}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        backgroundColor: colorsPalette.input,
        width: '100%',
        height: 50,
        borderRadius: 3,
        marginBottom: 20,
        fontFamily: "Gruppo-Regular",
        fontSize: 24,
        paddingLeft: 10,
    },
});

export default Input;