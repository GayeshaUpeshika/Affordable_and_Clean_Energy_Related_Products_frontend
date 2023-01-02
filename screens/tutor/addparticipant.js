

 

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  ScrollView,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ImageBackground,
} from "react-native";
import Colors from "../styles/Colors";
import commonStyles from "../styles/common";
import newOrderStyles from "../styles/newOrder";
const bg = require('../../images/bg.png');
 import {styles} from '../../styles';


const AddParticipant = ({ route, navigation }) => {

    const [WebinarID, setWebinarID] = useState("");
    const [participantName, setparticipantName] = useState("");
   

  useEffect(() => {
    axios
      .get(
        `https://ueehosting.herokuapp.com/WebinarPost/GetWebinarByID/${route.params.WebinarID}`
      )
      .then((res) => {
        setWebinarID(res.data.WebinarID);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  const createParticipant = () => {
    const URL = `https://ueehosting.herokuapp.com/ParticipantPost/CreateParticipant/`;
   

    const payload = {

        WebinarID:WebinarID,
        participantName: participantName,
      

    };

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          " Added Participants",
          " Added successfully!!",
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
          "Inserting Unsuccessful",
          [{ text: "Check Again" }],
          { cancelable: false }
        );
      });
  };

  return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
    <View>

                   
<Image   style={{ width: 420, height: 190 }}

   
source={require('../images/image1.jpg')}
/>
      <ScrollView>
      <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#008000",
                marginBottom:"4%"
            }}
            > Add Participants </Text>
        <TextInput
          value={WebinarID}
          onChange={(e) => setWebinarID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter WebinarID"
        />
        <TextInput
          value={participantName}
          onChange={(e) => setparticipantName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter participant Name"
        />
       
      
      
      

        <TouchableOpacity
          onPress={() => createParticipant()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Add Participants </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default AddParticipant;
