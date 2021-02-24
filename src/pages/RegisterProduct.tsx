import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-paper';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

function RegisterProduct() {
  const [code, setCode] = useState('');
  const [description, setDescription] = useState('');
  const [unity, setUnity] = useState(''); //tipo de unidade medida
  const [price, setPrice] = useState('');
  const [priceCost, setPriceCost] = useState('');
  const [priceWholesale, setWholesal] = useState(''); //preço atacado
  const [stock, setStock] = useState('');
  const [category, setCategory] = useState('');
  const [profitMargin, setProfitMargin] = useState(''); //margem lucro
  const [, setTypeClassification] = useState('');
  const [ncm, setNcm] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.containerDetail}>
        <View style={styles.contentInput}>
          <Input
            labelStyle={{ color: '#fff', fontWeight: '300' }}
            inputContainerStyle={{}}
            label="Codigo"
            placeholder="Código"
            style={styles.input}
            value={code}
            onChangeText={(text: any) => {
              setCode(text);
            }}
          />
        </View>

        <View style={styles.contentInput}>
          <Input
            labelStyle={{ color: '#fff', fontWeight: '300' }}
            inputContainerStyle={{}}
            inputStyle={{}}
            label="Descrição"
            placeholder="Descrição"
            style={styles.input}
            value={description}
            onChangeText={(text: any) => {
              setDescription(text);
            }}
          />
        </View>

        <View style={styles.contentMoreOneInputs}>
          <View style={{ flex: 1 }}>
            <Input
              inputContainerStyle={{}}
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              inputStyle={{}}
              label="Unidade"
              placeholder="Unidade"
              style={styles.input}
              value={unity}
              onChangeText={(text: any) => {
                setUnity(text);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              inputContainerStyle={{}}
              inputStyle={{ flex: 1 }}
              label="Preço"
              placeholder="Preço"
              style={styles.input}
              value={price}
              onChangeText={(text: any) => {
                setPriceCost(text);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              inputStyle={{ flex: 1 }}
              inputContainerStyle={{}}
              label="Prc. de custo"
              placeholder="Preço de custo"
              style={styles.input}
              value={priceCost}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
        </View>

        <View style={styles.contentMoreOneInputs}>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              inputStyle={{ flex: 1 }}
              inputContainerStyle={{}}
              label="Atacado"
              placeholder="Preço atacado"
              style={styles.input}
              value={priceCost}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>

          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              label="Qtd. estoque"
              placeholder="Qtd. estoque"
              style={styles.input}
              value={stock}
              onChangeText={(text: any) => {
                setStock(text);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              label="Categoria"
              placeholder="Categoria"
              style={styles.input}
              value={category}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
        </View>

        <View style={styles.contentMoreOneInputs}>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              label="% de lucro"
              placeholder="Margem de lucro"
              style={styles.input}
              value={profitMargin}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Input
              labelStyle={{ color: '#fff', fontWeight: '300' }}
              label="Classificação fiscal"
              placeholder="Classificação fiscal"
              style={styles.input}
              value={profitMargin}
              onChangeText={(text: any) => {
                setPrice(text);
              }}
            />
          </View>
        </View>

        <View style={styles.contentInput}>
          <Input
            labelStyle={{ color: '#fff', fontWeight: '300' }}
            label="NCM"
            placeholder="NCM"
            style={styles.input}
            value={profitMargin}
            onChangeText={(text: any) => {
              setPrice(text);
            }}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <RectButton
          style={styles.button}
          onPress={() => {
            // handleUpdate();
          }}
        >
          <Text>Cancelar</Text>
          <Feather name="x-circle" size={30} />
        </RectButton>
        <RectButton
          style={styles.button}
          onPress={() => {
            // handleUpdate();
          }}
        >
          <Text>Salvar</Text>
          <Feather name="save" size={30} />
        </RectButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#6D6DBA',

    justifyContent: 'space-evenly',
  },
  containerDetail: {
    width: '100%',
    height: '70%',
    borderColor: '#000',
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,
    // backgroundColor: '#6D6DBA',
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    // height: '100%',
    // width: '100%',
    // maxWidth: '50%',
    borderRadius: 5,
    backgroundColor: '#fff',
    color: '#6D6DBA',
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
  contentInput: {
    display: 'flex',
    height: 50,
    margin: 10,
    padding: 0,
  },
  contentMoreOneInputs: {
    display: 'flex',
    flexDirection: 'row',

    height: 50,
    margin: 10,
    padding: 0,
    // borderColor: 'red',
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    // borderTopWidth: 1,

    // maxWidth: 200,
  },

  footer: {
    marginRight: 10,
    marginLeft: 10,

    alignItems: 'center',
  },
});

export default RegisterProduct;
