import React from 'react';
import { StyleSheet, Text, FlatList, View } from 'react-native';

const GridList = (props: any) => {
  return (
    <FlatList
      data={props.items}
      keyExtractor={(item, index) => index.toString()}
      key={Math.random()}
      renderItem={({ item }) => (
        <View style={styles.listWrapper}>
          <Text style={styles.itemCod}>{item.mat_001}</Text>
          <Text style={styles.itemDesc}>{item.mat_003}</Text>
          <Text style={styles.item}>{item.mat_008}</Text>
        </View>
      )}
    />
  );
};

var styles = StyleSheet.create({
  item: {
    color: '#000000',
    margin: 5,
    flex: 1,
    paddingHorizontal: 0.2,
  },
  grid: {
    marginBottom: 32,
    marginTop: 16,
    alignItems: 'center',
  },
  itemCod: {
    color: '#000000',
    width: '20%',
    margin: 5,
    paddingHorizontal: 0.2,
  },
  itemDesc: {
    color: '#000000',
    width: '60%',
    paddingHorizontal: 0.2,
    margin: 5,
  },
  listWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomWidth: 0.5,
  },
});

export default GridList;
