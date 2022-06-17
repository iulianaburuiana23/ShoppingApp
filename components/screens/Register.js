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
import { useAuth } from '../../AuthContext.js';
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const[_, setUser]=useAuth();

  const handleRegister =() =>{
    setIsLoading(true);
    axios({
      method:"POST",
      url:"https://identitytoolkit.googleapis.com/v1/accounts:signUp",
      params:{
        key:"AIzaSyAp_zWvn1iGdA4_TyggVGnr58n5jDPcIu0",
      },
      data:{
        email,
        password,
      },
    })
    .then((res)=>{
      axios({
        method:"POST",
        url:"https://identitytoolkit.googleapis.com/v1/accounts:update",
        params:{
          key:"AIzaSyAp_zWvn1iGdA4_TyggVGnr58n5jDPcIu0",
        },
        data:{
          idToken:res.data.idToken,
          displayName:name,
        
        },

      }).then((res)=>{
        //console.log(res);
        setUser({...res.data, idToken: res.data.idToken});
      }).catch((e)=>
        {
          console.log(e, "update profile error");
          alert(e.message);
        })
        .finally(()=>{
          setIsLoading(false);
        });

      console.log(res.data);
    })
    .catch((e)=>{
      console.warn(e);
          alert(e.message);
    }).finally(()=>{
      setIsLoading(false);
    });

  };
   const navigation =useNavigation();
  const handleLogin =() =>{
    navigation.navigate("Login");
    
  };

  return (
    <View style={styles.container}>
      <Spinner visible={isLoading} />
      <View style={styles.wrapper}>
        <TextInput
          style={styles.input}
          value={name}
          placeholder="Enter name"
          onChangeText={text => setName(text)}
        />

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
          title="Register"
          onPress={
            handleRegister}
            loading={isLoading}
        />

        <View style={{flexDirection: 'row', marginTop: 20}}>
          <Text>Already have an account? </Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.link}>Login</Text>
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

export default Register;