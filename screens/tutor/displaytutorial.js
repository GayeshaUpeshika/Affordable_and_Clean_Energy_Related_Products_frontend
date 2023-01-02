  

 import axios, { CanceledError } from "axios";
 import React, { useEffect, useState } from "react";
 import { Alert, ScrollView, Text, TouchableOpacity, View ,Image, ImageBackground} from "react-native";
 import Colors from "../styles/Colors";
 import orderStyles from "../styles/orders";
 import commonStyles from "../styles/common";
 const bg = require('../../images/bg.png');
 import {styles} from '../../styles';
 
 
 const DisplayTutorial = ({ route, navigation }) => {
   const [tutorials, setTutorials] = useState([]);
 
 
   const getTutorials = () => {
     axios
       .get("https://ueehosting.herokuapp.com/TutorialPost/AllTutorial")
       .then((res) => {
        setTutorials(res.data);
       })
       .catch((e) => {
         console.error(e);
         Alert.alert("Error", "Cannot get data!", [{ text: "Ok" }], {
           cancelable: false,
         });
       });
   };
 
   const deleteTutorial = (id) => {
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
                 getTutorials();
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
     getTutorials();
   }, []);
 
   return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={orderStyles.title
             }
             >Manage All Lock Tutorials </Text>
       
       <ScrollView
         style={{ display: "flex", flexDirection: "column", width: "90%" }}
       >
         {tutorials.map((tutorial, index) => (
           <View style={orderStyles.orderCard} key={tutorial + index}>
                 
                 <Image   style={{ width: 350, height: 170 }}
 
    
 source={{uri:tutorial.TutorialImages}}
 />
             <View style={orderStyles.items}>
         
               <View>
                 <Text style={{ marginVertical: 2 }}>tutor ID</Text>
                 <Text style={{ marginVertical: 2 }}>tutor Title</Text>
                <Text style={{ marginVertical: 5 }}>tutorialPeriod  </Text>
               </View>
               <View>
                 <View style={orderStyles.orderID}>
                   <Text style={{ textAlign: "center", color: "white" }}>
                     {tutorial.TutorialID}
                   </Text>
                 </View>
                 <Text style={{ marginVertical: 2 }}>{tutorial.tutorialTitle}</Text>
                <Text style={{ marginVertical: 2 }}>{tutorial.tutorialPeriod}</Text>
             
               </View>
             </View>
          
             <View style={{ flexDirection: "row", justifyContent: "center" }}>
               <TouchableOpacity
                 onPress={() =>
                   navigation.navigate("Payment", {
                    userID: route.params.userID,
                    userRole: route.params.userRole,
                    TutorialID: tutorial._id,
                    
                   })
                 }
                 style={{ ...commonStyles.buttonupdate, width: "30%" }}
               >
                  <View style={orderStyles.orderssID}>
                 <Text style={{ textAlign: "center", color: "white" }}>UnLock</Text>
                 </View>
               </TouchableOpacity>


               
             
             </View>
           </View>
         ))}
       </ScrollView>
       <View>
   <TouchableOpacity style = {commonStyles.button22} onPress={() => navigation.navigate("TutorDashBoard")}>
         
                             <Text style = {{color: "black", paddingHorizontal: 1, backgroundColor: "#DFFF00"}}>TutorDashboard</Text>
                          
                         </TouchableOpacity>
   </View>
   
     </View>
     </ImageBackground>
   );
 };
 
 export default DisplayTutorial;
 
 