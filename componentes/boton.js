import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Contador from './contador';

const Botones = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(aumentar => aumentar + 1);
  };

  const reiniciar = () => {
    setContador(0);
  };

  return (
    <View style={styles.container}>
      <Contador valor={contador} />
      <TouchableOpacity style={[styles.button, styles.colorbutton]} onPress={incrementar}>
        <Text style={styles.buttonText}>Click</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={reiniciar}>
        <Text style={styles.buttonText}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  colorbutton: {
    backgroundColor: 'blue',
  },
  button: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Botones;