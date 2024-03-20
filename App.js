import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);
  
    const sumar = () => {
      if (!isNaN(num1) && !isNaN(num2)) {
        setResultado(parseFloat(num1) + parseFloat(num2));
      } else {
        setResultado(null);
      }
    };
  
    const restar = () => {
      if (!isNaN(num1) && !isNaN(num2)) {
        setResultado(parseFloat(num1) - parseFloat(num2));
      } else {
        setResultado(null);
      }
    };
  
    const multiplicar = () => {
      if (!isNaN(num1) && !isNaN(num2)) {
        setResultado(parseFloat(num1) * parseFloat(num2));
      } else {
        setResultado(null);
      }
    };
  
    const dividir = () => {
      if (!isNaN(num1) && !isNaN(num2) && parseFloat(num2) !== 0) {
        setResultado(parseFloat(num1) / parseFloat(num2));
      } else {
        setResultado(null);
      }
    };
  
    return (
      <View style={styles.container}>
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
      
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 10,
  },
});