import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, Text } from 'react-native';
import Botones from './componentes/boton';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.viewlogo}>
        <Image style={styles.logo} source={require('./imagenes/logofreeCode.png')} />
      </View>
      
      <View style={styles.viewcontador}>
        <Botones />
      </View>
      <StatusBar style="auto" />
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Cristhian Vargas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  viewlogo: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'flex-end',
    alignItems: 'center', 
  },
  logo: {
    height: 40,
    width: '100%',
    marginBottom: 10,
    resizeMode: 'contain', 
  },
  viewcontador: {
    flex: 3,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    backgroundColor: 'black',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: 'white',
  },
});
