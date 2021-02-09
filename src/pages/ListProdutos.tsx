import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import api from '../services/api';
import GridList from '../components/Grid/index';
import { Sae } from 'react-native-textinput-effects';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { Input } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import Scanner from '../components/Scanner/index';

interface ProductsTypes {
  mat_001: number; //codigo
  mat_003: string; //descricao
  mat_008: string; //preco
  mat_016: string; //estoque
  Valor_atacado: string;
  mat_012: string; //preco custo
  mat_014: string; //estoque minimo
}

export default function Menu(props: any) {
  const navigation = useNavigation();
  const [products, setProducts] = useState<ProductsTypes[]>([]);
  const [searchDescProduct, setSearchDescProduct] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState('first');

  // console.log(props.params);
  function handleAllProducts() {
    api
      .get(`products/`)
      .then(resp => {
        setProducts(resp.data);
        console.log(resp.data);
      })
      .catch(err => {
        console.log('erro' + err);
      });
  }
  useEffect(() => {
    handleAllProducts();
  }, []);

  useEffect(() => {
    if (checked === 'first') {
      if (searchDescProduct == '') {
        handleAllProducts();
      }
      const result = api
        .get(`products/search?tipoPesq=0&codProduto=${searchDescProduct}`)
        .then(resp => {
          setProducts(resp.data);
        })
        .catch(err => {
          console.log('erro' + err);
        });
    } else {
      if (searchDescProduct == '') {
        handleAllProducts();
      }
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

  const onCodeScanned = (data: string) => {
    // alert(data);
    // console.log(data);
    setModalVisible(false);
    // setSearchDescProduct(data);

    api
      .get(`/products/search?tipoPesq=0&codProduto=${data}`)
      .then(product => {
        console.log(product.data[0]);
        navigation.navigate('product', product.data[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <View style={styles.container}>
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modal}>
          <Scanner onCodeScanned={onCodeScanned} />
        </View>
      </Modal>

      <View style={styles.contentHeader}>
        <View style={styles.contentRadio}>
          <RectButton
            style={styles.button}
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <Text>Ler código de barras</Text>
            <Feather name="camera" size={30} />
          </RectButton>
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
          <GridList items={products} handle={handleAllProducts} />
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
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  contentHeader: {
    justifyContent: 'center',
    width: '100%',
    height: '20%',
    // margin: 10,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // borderColor: 'red',
  },
  contentList: {
    width: '100%',
    height: '80%',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 20,

    position: 'absolute',
    bottom: 0,
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
    height: 45,
    width: 100,
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#040000',
  },
  eachRadio: {
    flexDirection: 'row',
    alignItems: 'center',

    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    padding: 0,
    margin: 0,
    // justifyContent: 'flex-start',
  },
  contentRadio: {
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // alignItems: 'flex-start',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    backgroundColor: '#000',
  },
  button: {
    backgroundColor: '#fff',
    height: 40,
    flex: 1,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    // paddingLeft: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',

    position: 'absolute',
    top: 0,
    right: 10,
  },
});
