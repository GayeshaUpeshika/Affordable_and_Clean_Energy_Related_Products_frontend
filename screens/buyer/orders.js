import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, TouchableOpacity, Image, ScrollView, Button, StyleSheet, Text, View } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import {styles} from '../../styles'

import s1 from '../../images/solar-panel.png';
import s2 from '../../images/s2.png';
import s3 from '../../images/s3.png';
import s4 from '../../images/s4.png';
import s5 from '../../images/s5.png';
import s6 from '../../images/s6.png';
import s7 from '../../images/s7.png';

import axios from 'axios';
const bg = require('../../images/bg.png');
import {backend} from '../../config';

export default function Orders({ navigation }){
    const [ orderIcon] = React.useState([s1, s2, s3, s4, s5, s6, s7]);
    const [User, setUser] = React.useState('');
    const [Item, setItem] = React.useState([]);

    const selectItem = async (e, item) => {
        console.log(item);
        await SecureStore.setItemAsync('selectedItemBuyer', (item));
        navigation.navigate('SelectedItem');
    };

    const fetchUser = async () => {
        const user1 = await SecureStore.getItemAsync('user');
        console.log(user1);
        await setUser(JSON.parse(user1));

        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }
        await axios.get(`${backend}/api/order/getAllOrders`, config).then((response) => {
            console.log(response.data);
            setItem(response.data.data);
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
            {Item.map((item) => (
            <View style={styles.container} key={item._id}>
                <TouchableOpacity style={styles.OrderIMG}>
                <Image source={orderIcon[(Math.floor(Math.random() * 7))]} style={styles.OrderIMG}/>
                </TouchableOpacity>
                <Text style={styles.titleText}>
                    {item.itemName}
                </Text>
                <Text>
                  Quantity: {item.qnty}
                </Text>
                <Text>
                    Price: {item.price} LKR
                </Text>
                <Text style={{color:'green'}}>
                    Status: {item.status}
                </Text>
            </View>
            ))}
            </View>
        </ScrollView>
        
    </ImageBackground>
    )

}

