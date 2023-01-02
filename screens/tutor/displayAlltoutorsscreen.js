  

 import axios, { CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, TouchableOpacity, View ,Image,ImageBackground,Button,TextInput} from "react-native";
import Colors from "../styles/Colors";
import orderStyles from "../styles/orders";
import commonStyles from "../styles/common";
import { Ionicons } from "@expo/vector-icons";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
const bg = require('../../images/bg.png');
import {styles} from '../../styles';


const DisplayAllToutorsScreen = ({ route, navigation }) => {

  const [orders, setOrders] = useState([]);
  const [filterorders, setFilterOrders] = useState([]);
  const [search, setSearch] = useState('')
  

  let generatePdf = async (TutorialID,tutorialTitle,tutorialDescription) => {

    const html = `
    <html>
    <head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      max-width: 300px;
      margin: auto;
      text-align: center;
      font-family: arial;
    }
    
    .title {
      color: grey;
      font-size: 18px;
    }
    
    button {
      border: none;
      outline: 0;
      display: inline-block;
      padding: 8px;
      color: white;
      background-color: #000;
      text-align: center;
      cursor: pointer;
      width: 100%;
      font-size: 18px;
    }
    
    a {
      text-decoration: none;
      font-size: 22px;
      color: black;
    }
    
    button:hover, a:hover {
      opacity: 0.7;
    }
    </style>
    </head>
    <body>
    
    <h2 style="text-align:center">Tutorial Details  </h2>
    
    <div class="card">
      <img src=" https://www.moneymorning.com.au/wp-content/uploads/2020/12/renewable-energy-australia-investing.jpg" alt="John" style="width:100%">
      <h1>Tutorial ID: ${TutorialID} </h1>
      <p class="title"> Tittle:${tutorialTitle}  </p>
      <p>tutorial Description  : ${tutorialDescription}</p>
      <div style="margin: 24px 0;">
        <a href="#"><i class="fa fa-dribbble"></i></a> 
        <a href="#"><i class="fa fa-twitter"></i></a>  
        <a href="#"><i class="fa fa-linkedin"></i></a>  
        <a href="#"><i class="fa fa-facebook"></i></a> 
      </div>
    
      <p> Thanks For view Our Tutors</p>

    </div>
    
    </body>
    </html>
`;

    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };

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


  const searchFunc = (text) => {
    return orders.filter((order) => order.TutorialID === text)
  }

  useEffect(() => {
    setFilterOrders(searchFunc(search))
  }, [search])


  return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             <Text style={orderStyles.title
            }
            >Manage All  Tutorials </Text>
            <TextInput style={orderStyles.inputserach}   placeholder='Search for Tutors ID....' value={search} onChangeText={(text)=>setSearch(text)} />

      <ScrollView
        style={{ display: "flex", flexDirection: "column", width: "90%" }}
      >
          {(search === ''? orders: filterorders).map((order, index) => (
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
                    // userID: route.params.userID,
                    // userRole: route.params.userRole,
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
                    // userID: route.params.userID,
                    // userRole: route.params.userRole,
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
            <Button title="Generate PDF" onPress={() => generatePdf(order.TutorialID,order.tutorialTitle,order.tutorialDescription )} />

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

