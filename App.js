import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator}  from "@react-navigation/native-stack";
import Home from './components/screens/Home.js';
import MyCart from './components/screens/MyCart.js';
import ProductInfo from './components/screens/ProductInfo.js';
import LoginScreen from './components/screens/LoginScreen.js';
import RegisterScreen from './components/screens/RegisterScreen.js';
const App=() =>{
  const Stack= createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown:false

      }}>
        <Stack.Screen name="Home" component= {Home}/>
        <Stack.Screen name="MyCart" component= {MyCart}/>
        <Stack.Screen name="ProductInfo" component= {ProductInfo}/>
        <Stack.Screen name="Register" component={RegisterScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;