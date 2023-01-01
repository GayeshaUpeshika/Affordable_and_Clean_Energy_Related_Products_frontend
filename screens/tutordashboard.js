  

 import React, { useEffect } from "react";
 import {
   View,
   Text,
   Button,
   TouchableOpacity,
   ScrollView,
   Image,
   ImageBackground,
 } from "react-native";
 import dashboardStyles from "./styles/dashboard";
 const bg = require('../images/bg.png');
 import {styles} from '../styles'
 
 
 
 const TutorDashBoard = ({ route, navigation }) => {
   
 
   return (
    
     
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
     <View style={dashboardStyles.container}>
       {/* <Image
         style={{ width: "100%", height: "40%"  , marginTop:"-68%" }}
         resizeMode="contain"
         source={require("../images/aya.gif")}
       /> */}
               <Text style={{
                 fontSize: 39,
                 fontWeight: "600",
                 textAlign: "center",
                 color:"#008000",
                 marginBottom:"4%"
             }}
             >Dashboard</Text>
       
       
          
           <TouchableOpacity
             onPress={() =>
               navigation.navigate("display", {
                
               })
             }
             style={dashboardStyles.card}
           >
             <Text style={{ color: "white" }}>All Tutorials</Text>
           </TouchableOpacity>
           
           <TouchableOpacity
         onPress={() =>
           navigation.navigate("displaylock", {
             
           })
         }
         style={dashboardStyles.card}
       >
         <Text style={{ color: "white" }}> Lock Tutorials</Text>
       </TouchableOpacity>
 
 
       <TouchableOpacity
         onPress={() =>
           navigation.navigate("AllWebinar", {
             
           })
         }
         style={dashboardStyles.card}
       >
         <Text style={{ color: "white" }}>All Webinar</Text>
       </TouchableOpacity>


       <TouchableOpacity
             onPress={() =>
               navigation.navigate("Questions", {
                
               })
             }
             style={dashboardStyles.card}
           >
             <Text style={{ color: "white" }}>Q&A</Text>
           </TouchableOpacity>



    
    
       <TouchableOpacity
             onPress={() =>
               navigation.navigate("Profile", {
                
               })
             }
             style={dashboardStyles.card}
           >
             <Text style={{ color: "white" }}>Tutor Profile</Text>
           </TouchableOpacity>
 
       
         
      
       <TouchableOpacity
         onPress={() =>
           navigation.navigate("Login", {
             
           })
         }
         style={dashboardStyles.card}
       >
         <Text style={{ color: "white" }}>Exit</Text>
       </TouchableOpacity>
      
       </View>
       
       </ImageBackground>
     
  
   );
 };
 
 
 export default TutorDashBoard;
 