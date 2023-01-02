  

 import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View ,Image, ImageBackground} from "react-native";
import Colors from "../styles/Colors";
import orderStyles from "../styles/orders";
import commonStyles from "../styles/common";
import { Ionicons } from "@expo/vector-icons";
const bg = require('../../images/bg.png');
 import {styles} from '../../styles';


const DisplayAllToutorsScreen = ({ route, navigation }) => {
  const [orders, setOrders] = useState([]);

 
  const getOrders = () => {
    axios
      .get("https://ueehosting.herokuapp.com/TutorialPost/AllTutorial")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((e) => {
        console.error(e);
        Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
          cancelable: false,
        });
      });
  };

  const deleteOrder = (id) => {
    Alert.alert(
      "Are you sure?",
      "This will permanently delete  Tutor!",
      [
        {
          text: "OK",
          onPress: () => {
            axios
              .delete(
                `https://ueehosting.herokuapp.com/TutorialPost/RemoveTutorial/${id}`
              )
              .then((res) => {
                getOrders();
              })
              .catch((e) => {
                console.error(e);
              });
          },
        },
       
      ],
     
    );
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             <Text style={orderStyles.title
            }
            >Manage All  Tutorials </Text>
      
      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
        {orders.map((order, index) => (
          <View style={orderStyles.orderCard} key={order + index}>
                
                <Image   style={{ width: 350, height: 170 }}

   
source={{uri:order.TutorialImages}}
/>
            <View style={orderStyles.items}>
        
              <View>
                <Text style={{ marginVertical: 2 }}>tutor ID</Text>
                <Text style={{ marginVertical: 2 }}>tutor Title</Text>
                <Text style={{ marginVertical: 2 }}>tutorialDescription </Text>
                <Text style={{ marginVertical: 5 }}>tutorialPeriod  </Text>
              </View>
              <View>
                <View style={orderStyles.ordersID}>
                  <Text style={{ textAlign: "center", color: "white" }}>
                    {order.TutorialID}
                  </Text>
                </View>
                <Text style={{ marginVertical: 2 }}>{order.tutorialTitle}</Text>
                <Text style={{ marginVertical: 2 }}>{order.tutorialDescription}</Text>
                <Text style={{ marginVertical: 2 }}>{order.tutorialPeriod}</Text>
            
              </View>
            </View>
         
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("UpdateTutor", {
                    
                    TutorialID: order._id,
                  })
                }
                style={{ ...commonStyles.buttonupdate, width: "30%" }}
              >
                <View style={orderStyles.oorderID}>
                <Text style={{ textAlign: "center", color: "white" }}>Update</Text>
                </View>
               
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => deleteOrder(order._id)}
                style={{ ...commonStyles.buttondelete, width: "30%" }}
              >
                <View style={orderStyles.orderID}>
                <Text style={{ textAlign: "center", color: "white" }}>Remove</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("ViewTutor", {
                    
                    TutorialID: order._id,
                  })
                }
                style={{ ...commonStyles.buttonupdate, width: "30%" }}
              >
                <View style={orderStyles.orderssID}>
                <Text style={{ textAlign: "center", color: "white" }}>View</Text>
                </View>
               
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
      
      <View>
  <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("AddTutor")}>
                        
                            <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00" }}>Add Tutorials</Text>
                       
                        </TouchableOpacity>
  </View>
  <View>
   <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("TutorDashBoard")}>
         
                             <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00" }}>TutorDashBoard</Text>
                          
                         </TouchableOpacity>
   </View>
  
    </View>
    </ImageBackground>
  );
};

export default DisplayAllToutorsScreen;

