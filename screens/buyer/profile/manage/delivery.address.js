import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, ToastAndroid, Text, Button, View, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'
import DropDownPicker from "react-native-dropdown-picker";

import {styles} from '../../../../styles'
import axios from 'axios';
const bg = require('../../../../images/bg.png');
import {backend} from '../../../../config';

export default function DeliveryAddress({ navigation }){
    const [open, setOpen] = React.useState(false);
    const [Address, setAdress] = React.useState('');
    const [User, setUser] = React.useState('');
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([]);

    const removeAddress = async () => {
        console.log(value);
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }
        await axios.delete(`${backend}/api/address/${value}`, config).then((response) => {
            console.log(response.data);
            ToastAndroid.show('Address deleted successfully!', ToastAndroid.SHORT);
            navigation.navigate('Profile');
        }).catch((error) => {
            ToastAndroid.show(error, ToastAndroid.SHORT);
            console.log(error);
        });
    }

    const createAddress = async () => {
        navigation.navigate('newAddress');
    }

    const fetchUser = async () => {
        const user1 = await SecureStore.getItemAsync('user');
        console.log(user1);
        await setUser(JSON.parse(user1));
        const addr = [];
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }
        await axios.get(`${backend}/api/address/getbyuid/${(JSON.parse(user1)).id}`, config).then((response) => {
            console.log(response.data.data);
            for (const key in (response.data.data)) {
                addr.push({label: (response.data.data)[key].address , value: (response.data.data)[key]._id});
            }
            setItems(addr);
            console.log(addr);
        }).catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        fetchUser();
      }, []);
    return (
        <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        <View style={styles.container}>

        <Text>Service Type</Text>
        <DropDownPicker style={styles.dropdown1}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
   
            />
         <View style={styles.buttonContainer}>
            <Button
                title={'Remove Address'}
                style={styles.ybutton}
                color="#000"
                TextColor="#000000"
                onPress={() => removeAddress()}
            />
        </View>
        <View style={styles.container}>
            <Button
                title={'Create Address'}
                style={styles.ybutton}
                color="#000"
                TextColor="#000000"
                onPress={() => createAddress()}
            />
        </View>
        </View>
       
    </ImageBackground>

    )

}

