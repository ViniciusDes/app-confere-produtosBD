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
import AwesomeAlert from 'react-native-awesome-alerts';

interface ProductsTypes {
  mat_001: number; //codigo
  mat_003: string; //descricao
  mat_008: string; //preco
  mat_016: string; //estoque
}

const product = (props: any) => {
  // console.log(props.route.params);
  const [codigo, setCodigo] = useState('');
  const [description, setDescription] = useState('');
  const [countStock, setCountStock] = useState('');
  const [price, setPrice] = useState('');
  const [priceCost, setPriceCost] = useState('');
  const [wholesalePrice, setWholesalePrice] = useState('');
  const [countStockMin, setCountStockMin] = useState('');
  const [messageAlert, setMessageAlert] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const navigate = useNavigation();

  function cleanInputs() {
    setCodigo('');
    setDescription('');
    setCountStock('');
    setPrice('');
  }
  useEffect(() => {
    // alert('');
    const data = props.route.params;
    // console.log(data);
    setCodigo(data.mat_001.toString());
    setDescription(data.mat_003.toString());
    setCountStock(data.mat_016.toString());
    setPrice(data.mat_008.toString());
    setPriceCost(data.mat_012.toString());
    setWholesalePrice(data.valor_atacado.toString());
    setCountStockMin(data.mat_014.toString());
    console.log(data);
  }, [props.route.params]);
  const a = 1222;
  async function handleUpdate() {
    const data = {
      codigo: codigo,
      description: description,
      countStock: countStock,
      price: price,
    };

    const res = await api.put('/product/update', data);
    console.log(res.status);
    res.status == 200
      ? setMessageAlert('Sucesso ao editar produto!')
      : setMessageAlert('Falha ao editar produto, verifique!');
    setShowAlert(true);
    cleanInputs();
  }
  function navigateToListProduct(handle: any) {
    navigate.navigate('listproducts', handle);
  }
  return (
    <View style={styles.contentRegisterProduct}>
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Atualização"
        message={messageAlert}
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showConfirmButton={true}
        confirmText="OK"
        confirmButtonColor="#6D6DBA"
        confirmButtonStyle={{
          width: '150%',
          alignItems: 'center',
          alignSelf: 'center',
        }}
        onConfirmPressed={() => {
          navigateToListProduct(a);
        }}
      />

      <View style={styles.registerProduct}>
        <View style={styles.contentEachInput}>
          <Text style={styles.text}>Código</Text>
          <Input
            containerStyle={{ width: '100%' }}
            inputContainerStyle={{}}
            inputStyle={{}}
            // label="Pesquisar produto"
            placeholder="Código"
            style={styles.input}
            value={codigo}
            onChangeText={(text: any) => {
              setCodigo(text);
            }}
          />
        </View>

        <View style={styles.contentEachInput}>
          <Text style={styles.text}>Descrição</Text>
          <Input
            containerStyle={{ width: '100%' }}
            inputContainerStyle={{}}
            inputStyle={{}}
            // label="Pesquisar produto"
            placeholder="Descrição"
            style={styles.input}
            value={description}
            onChangeText={(text: any) => {
              setDescription(text);
            }}
          />
        </View>

        <View style={styles.contentInputsPrice}>
          <View
            style={{
              width: '50%',
            }}
          >
            <Text style={styles.text}>Quantidade estoque</Text>
            <Input
              containerStyle={{ width: '100%' }}
              inputContainerStyle={{}}
              inputStyle={{}}
              // label="Pesquisar produto"
              placeholder="Estoque"
              style={styles.input}
              value={countStock}
              onChangeText={(text: any) => {
                setCountStock(text);
              }}
            />
          </View>
          <View
            style={{
              width: '50%',
            }}
          >
            <Text style={styles.text}>Preço de venda</Text>
            <Input
              containerStyle={{ width: '100%' }}
              inputContainerStyle={{}}
              inputStyle={{}}
              // label="Pesquisar produto"
              placeholder="Preço"
              style={styles.input}
              value={price}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
        </View>
        <View style={styles.contentInputsPrice}>
          <View
            style={{
              width: '50%',
            }}
          >
            <Text style={styles.text}>Preço atacado</Text>
            <Input
              containerStyle={{ width: '100%' }}
              inputContainerStyle={{}}
              inputStyle={{}}
              // label="Pesquisar produto"
              placeholder="Preço"
              style={styles.input}
              value={wholesalePrice}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>

          <View
            style={{
              width: '50%',
            }}
          >
            <Text style={styles.text}>Preço de custo</Text>
            <Input
              containerStyle={{ width: '100%' }}
              inputContainerStyle={{}}
              inputStyle={{}}
              // label="Pesquisar produto"
              placeholder="Preço"
              style={styles.input}
              value={priceCost}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
        </View>

        <RectButton
          style={[styles.button]}
          onPress={() => {
            handleUpdate();
          }}
        >
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
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '80%',
    backgroundColor: '#6D6DBA',
  },
  input: {
    marginTop: 4,
    height: 45,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#040000',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#fff',
    height: 56,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5,
  },
  iconRight: {
    position: 'absolute',
    right: 20,
  },
  contentEachInput: {
    margin: 5,
    width: '100%',
    borderRadius: 5,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
  },
  contentInputsPrice: {
    margin: 5,
    width: '100%',
    borderRadius: 5,
    borderColor: '#fff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  text: {
    color: '#FFF',
    paddingLeft: 7,
  },
});
export default product;
