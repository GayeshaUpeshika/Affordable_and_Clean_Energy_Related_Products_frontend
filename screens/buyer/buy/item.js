import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, Text, Button, View, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';

import {styles} from '../../../styles'
import axios from 'axios';
const bg = require('../../../images/bg.png');
import {backend} from '../../../config';

import s7 from '../../../images/s7.png';

export default function Item({ navigation }){
    const [Item, setItem] = React.useState('');
    const [qnty, setqnty] = React.useState(1);

    const orderItem = async () => {
        console.log(qnty);
        let today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        const user1 = await SecureStore.getItemAsync('user');
        const OrderData = {
            itemID: Item._id,
            itemName: Item.itemName,
            deliveryAddress: 'test',
            status: "pending",
            qnty: qnty,
            price: Item.price,
            date: today,
            buyerID: (JSON.parse(user1)).id,
            sellerID: Item.userID
        };
        console.log(OrderData);
        await SecureStore.setItemAsync('selectedOrderBuyer', JSON.stringify(OrderData));
        navigation.navigate('Checkout');
    }

    const fetchItem = async () => {
        const itemId = await SecureStore.getItemAsync('selectedItemBuyer');
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }
        
        await axios.get(`${backend}/api/item/${itemId}`, config).then((response) => {
            console.log(response.data);
            setItem(response.data.data);
        }).catch((error) => {
            console.log(error);
        });
    }
    useEffect(() => {
        fetchItem();
      }, []);
    return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        <View style={styles.container}>
            <Image source={s7} style={styles.OrderPageIMG}/>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {Item.itemName}
                </Text>
            </View>
            <Text>
                {Item.description}
            </Text>
        </View>
        <View style={styles.container}>
            <Text>Quantity</Text>
            <TextInput
                style={styles.input}
                type="number"
                value={qnty}
                onChangeText={(text) => setqnty(text)}
                keyboardType="numeric"
            />
            <Button
            title={'Buy'}
            style={styles.ybutton}
            color="#000"
            TextColor="#000000"
            onPress={() => orderItem()}
        />
        </View>
    </ImageBackground>
    )

}

