import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [resultado, setResultado] = React.useState(0);

  const incrementar = () => {
    setResultado(resultado + 1);
  };

  const decrementar = () => {
    if(resultado>0){
      setResultado(resultado - 1);
    }else{
      alert("El numero no se puede decrementar más :V ")
    }
  };



  return (
    <View style={styles.container}>
      <View style={styles.cont}>
      <Text style={styles.texto}>{resultado}</Text>
        <View style={styles.buttonContainer}>
          <Button title="incrementar" onPress={incrementar} />
          <Button title="decrementa" onPress={decrementar} />

        </View>
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
  buttonContainer: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
});
