import { StatusBar } from 'expo-status-bar';
import React, {useEffect} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function App() {

  const navigation = useNavigation();
 
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('login')
    }, 1000);
  }, [])
  return (
    <View style={styles.container}>
      <Image  
          style={styles.logo} 
          source={require('../images/Logo.jpeg.jpg')} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282841',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 500,
    height: 500,
  }
});
