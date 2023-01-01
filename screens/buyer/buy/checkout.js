import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Image, Text, Button, View, ToastAndroid, TextInput } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import SelectDropdown from 'react-native-select-dropdown'

import {styles} from '../../../styles'
import axios from 'axios';
const bg = require('../../../images/bg.png');
import {backend} from '../../../config';

import s7 from '../../../images/s7.png';

export default function Checkout({ navigation }){
    const [Order, setOrder] = React.useState('');
    const [Address, setAddress] = React.useState('');
    const countries = ["Address1", "Address2"]

    const fetchOrder = async () => {
        const order1 = await SecureStore.getItemAsync('selectedOrderBuyer');
        console.log(order1);
        setOrder(JSON.parse(order1));
    }

    const placeOrder = async () => {
        const OrderData = {
            itemID: Order.itemID,
            itemName: Order.itemName,
            deliveryAddress: Address,
            status: Order.status,
            qnty: Order.qnty,
            price: Order.price,
            date: Order.date,
            buyerID: Order.buyerID,
            sellerID: Order.sellerID
        };
        console.log(OrderData);
        const config = {
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'}
            }

        await axios.post(`${backend}/api/order/create`, OrderData, config).then((response) => {
            console.log(response.data);
            ToastAndroid.show('Order Placed successfully!', ToastAndroid.SHORT);
            navigation.navigate('Buypage');
        }).catch((error) => {
            ToastAndroid.show(error, ToastAndroid.SHORT);
            console.log(error);
        });
    }

    useEffect(() => {
        fetchOrder();
        }, []);
    return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        <View style={styles.container}>
            <Image source={s7} style={styles.OrderPageIMG}/>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    {Order.itemName}
                </Text>
                <Text>
                    Quantity: {Order.qnty}
                </Text>
                <Text>
                    Total: {parseInt(Order.price)*parseInt(Order.qnty)} LKR
                </Text>
                </View>
            
        </View>
        <View style={styles.container}>
            <Text>Address</Text>
                <SelectDropdown
                    data={countries}
                    onSelect={(selectedItem, index) => {
                        console.log(selectedItem, index)
                        setAddress(selectedItem);
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
        </View>
        <View style={styles.container}>
        <Text>Payment Card</Text>
            <SelectDropdown
                data={countries}
                onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
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
        </View>
        <View style={styles.container}>
            <Button
                title={'Place Order'}
                style={styles.ybutton}
                color="#000"
                TextColor="#000000"
                onPress={() => placeOrder()}
            />
        </View>
    </ImageBackground>

    )

}

