import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {

    const [peso, setPeso] = React.useState(null);
    const [altura, setAltura] = React.useState(null);
    const [result, setResult] = React.useState(null);
  
    const calculateIMC = () => {

      if ( peso && altura && altura !== 0) {
        const imc = peso / (altura * altura);

      } else {
        setResult(null);
      }
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setPeso(text)}
          value={peso}
          placeholder="Peso (kg)"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setAltura(text)}
          value={altura}
          placeholder="Altura (m)"
        />
        <Button title="Calcular IMC" onPress={calculateIMC} />
        {result !== null && <Text style={styles.result}>Tu IMC es: {result}</Text>}
        <StatusBar style="auto" />
      </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
