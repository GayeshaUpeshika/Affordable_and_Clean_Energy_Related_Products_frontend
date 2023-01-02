import axios from 'axios';
import React from 'react';
import {View , StyleSheet , Text, TouchableOpacity, Button } from 'react-native';
import { backend } from '../../../config';


// navigation.navigate('screenName',{data: props})

const EditOrder = (props) => {

    const {data} = props.route.params;
    console.log('data insde ',data)

    const handleMark = (status) => {
        let payload = {
            _id: data.id,
            status: status
        }
        console.log('p ',payload)
        axios.put(backend+'/api/order/updateT',payload).then(res => alert('Item marked as '+status))
        .catch(e => console.log(e));
    }

    return(
        <View style={styles.container}>
            <View>
            <View>
            <Text style={styles.title}>{data.name}</Text>
            </View>
        <View style={styles.row}>
            <Text>Qty: {data.qty}</Text>
            <Text>Price: {data.price}</Text>
            </View>
            <View>
            <Text>{data.address}</Text>
            </View>
            </View>
            <View style={{marginTop:20}}>
                <Button title='Mark as shipped' color={'green'} onPress={()=> handleMark('shipped')} />
                <View style={{height:20}} />
                <Button title='Cancel Order' color={'red'} onPress={()=> handleMark('cancelled')} />
            </View>
        </View>
    );
}

export default EditOrder;


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'space-between'
    },
    container: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        alignSelf:'center',
        width:'90%',
        justifyContent:'space-between',
        flex:1
    },
    title: {
        fontSize:20,
        fontWeight: '700',
        textTransform: 'capitalize'
    }
})