import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { styles } from "../../../styles";
import { Formik } from "formik";
import axios from "axios";
import { backend } from "../../../config";
import Background from "../../Background";
import * as SecureStore from 'expo-secure-store';
import { useEffect, useState } from "react";


export default function AddBank() {
  
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
        initialValues={{ bankAccount: "", ownerName: ""}}
        onSubmit={(values) => {
          console.log(values)
      //axios.post(backend+'/api/item',{...values , userID} ).then(res => console.log('Item aded')).catch(e => console.log('error ',e));
        }}
      >
        {(props) => (
          <View>
            <Text>Bank Account</Text>
            <TextInput
              style={styles.input}
              placeholder="Bank Account"
              onChangeText={props.handleChange("bankAccount")}
              value={props.values.bankAccount}
            />

            <Text>Owner Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Owner Name"
              onChangeText={props.handleChange("ownerName")}
              value={props.values.ownerName}
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
