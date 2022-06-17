import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import{createNativeStackNavigator}  from "@react-navigation/native-stack";
import Home from './components/screens/Home.js';
import MyCart from './components/screens/MyCart.js';
import ProductInfo from './components/screens/ProductInfo.js';
import Login from './components/screens/Login.js';
import Register from './components/screens/Register.js';
import AuthProvider, {useAuth} from './AuthContext.js';

  const Stack= createNativeStackNavigator();

  const Navigator=()=>{

    const [user]=useAuth()
    if(!user){

      return (
        <Stack.Navigator  screenOptions={{
          headerShown:false
  
        }}>
       <Stack.Screen name="Register" component= {Register}/>
        <Stack.Screen name="Login" component= {Login}/>
        </Stack.Navigator>
      );
    }
    return(
    <Stack.Navigator>
        <Stack.Screen name="Home" component= {Home}/> 
         <Stack.Screen name="MyCart" component= {MyCart}/>
        <Stack.Screen name="ProductInfo" component= {ProductInfo}/>
       
      </Stack.Navigator>
    );

  };
  const App =()=>{

  return (
    <NavigationContainer>
      <AuthProvider>
      <Navigator/>
      </AuthProvider>
    </NavigationContainer>
  );
  };


export default App;