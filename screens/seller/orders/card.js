import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View , StyleSheet , Text, TouchableOpacity } from 'react-native';


// navigation.navigate('screenName',{data: props})

const Card = (props) => {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('EditOrder',{data: props})
    }

    return(
        <TouchableOpacity style={styles.container} onPress={()=> handleNavigation()}>
            <View>
            <Text style={styles.title}>{props.name}</Text>
            </View>
        <View style={styles.row}>
            <Text>Qty: {props.qty}</Text>
            <Text>Price: {props.price}</Text>
            </View>
            <View>
            <Text>{props.address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Card;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    container: {
        width: '95%',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        elevation: 10,
        alignSelf:'center',
        marginBottom:10,
        backgroundColor: 'white'
    },
    title: {
        fontSize:20,
        fontWeight: '700',
        textTransform: 'capitalize'
    }
})