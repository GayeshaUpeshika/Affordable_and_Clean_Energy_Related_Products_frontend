  

 import axios, { CanceledError } from "axios";
 import React, { useEffect, useState } from "react";
 import { Alert, ScrollView, Text, TouchableOpacity, View ,Image, ImageBackground} from "react-native";
 import Colors from "../styles/Colors";
 import orderStyles from "../styles/orders";
 import commonStyles from "../styles/common";
 import { Ionicons } from "@expo/vector-icons";
 const bg = require('../../images/bg.png');
  import {styles} from '../../styles';
 
 
 const DisplayAllQuestions = ({ route, navigation }) => {
   const [orders, setOrders] = useState([]);
 
  
   const getOrders = () => {
     axios
       .get("https://ueehosting.herokuapp.com/QuestionsPost/AllQuestions")
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
       "This will permanently delete Question!",
       [
         {
           text: "OK",
           onPress: () => {
             axios
               .delete(
                 `https://ueehosting.herokuapp.com/QuestionsPost/RemoveQuestion/${id}`
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
             >Manage All  Questions </Text>
       
       <ScrollView
         style={{ display: "flex", flexDirection: "column", width: "90%" }}
       >
         {orders.map((order, index) => (
           <View style={orderStyles.orderCard} key={order + index}>
                 
               
             <View style={orderStyles.items}>
         
               <View>
                 <Text style={{ marginVertical: 2 }}>question ID</Text>
                 <Text style={{ marginVertical: 2 }}>question</Text>
                
               </View>
               <View>
                 <View style={orderStyles.ordersID}>
                   <Text style={{ textAlign: "center", color: "white" }}>
                     {order.QuestionID}
                   </Text>
                 </View>
                 <Text style={{ marginVertical: 2 }}>{order.questionName}</Text>
                 
             
               </View>
             </View>
          
             <View style={{ flexDirection: "row", justifyContent: "center" }}>
               
               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate("AddReply", {
                     
                     QuestionID: order._id,
                   })
                 }
                 style={{ ...commonStyles.buttonupdate, width: "30%" }}
               >
                 <View style={orderStyles.orderssID}>
                 <Text style={{ textAlign: "center", color: "white" }}>Reply</Text>
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
   <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("AllReplies")}>
                         
                             <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00" }}>All Replies</Text>
                        
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
 
 export default DisplayAllQuestions;
 
 