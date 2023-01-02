import React, { Component, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Button, Image, Text, View } from 'react-native';
import {styles} from '../../../styles'
import buyerProfilPic from '../../../images/buyer.png'
import * as SecureStore from 'expo-secure-store';
const bg = require('../../../images/bg.png');


// import {styles} from '../../styles'

export default function ViewProfile({ navigation }){
    const [User, setUser] = React.useState('');

    const fetchUser = async () => {
        const user1 = await SecureStore.getItemAsync('user');
        console.log(user1);
        setUser(JSON.parse(user1));
    };
    useEffect(() => {
        fetchUser();
      }, []);

    return (
        <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
        <View style={styles.container}>
            
                <View style={styles.container}>
                    <Image
                        style={styles.profile}
                        source={buyerProfilPic}
                    />
                    <Text>
                    {User.username}
                    </Text>
                    <Text>
                    {User.email}
                    </Text>
                </View>
                
            
        </View>
        </ImageBackground>
    )

}

