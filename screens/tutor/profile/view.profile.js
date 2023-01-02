import axios from "axios";

import {
  Alert,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
  Button,
} from "react-native";
import React, { Component, useEffect } from 'react';
import {styles} from '../../../styles'
import buyerProfilPic from '../../../images/tutor.jpg'
import * as SecureStore from 'expo-secure-store';
const bg = require('../../../images/bg.png');



const ViewProfile =({ route, navigation }) => {
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
                    <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00"}}>
                    {User.username}
                    </Text>
                    <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00"}}>
                    {User.email}
                    </Text>
                </View>
              
            
        </View>
        <View style={styles.container}>
                    <View style={styles.ybutton}>
                        <Button
                            title={'Manage All The Tutorials'}
                            style={styles.ybutton}
                            color="#FFDD2D"
                            TextColor="#000000"
                            onPress={() => navigation.navigate('display')}
                        />
                    </View>
                    <View style={styles.ybutton}>
                        <Button
                            title={'Manage All The Webinars'}
                            style={styles.ybutton}
                            color="#FFDD2D"
                            TextColor="#000000"
                            onPress={() => navigation.navigate('AllWebinar')}
                        />
                    </View>
                </View>
        </ImageBackground>
    )

}

export default ViewProfile;