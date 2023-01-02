import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, ToastAndroid, Text, Button, View, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'

import {styles} from '../../../styles'
import axios from 'axios';
const bg = require('../../../images/bg.png');
import {backend} from '../../../config';
import buyerProfilPic from '../../../images/buyer.png'

export default function UpdateProfile({ navigation }){
    const [Password, setPassword] = React.useState('');
    const [User, setUser] = React.useState('');

    const updateProfile = async () => {
        const UserData = {
            _id: User.id,
            password: Password,
        }
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }

        await axios.post(`${backend}/api/auth/update`, UserData, config).then((response) => {
            console.log(response.data);
            ToastAndroid.show('User Update successfully!', ToastAndroid.SHORT);
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
                <Image
                    style={styles.profile}
                    source={buyerProfilPic}
                />
                
                <Text style={styles.titleText}>{User.username}</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.titleText}>New Password</Text>
                <TextInput
                    value={Password}
                    onChangeText={(e) => setPassword(e)}
                    placeholder={'New Password'}
                    secureTextEntry={true}
                    style={styles.input}
                />
            </View>
            <View style={styles.container}>
            <Button
                title={'Update Profile'}
                style={styles.ybutton}
                color="#000"
                TextColor="#000000"
                onPress={() => updateProfile()}
            />
            </View>
        </ImageBackground>
    )

}

