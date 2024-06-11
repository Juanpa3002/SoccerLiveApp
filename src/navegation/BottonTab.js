import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import PokemonList from '../screens/PokemonList';
import HomeScreen from '../screens/HomeScreen';
import PokemonAxios from '../screens/PokemonAxios';

export default function BottomTab() {
  const [selectedScreen, setSelectedScreen] = useState("Inicio");

  const renderScreen = () => {
    switch (selectedScreen) {
      case "Inicio":
        return <HomeScreen />;
      case "PokemonAxios":
        return <PokemonAxios />;
      case "PokemonList":
        return <PokemonList />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.screenContainer}>
        {renderScreen()}
      </View>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.icon} onPress={() => setSelectedScreen("Inicio")}>
          <Ionicons name="home" color={selectedScreen === "Inicio" ? '#fff' : 'white'} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => setSelectedScreen("PokemonAxios")}>
          <Ionicons name="list" color={selectedScreen === "PokemonAxios" ? '#fff' : 'white'} size={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => setSelectedScreen("PokemonList")}>
          <Ionicons name="list" color={selectedScreen === "PokemonList" ? '#fff' : 'white'} size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Color de fondo del contenedor principal
  },
  screenContainer: {
    flex: 1,
    marginTop: 30, // Espacio para evitar la superposición con la barra de iconos
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'transparent', // Color de fondo de la barra de iconos
    paddingVertical: 10,
    position: 'absolute', // Fija la barra de iconos en la parte inferior de la pantalla
    bottom: 0,
    width: '100%', // Ancho completo
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
});
