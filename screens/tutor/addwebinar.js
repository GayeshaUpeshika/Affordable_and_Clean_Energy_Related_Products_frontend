 

import axios from "axios";
import React, { useState } from "react";
import {
    Alert,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import commonStyles from "../styles/common";
const bg = require('../../images/bg.png');
 import {styles} from '../../styles';


const AddWebinar = ({ route, navigation }) => {

  const [WebinarID, setWebinarID] = useState("");
  const [energyType, setenergyType] = useState("");
  const [productName, setproductName] = useState("");
  const [tutorName, settutorName] = useState("");
  const [webinarDate, setwebinarDate] = useState("");
  const [webinarDuration, setwebinarDuration] = useState("");
  const [webinarMode, setwebinarMode] = useState("");



  const addWebinar = () => {
    const payload = {
        WebinarID:WebinarID,
        energyType: energyType,
        productName: productName,
        tutorName: tutorName,
        webinarDate: webinarDate,
        webinarDuration: webinarDuration,
        webinarMode: webinarMode,
    };

    const URL = "https://ueehosting.herokuapp.com/WebinarPost/CreateWebinar/"

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "Webinar details Added!",
          "successfully scheduled!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("AllWebinar", {
                  
                  
                }),
            },
          ],
          { cancelable: false }
        );
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
       
      }}
    >
        {/* <Image style = {{height: "27%", width: "100%"}} resizeMode = "cover" source={require("../images/addjobss.gif")} /> */}
      <ScrollView style={{ width: "80%", margin: 2 }}>
        
      <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#008000",
                marginBottom:"4%"
            }}
            >Schedule Webinar</Text>
        <TextInput
          value={WebinarID}
          onChange={(e) => setWebinarID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Webinar ID "
        />
        <TextInput
          value={energyType}
          onChange={(e) => setenergyType(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Energy Type  "
        />
        <TextInput
          value={productName}
          onChange={(e) => setproductName(e.nativeEvent.text)}
          style={commonStyles.textView1}
          placeholder=" Enter Product Name"
          numberOfLines={10}
          multiline={true}
        />

<TextInput
          value={tutorName}
          onChange={(e) => settutorName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Tutor Name "
        />

<TextInput
          value={webinarDate}
          onChange={(e) => setwebinarDate(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Webinar Date "
        />

<TextInput
          value={webinarDuration}
          onChange={(e) => setwebinarDuration(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Webinar Duration "
        />

        
<TextInput
          value={webinarMode}
          onChange={(e) => setwebinarMode(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Webinar Mode"
        />





        <TouchableOpacity onPress={() => addWebinar()} style={commonStyles.button}>
          <Text style={{ color: "white" }}>Schedule Webinar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default AddWebinar;



