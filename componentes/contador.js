import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Contador = ({ valor }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cuadro}>
        <Text style={styles.texto}>{valor}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cuadro: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Contador;