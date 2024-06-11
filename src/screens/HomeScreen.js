import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'; // Importa Image de react-native

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Nike Phantom GT Elite
      </Text>
      <Image
        source={require('../../assets/zapas.png')} // Ruta de la imagen local
        style={styles.image}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A305E',
    paddingTop: 20,
    paddingHorizontal: 15
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    textTransform: 'uppercase',
    color: '#fff',
  },
  image: {
    width: 310, // Ancho de la imagen en píxeles
    height: 130, // Alto de la imagen en píxeles
    marginTop: 10, // Ajusta el margen superior según sea necesario
    alignSelf: 'center', // Centra la imagen horizontalmente
  },
});

export default HomeScreen;
