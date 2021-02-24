import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './pages/Login';
import Main from './pages/Main';
import Menu from './pages/Menu';
import ListProdutos from './pages/ListProdutos';
import product from './pages/Product';
import RegisterProducts from './pages/RegisterProduct';
const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="main" component={Main} />
        <Screen name="login" component={Login} />
        <Screen name="menu" component={Menu} />
        <Screen name="listproducts" component={ListProdutos} />
        <Screen name="product" component={product} />
        <Screen name="registerProduct" component={RegisterProducts} />
      </Navigator>
    </NavigationContainer>
  );
}
