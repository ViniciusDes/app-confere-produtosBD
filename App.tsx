import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import Routes from "./src/routes"
export default function App() {
  
  return (
    <Routes />
  );
}
 