import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const GridList = (props: any) => {
  const navigation = useNavigation();
  var data = {};
  function navigateToProduct(data: any) {
    navigation.navigate('product', data);
  }

  var countElementList = 2;
  return (
    <View>
      <View style={styles.contentHeaderTable}>
        <Text style={styles.itemCod}>CÓDIGO</Text>
        <Text style={styles.itemDescHeader}>DESCRIÇÃO</Text>
        <Text style={styles.itemHeader}>PREÇO</Text>
        <Text style={styles.itemHeader}>ESTOQUE</Text>
      </View>

      <FlatList
        data={props.items}
        keyExtractor={(item, index) => index.toString()}
        key={Math.random()}
        renderItem={({ item }) => {
          {
            countElementList += 1;
          }
          return (
            <View
              style={
                countElementList % 2 == 0
                  ? styles.listWrapper
                  : styles.listWrapper2
              }
            >
              <Text
                style={styles.itemCod}
                onPress={() => {
                  navigateToProduct(item);
                }}
              >
                {item.mat_001}
              </Text>

              <Text
                numberOfLines={1}
                style={styles.itemDesc}
                onPress={() => {
                  navigateToProduct(item);
                }}
              >
                {item.mat_003}
              </Text>
              <Text
                style={styles.item}
                onPress={() => {
                  navigateToProduct(item);
                }}
              >
                {item.mat_008}
              </Text>
              <Text
                style={styles.item}
                onPress={() => {
                  navigateToProduct(item);
                }}
              >
                {item.mat_016}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

var styles = StyleSheet.create({
  item: {
    color: '#000000',
    margin: 5,
    width: '15%',
    // flex: 1,
    // textAlign: 'center',
    paddingHorizontal: 0.2,
    fontSize: 14,
  },
  itemHeader: {
    color: '#000000',
    margin: 5,
    paddingHorizontal: 0.2,
    fontSize: 14,
  },
  grid: {
    // marginBottom: 32,
    // // marginTop: 16,
    // alignItems: 'center',
  },
  itemCod: {
    color: '#000000',
    width: '20%',
    margin: 5,
    paddingHorizontal: 0.2,
    fontSize: 14,
  },
  itemDescHeader: {
    color: '#000000',
    width: '40%',
    paddingHorizontal: 0.2,
    margin: 5,
    flexDirection: 'row',
    fontSize: 14,
  },
  itemDesc: {
    color: '#000000',
    width: '40%',
    paddingHorizontal: 0.2,
    margin: 5,
    flexDirection: 'row',
    fontSize: 14,
    lineHeight: 30,

    // flexWrap: 'wrap',
    // flexShrink: 1,
  },
  listWrapper: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    flexShrink: 1,
  },
  listWrapper2: {
    backgroundColor: '#E5E5E5',
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    flexShrink: 1,
  },
  contentHeaderTable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GridList;
