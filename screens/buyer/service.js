import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, TouchableOpacity, Image, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {styles} from '../../styles'

import axios from 'axios';
const bg = require('../../images/bg.png');
import {backend} from '../../config';

export default function Searvice({ navigation }){
    const [Request, setRequest] = React.useState([]);
    const [User, setUser] = React.useState('');

    const fetchUser = async () => {
        const user1 = await SecureStore.getItemAsync('user');
        console.log(user1);
        await setUser(JSON.parse(user1));

        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }
        await axios.get(`${backend}/api/req/getbyBuyer/${(JSON.parse(user1)).id}`, config).then((response) => {
            console.log(response.data);
            setRequest(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    };
    useEffect(() => {
        fetchUser();
      }, []);
    return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        
        <ScrollView>
            <View style={styles.container}>
                {Request.map((request) => (
                    <View style={styles.containerx} key={request._id}>
                        <Text>
                            ___________________
                        </Text>
                        <Text style={styles.titleText}>
                            Request: {request.name}
                        </Text>
                        <Text style={styles.titleText}>
                            Status: {request.status}
                        </Text>
                        <Text>
                            ___________________
                        </Text>
                    </View>
                ))}
            </View>
        </ScrollView>
        <View style={styles.container}>
            <Button
                title={'Reqest Service maintenance '}
                color="#000"
                onPress={(e) => navigation.navigate('newService')}
            />
        </View>
        <View style={styles.container}></View>
    </ImageBackground>
    )

}

