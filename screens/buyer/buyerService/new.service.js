import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, ToastAndroid, Text, Button, View, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'

import {styles} from '../../../styles'
import axios from 'axios';
const bg = require('../../../images/bg.png');
import {backend} from '../../../config';

export default function NewSearvice({ navigation }){
    const [Name, setName] = React.useState('');
    const [Reason, setReason] = React.useState('');
    const [Priority, setPriority] = React.useState('');
    const [Type, setType] = React.useState('');
    const [PhoneNumber, setPhoneNumber] = React.useState('');
    const pr = ["High", "Medium", "Low"]
    const type = ["New Installation", "Repair", "Maintainance"]
    const [User, setUser] = React.useState('');

    const createService = async () => {
        const ServiceData = {
            name: Name,
            reason: Reason,
            priority: Priority,
            serviceType: Type,
            status:"pending",
            phoneNumber: PhoneNumber,
            buyerId: User.id,
        };
        console.log(ServiceData);
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }

        await axios.post(`${backend}/api/req/new`, ServiceData, config).then((response) => {
            console.log(response.data);
            ToastAndroid.show('Service Requested successfully!', ToastAndroid.SHORT);
            navigation.navigate('ServicePage');
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
          value={Name}
          onChangeText={(e) => setName(e)}
          placeholder={'Name'}
          style={styles.input}
        />
        <TextInput
          value={Reason}
          onChangeText={(e) => setReason(e)}
          placeholder={'Reason'}
          style={styles.input}
        />
        <Text>Priority</Text>
        <SelectDropdown
            data={pr}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setPriority(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        <Text>Service Type</Text>
        <SelectDropdown
            data={type}
            onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                setType(selectedItem);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
            }}
            rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
            }}
        />
        <TextInput
          value={PhoneNumber}
          onChangeText={(e) => setPhoneNumber(e)}
          placeholder={'Phone Number'}
          style={styles.input}
        />
         <View style={styles.buttonContainer}>
            <Button
                title={'Send Request'}
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

