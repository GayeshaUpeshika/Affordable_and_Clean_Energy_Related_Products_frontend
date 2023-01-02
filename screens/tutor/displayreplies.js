  

 import axios, { CanceledError } from "axios";
 import React, { useEffect, useState } from "react";
 import { Alert, ScrollView, Text, TouchableOpacity, View ,Image, ImageBackground} from "react-native";
 import Colors from "../styles/Colors";
 import orderStyles from "../styles/orders";
 import commonStyles from "../styles/common";
 import { Ionicons } from "@expo/vector-icons";
 const bg = require('../../images/bg.png');
  import {styles} from '../../styles';
 
 
 const DisplayAllReplies = ({ route, navigation }) => {
   const [orders, setOrders] = useState([]);
 
  
   const getOrders = () => {
     axios
       .get("https://ueehosting.herokuapp.com/RepliesPost/AllReplies")
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
       "This will permanently delete Replies!",
       [
         {
           text: "OK",
           onPress: () => {
             axios
               .delete(
                 `https://ueehosting.herokuapp.com/RepliesPost/RemoveReply/${id}`
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
             >Manage All Replies </Text>
       
       <ScrollView
         style={{ display: "flex", flexDirection: "column", width: "90%" }}
       >
         {orders.map((order, index) => (
           <View style={orderStyles.orderCard} key={order + index}>
                 
                 
             <View style={orderStyles.items}>
         
               <View>
                 <Text style={{ marginVertical: 2 }}>Reply ID</Text>
                 <Text style={{ marginVertical: 2 }}>Question ID</Text>
                 <Text style={{ marginVertical: 2 }}>Question </Text>
                 <Text style={{ marginVertical: 5 }}>Answer  </Text>
               </View>
               <View>
                 <View style={orderStyles.ordersID}>
                   <Text style={{ textAlign: "center", color: "white" }}>
                     {order.ReplyID}
                   </Text>
                 </View>
                 <Text style={{ marginVertical: 2 }}>{order.QuestionID}</Text>
                 <Text style={{ marginVertical: 2 }}>{order.questionName}</Text>
                 <Text style={{ marginVertical: 2 }}>{order.replyName}</Text>
             
               </View>
             </View>
          
             <View style={{ flexDirection: "row", justifyContent: "center" }}>
               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate("UpdateReply", {
                     
                     ReplyID: order._id,
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
               
             </View>
           </View>
         ))}
       </ScrollView>
       
       <View>
   <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("AddQuestion")}>
                         
                             <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00" }}>Add Question</Text>
                        
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
 
 export default DisplayAllReplies ;
 
 