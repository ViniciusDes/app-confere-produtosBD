import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../services/api';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const product = () => {
  const [codProduct, setCodProduct] = useState('');

  return (
    <View style={styles.contentRegisterProduct}>
      <View style={styles.registerProduct}>
        <Input
          containerStyle={{ width: '100%' }}
          inputContainerStyle={{}}
          inputStyle={{}}
          // label="Pesquisar produto"
          placeholder="Código"
          style={styles.input}
          value={codProduct}
          onChangeText={text => {
            setCodProduct(text);
          }}
        />

        <Input
          containerStyle={{ width: '100%' }}
          inputContainerStyle={{}}
          inputStyle={{}}
          // label="Pesquisar produto"
          placeholder="Descrição"
          style={styles.input}
          value={codProduct}
          onChangeText={text => {
            setCodProduct(text);
          }}
        />
        <Input
          containerStyle={{ width: '100%' }}
          inputContainerStyle={{}}
          inputStyle={{}}
          // label="Pesquisar produto"
          placeholder="Estoque"
          style={styles.input}
          value={codProduct}
          onChangeText={text => {
            setCodProduct(text);
          }}
        />
        <Input
          containerStyle={{ width: '100%' }}
          inputContainerStyle={{}}
          inputStyle={{}}
          // label="Pesquisar produto"
          placeholder="Preço"
          style={styles.input}
          value={codProduct}
          onChangeText={text => {
            setCodProduct(text);
          }}
        />
        <RectButton style={[styles.button]} onPress={() => {}}>
          <Text>Salvar</Text>
          <Feather name="save" size={30} style={styles.iconRight} />
        </RectButton>
      </View>
    </View>
  );
};

var styles = StyleSheet.create({
  contentRegisterProduct: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6D6DBA',

    justifyContent: 'center',
    alignItems: 'center',
  },
  registerProduct: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '80%',
    backgroundColor: '#6D6DBA',
    borderRadius: 5,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  input: {
    marginTop: 4,
    height: 56,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#040000',
  },
  button: {
    backgroundColor: '#fff',
    height: 56,
    width: '94%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
  },
  iconRight: {
    position: 'absolute',
    right: 20,
  },
});
export default product;
