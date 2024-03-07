import React, {useState} from "react";
import {View, Text, StyleSheet, Alert, SafeAreaView, StatusBar} from "react-native";
import { useFonts } from "expo-font";
import { Header, Button, Input } from "./assets/components/index.js";

const colorsPalette = {
  red: '#B91817',
  white: '#FFFFFF',
  black: '#000000',
  placeholder: 'rgba(0, 0, 0, 0.5)',
  input: '#c4c4c4'
};

const App = () => {
  const [expediente, setExpediente] = useState("");
  const[password, setPassword] = useState("");

  const handdleSubmit = () => {
    expediente.length === 6 
    ? (password.length >= 8
      ? Alert.alert("Datos corectos", `Bienvenido ${expediente}`)
      : Alert.alert("Datos incorrectos", "La contraseña debe tener al menos 8 caracteres"))
    : Alert.alert("Datos incorrectos", "El expediente debe tener 6 dígitos")
  };

  const [fontsLoaded] = useFonts({
    "Gruppo-Regular": require("./assets/fonts/Gruppo-Regular.ttf")
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorsPalette.red} barStyle={'light-content'}/>
      <Header title="Log in"/>
      <View style={styles.subcontainer}>
        <Text style={styles.title}>Bienvenido!</Text>
        <Text style={styles.subtitle}>Expediente:</Text>
        <Input
          placeholder="Ingresa tu expediente aquí"
          value={expediente}
          keyboardType="numeric"
          maxLength={6}
          multiline={false}
          onChangeText={text => setExpediente(text)}
        />
        <Text style={styles.subtitle}> Contraseña:</Text>
        <Input
          placeholder="Ingresa tu contraseña aquí"
          value={password}
          multiline={false}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <Button title="Log in" onPress={handdleSubmit}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: colorsPalette.white,
  },
  subcontainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    alignSelf: "center",
  },
  title: {
    fontSize: 50,
    fontFamily: "Gruppo-Regular",
    marginBottom: 50,
    color: colorsPalette.black,
  },
  subtitle: {
    fontSize: 24,
    fontFamily: "Gruppo-Regular",
    color: colorsPalette.black,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
});

export default App;