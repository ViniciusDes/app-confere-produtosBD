import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

export default function Menu() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState('first');

  return (
    <View style={styles.container}>
      <View style={styles.containerMenu}>
        <RectButton
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('listproducts');
          }}
        >
          <Text>Produtos</Text>
          <Feather name="arrow-right" size={30} style={styles.iconRight} />
        </RectButton>

        <RectButton
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('registerProduct');
          }}
        >
          <Text>Cadastro de produtos</Text>
          <Feather name="arrow-right" size={30} style={styles.iconRight} />
        </RectButton>

        <RectButton
          style={[styles.button]}
          onPress={() => {
            navigation.navigate('listproducts');
          }}
        >
          <Text>Configurações</Text>
          <Feather name="arrow-right" size={30} style={styles.iconRight} />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D6DBA',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#fff',

    height: 56,
    width: '100%',
    paddingLeft: 20,
    margin: 10,

    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
  },
  iconRight: {
    position: 'absolute',
    right: 20,
  },
  containerMenu: {
    width: '80%',
    height: '60%',
    borderRadius: 5,

    backgroundColor: '#6D6DBA',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});
