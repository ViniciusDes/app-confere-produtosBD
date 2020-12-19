import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./pages/Login"
import Main from "./pages/Main"

const { Navigator, Screen } = createStackNavigator();


export default function Routes(){

  return(
    <NavigationContainer>
      <Navigator screenOptions={{headerShown: false }}>
        <Screen 
            name="main"
            component={Main}
        />

        <Screen 
            name="login"
            component={Login}
        />

        
      </Navigator>
    </NavigationContainer>
  )
}