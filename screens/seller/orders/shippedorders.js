import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native";
import { styles } from "../../../styles";
import { Formik } from "formik";
import Card from "./card";
import Background from "../../Background";
import axios from "axios";
import { backend } from "../../../config";
import { useEffect, useState } from "react";
import * as SecureStore from 'expo-secure-store';

export default function PendingOrders() { 

  const [userID , setUserID] = useState('');
  const [data, setData] = useState('')


  const getUserID = async () => {
    const variable = await SecureStore.getItemAsync('user');
    const data = JSON.parse(variable);
    setUserID(data.id);
}

  useEffect(()=>{
    getUserID();
    loadItems();
  },[]);

  const loadItems = () => {
    axios.get(backend+'/api/order/getAllOrders').then( data => {
      console.log('data ',data.data);

      const apidata = data.data.data;
      console.log("dataaaaaaaaaaaaaa", apidata)
      const itemset = apidata.filter(item => item.sellerID === userID);
      console.log("itemsettttttttttt", itemset)
      setData(itemset)

    }).catch(e => console.log(e));
}


// [
//   {_id: '1' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '2' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '3' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '17' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '18*' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '18' , name: 'salmon'  , qty: 3 , price: 500},
//   {_id: '188' , name: 'salmon'  , qty: 3 , price: 500},
// ]


  return (
    <Background>
    <View style={ styles.container}>

      <FlatList 
        data={data}
        keyExtractor={item => item._id}
        style={{width:'100%'}}
        renderItem={({item}) => <Card name={item.itemName} qty={item.qnty} id={item._id} price={item.price} key={item._id} />}
        contentContainerStyle={{alignSelf:'center',width:'100%'}}
      />

      <Button title="Refresh" color={"green"} onPress={()=>{loadItems();}}  />



      {/* <Formik
        initialValues={{ itemName: "", description: "", price: "" }}
        onSubmit={(values) => {
          console.log(values)
        //axios.post

        
        }}
      >
        {(props) => (
          <View>
            <Text>Item Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Item Name"
              onChangeText={props.handleChange("itemName")}
              value={props.values.itemName}
            />

            <Text>Description</Text>
            <TextInput
              style={styles.input}
              placeholder="Description"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
            />

            <Text>Price</Text>
            <TextInput
              style={styles.input}
              placeholder="Price"
              onChangeText={props.handleChange("price")}
              value={props.values.price}
              keyboardType='numeric'
            />

            <Button 
            title="Submit"
            color='#FBC02D'
            onPress={props.handleSubmit}
            />

          </View>
        )}
      </Formik> */}
    </View>
    </Background>
  );
}
