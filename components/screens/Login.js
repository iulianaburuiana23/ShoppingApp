import React, {useContext, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../AuthContext.js';
import axios from "axios";


const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const navigation =useNavigation();
  const handleRegister =() =>{
    navigation.navigate("Register");
  };
  const[_, setUser]=useAuth();
 
  const handleLogin =() =>{
    setIsLoading(true);
    axios({
      method:"POST",
      url:"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
      params:{
        key:"AIzaSyAp_zWvn1iGdA4_TyggVGnr58n5jDPcIu0",
      },
      data:{
        email,
        password,
      },
    }).then((res)=> {
      setUser(res.data)
      
      })
      .catch((e)=>{})
      .finally(()=>{
        setIsLoading(false);
        });
        
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
       

        <TextInput
          style={styles.input}
          value={email}
          placeholder="Enter email"
          onChangeText={text => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          value={password}
          placeholder="Enter password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />

        <Button
          title="Login"
          onPress={
            handleLogin}
            loading={isLoading}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Register instead </Text>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.link}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper: {
    width: '80%',
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  link: {
    color: 'blue',
  },
});

export default Login;