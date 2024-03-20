import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [resultado, setResultado] = React.useState(null);

  const sumar = () => {
    if (num1 && num2) {
      setResultado(parseFloat(num1) + parseFloat(num2));
    } else {
      setResultado(null);
    }
  };

  const restar = () => {
    if (num1 && num2) {
      setResultado(parseFloat(num1) - parseFloat(num2));
    } else {
      setResultado(null);
    }
  };

  const multiplicar = () => {
    if (num1 && num2) {
      setResultado(parseFloat(num1) * parseFloat(num2));
    } else {
      setResultado(null);
    }
  };

  const dividir = () => {
    if (num1 && num2 && num2 !== 0) {
      setResultado(parseFloat(num1) / parseFloat(num2));
    } else {
      setResultado(null);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>calculadora</Text>
      <View style={styles.cont}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setNum1(text)}
          value={num1}
          placeholder="Número 1"
        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => setNum2(text)}
          value={num2}
          placeholder="Número 2"
        />
        <View style={styles.buttonContainer}>
          <Button title="Sumar" onPress={sumar} />
          <Button title="Restar" onPress={restar} />
          <Button title="Multiplicar" onPress={multiplicar} />
          <Button title="Dividir" onPress={dividir} />
        </View>
        {resultado !== null && <Text>Resultado: {resultado}</Text>}
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cont: {
    flex: 0.4,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
    borderRadius: 5,
  },
  texto: {
    textAlign: 'center',
    fontSize: 35,
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  buttonContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 10,
  },
});
