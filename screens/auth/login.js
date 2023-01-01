import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import {styles} from '../../styles';
import axios from 'axios';
import {backend} from '../../config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';

const Stack = createStackNavigator();

export default function Login({ navigation }) {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
  
  async function onLogin() {
    const userData = {
        username: username,
        password: password
    }
    console.log(userData);
    const config = {
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
        }
    await axios.post(`${backend}/api/auth/signin`, userData, config).then((res) => {
        console.log(res.data);
        if(res.status == 200){
          SecureStore.setItemAsync('user', JSON.stringify(res.data));
          switch((res.data.roles)[0]){
            case 'ROLE_BUYER':
              navigation.navigate('Buyer');
              break;
            case 'ROLE_SELLER':
              navigation.navigate('Seller');
              break;
            case 'ROLE_TUTOR':
              navigation.navigate('Tutor');
              break;
            case 'ROLE_TECH':
              navigation.navigate('Tech');
              break;
            default:
              Alert.alert('Error', 'Invalid role');
          }
        }else{
          Alert.alert("Something went wrong");
        }
        
    }).catch((err) => {
        console.log(err);
        if(err.response.status == 404){
            Alert.alert("Invalid Credentials or User does not exist");
        }else if(err.response.status == 401){
            Alert.alert("Invalid Credentials");
        }else{
            Alert.alert("Something went wrong");
        }
    });
  }


    return (
      <View style={styles.containerLogin}>
        <TextInput
          value={username}
          onChangeText={(e) => setUsername(e)}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={onLogin}
        />
      </View>
    );
}