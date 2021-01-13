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
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../services/api';
import GridList from '../components/Grid/index';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';

interface ProductsTypes {
  mat_001: number; //codigo
  mat_003: string; //descricao
  mat_008: string; //preco
  mat_016: string; //estoque
}

export default function Menu() {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductsTypes[]>([]);
  const [searchDescProduct, setSearchDescProduct] = useState('');
  const [checked, setChecked] = useState('first');

  useEffect(() => {
    api
      .get(`products/`)
      .then(resp => {
        setProducts(resp.data);
      })
      .catch(err => {
        console.log('erro' + err);
      });
  }, []);

  useEffect(() => {
    if (checked === 'first') {
      const result = api
        .get(`products/search?tipoPesq=0&codProduto=${searchDescProduct}`)
        .then(resp => {
          setProducts(resp.data);
        })
        .catch(err => {
          console.log('erro' + err);
        });
    } else {
      const result = api
        .get(`products/search?tipoPesq=1&descProduto=${searchDescProduct}`)
        .then(resp => {
          setProducts(resp.data);
        })
        .catch(err => {
          console.log('erro' + err);
        });
    }
  }, [searchDescProduct]);

  return (
    <View style={styles.container}>
      <View style={styles.contentRadio}>
        <View style={{ padding: 0, margin: 0 }}>
          <View style={styles.eachRadio}>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
            <Text>Código</Text>
          </View>
          <View style={styles.eachRadio}>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
            <Text>Descrição</Text>
          </View>
        </View>

        <Input
          containerStyle={{ width: '100%' }}
          inputContainerStyle={{}}
          inputStyle={{}}
          // label="Pesquisar produto"
          placeholder="Pesquisar produto"
          style={styles.input}
          value={searchDescProduct}
          onChangeText={text => {
            setSearchDescProduct(text);
          }}
        />
      </View>

      <View style={styles.contentList}>
        <View>
          <GridList items={products} />
        </View>
      </View>

      {/*           
      <RectButton onPress={() => {
          
      }}>
        <Text>click</Text>
      </RectButton> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D6DBA',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'column',
  },
  contentList: {
    width: '100%',
    height: '75%',
    backgroundColor: '#eaeaea',
    paddingTop: 20,
    paddingBottom: 20,
  },
  HeadStyle: {
    height: 50,
    alignContent: 'center',
    backgroundColor: '#ffe0f0',
  },
  TableText: {
    margin: 10,
  },
  input: {
    marginTop: 8,
    height: 56,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#040000',
  },
  eachRadio: {
    flexDirection: 'row',
    alignItems: 'center',

    padding: 0,
    margin: 0,
    // justifyContent: 'flex-start',
  },
  contentRadio: {
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // borderColor: 'red',
    width: '100%',

    flexDirection: 'column',
    alignItems: 'flex-start',
    // justifyContent: 'center',
  },
});
