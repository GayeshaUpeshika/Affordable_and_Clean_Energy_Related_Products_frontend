  

 import axios, { CanceledError } from "axios";
 import React, { useEffect, useState } from "react";
 import { Alert, ScrollView, Text, TouchableOpacity, View ,Image, ImageBackground} from "react-native";
 import Colors from "../styles/Colors";
 import orderStyles from "../styles/orders";
 import commonStyles from "../styles/common";
 const bg = require('../../images/bg.png');
 import {styles} from '../../styles';
 
 
 
 const DisplayAllWebinars = ({ route, navigation }) => {
   const [webinars, setWebinars] = useState([]);
 
  
   const getWebinars = () => {
     axios
       .get("https://ueehosting.herokuapp.com/WebinarPost/AllWebinar")
       .then((res) => {
         setWebinars(res.data);
       })
       .catch((e) => {
         console.error(e);
         Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
           cancelable: false,
         });
       });
   };
 
   const deleteWebinar = (id) => {
     Alert.alert(
       "Are you sure?",
       "This will permanently delete  Webinar Schedule!",
       [
         {
           text: "OK",
           onPress: () => {
             axios
               .delete(
                 `https://ueehosting.herokuapp.com/WebinarPost/RemoveWebinar/${id}`
               )
               .then((res) => {
                 getWebinars();
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
     getWebinars();
   }, []);
 
   return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={orderStyles.title
             }
             >Manage All  Webinars </Text>
       
       <ScrollView
         style={{ display: "flex", flexDirection: "column", width: "90%" }}
       >
         {webinars.map((webinar, index) => (
           <View style={orderStyles.orderCard} key={webinar + index}>
                 
                 <Image   style={{ width: 350, height: 170 }}
 
    
 source={require('../images/image2.png')}
 />
             <View style={orderStyles.items}>
         
               <View>
                 <Text style={{ marginVertical: 2 }}>Webinar ID</Text>
                 <Text style={{ marginVertical: 2 }}>energyType</Text>
                 <Text style={{ marginVertical: 2 }}>productName</Text>
                 <Text style={{ marginVertical: 5 }}>tutorName</Text>
                 <Text style={{ marginVertical: 6 }}>webinarDate</Text>
                 <Text style={{ marginVertical: 7 }}>webinarDuration</Text>
                 <Text style={{ marginVertical: 8 }}>webinarMode</Text>
               </View>
               <View>
                 <View style={orderStyles.orderID}>
                   <Text style={{ textAlign: "center", color: "white" }}>
                     {webinar.WebinarID}
                   </Text>
                 </View>
                 <Text style={{ marginVertical: 2 }}>{webinar.WebinarID}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.energyType}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.productName}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.tutorName}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.webinarDate}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.webinarDuration}</Text>
                 <Text style={{ marginVertical: 2 }}>{webinar.webinarMode}</Text>
             
               </View>
             </View>
          
             <View style={{ flexDirection: "row", justifyContent: "center" }}>
               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate("UpdateWebinar", {
                     
                     WebinarID: webinar._id,
                   })
                 }
                 style={{ ...commonStyles.buttonupdate, width: "30%" }}
               >
                <View style={orderStyles.ordersID}>
                 <Text style={{ textAlign: "center", color: "white" }}>Update</Text>
                 </View>
               </TouchableOpacity>
               <TouchableOpacity
                 onPress={() => deleteWebinar(webinar._id)}
                 style={{ ...commonStyles.buttondelete, width: "30%" }}
               >
                 <View style={orderStyles.orderID}>
                 <Text style={{ textAlign: "center", color: "white" }}>Remove</Text>
                 </View>
               </TouchableOpacity>

               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate("AddParticipant", {
                     userID: route.params.userID,
                     userRole: route.params.userRole,
                     WebinarID: webinar._id,
                   })
                 }
                 style={{ ...commonStyles.buttonupdate, width: "30%" }}
               >
                   <View style={orderStyles.orderssID}>
                  <Text style={{ textAlign: "center", color: "white" }}>Participants</Text>
                  </View>
               </TouchableOpacity>
             </View>
           </View>
         ))}
       </ScrollView>
       <View>
   <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("Webinar")}>
         
                             <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00"}}>Add Webinars</Text>
                          
                         </TouchableOpacity>
   </View>
   <View>
    <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("TutorDashBoard")}>
          
                              <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00"}}>TutorDashboard</Text>
                           
                          </TouchableOpacity>
    </View>
   
     </View>
     </ImageBackground>
   );
 };
 
 export default DisplayAllWebinars;
 
 