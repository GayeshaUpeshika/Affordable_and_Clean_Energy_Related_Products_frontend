import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import { styles } from "../../../styles";
import { Formik, Field } from "formik";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect, useState } from "react";
import axios from "axios";
import { backend } from "../../../config";
import Background from "../../Background";



export default function DeleteSellingItem() {

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([]);

  const loadItems = () => {
    axios.get(backend+'/api/item/getAllItems').then( data => {
      console.log('data ',data.data)
      let itemset = [];
      data.data.data.forEach(a => {
        itemset.push({label: a.itemName , value: a._id});
      });
      setItems(itemset);
      console.log(itemset)
    }).catch(e => console.log(e));
}

const handleRefresh = async () => {
  await loadItems();
}

useEffect(()=>{
  loadItems();
},[])

  return (
    <Background>
    <View style={styles.container}>
      <Formik
        initialValues={{ itemName: "", description: "", price: "" }}
        onSubmit={(values) => {
          console.log(values);
          //axios.post
          axios.delete(backend+'/api/item/'+value ).then(res => alert("Item removed!")).catch(e => console.log('error ',e));
        
        }}
      >
        {(props) => (
          <View>
            <Text>Select Item</Text>
            <DropDownPicker style={styles.dropdown}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
   
            />

            {/* <Text>Item Name</Text>
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
              keyboardType="numeric"
            /> */}
<View style={{marginTop:10}}>
            <Button
              title="Remove Item"
              color="#FBC02D"
              onPress={props.handleSubmit}
            />
</View>
            <View style={{marginTop:10}}>

            <Button 
            title="Refresh"
            color='green'
            onPress={()=> handleRefresh()}
            />
            </View>
          </View>
        )}
      </Formik>
    </View>
    </Background>
  );
}
