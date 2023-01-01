import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, ToastAndroid, Text, Button, View, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'

import {styles} from '../../../../../styles'
import axios from 'axios';
const bg = require('../../../../../images/bg.png');
import {backend} from '../../../../../config';

export default function NewDelivery({ navigation }){
    const [Address, setAdress] = React.useState('');
    const [User, setUser] = React.useState('');

    const createService = async () => {
        const AddressData = {
            adress: Address,
            uid: User.Id,
        };
        console.log(AddressData);
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }

        await axios.post(`${backend}/api/address`, AddressData, config).then((response) => {
            console.log(response.data);
            ToastAndroid.show('Address created successfully!', ToastAndroid.SHORT);
            navigation.navigate('Profile');
        }).catch((error) => {
            ToastAndroid.show(error, ToastAndroid.SHORT);
            console.log(error);
        });
    }
    const fetchUser = async () => {
        const user1 = await SecureStore.getItemAsync('user');
        console.log(user1);
        await setUser(JSON.parse(user1));
    };
    useEffect(() => {
        fetchUser();
      }, []);
    return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        <View style={styles.container}>

        <TextInput
          value={Address}
          onChangeText={(e) => setAdress(e)}
          placeholder={'Address'}
          style={styles.input}
        />
         <View style={styles.buttonContainer}>
            <Button
                title={'Add Address'}
                style={styles.ybutton}
                color="#000"
                TextColor="#000000"
                onPress={() => createService()}
            />
        </View>
        </View>
       
    </ImageBackground>

    )

}

