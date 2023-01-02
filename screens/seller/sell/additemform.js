import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { styles } from "../../../styles";
import { Formik } from "formik";
import axios from "axios";
import { backend } from "../../../config";
import Background from "../../Background";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";


export default function AddItemForm() {
  
  const [userID , setUserID] = useState('');

  const getUserID = async () => {
    const variable = await SecureStore.getItemAsync('user');
    const data = JSON.parse(variable);
    setUserID(data.id);
}

  useEffect(()=>{
    getUserID();
  },[]);

  return (
    <Background>
    <View style={styles.container}>
      <Formik
        initialValues={{ itemName: "", description: "", price: "" }}
        onSubmit={(values) => {
          console.log(values)
      axios.post(backend+'/api/item',{...values , userID} ).then(res => alert("Item added!")).catch(e => console.log('error ',e));
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
      </Formik>
    </View>
    </Background>
  );
}
