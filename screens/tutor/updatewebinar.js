

 

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

const UpdateWebinar = ({ route, navigation }) => {

    const [WebinarID, setWebinarID] = useState("");
    const [energyType, setenergyType] = useState("");
    const [productName, setproductName] = useState("");
    const [tutorName, settutorName] = useState("");
    const [webinarDate, setwebinarDate] = useState("");
    const [webinarDuration, setwebinarDuration] = useState("");
    const [webinarMode, setwebinarMode] = useState("");


  useEffect(() => {
    axios
      .get(
        `https://ueehosting.herokuapp.com/WebinarPost/GetWebinarByID/${route.params.WebinarID}`
      )
      .then((res) => {
        setWebinarID(res.data.WebinarID);
        setenergyType(res.data.energyType);
        setproductName(res.data.productName);
        settutorName(res.data.tutorName);
        setwebinarDate(res.data.webinarDate);
        setwebinarDuration(res.data.webinarDuration);
        setwebinarMode(res.data.webinarMode);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  const createWebinar = () => {
    const URL = `https://ueehosting.herokuapp.com/WebinarPost/UpdateWebinarById/${route.params.WebinarID}`;

    const payload = {

        WebinarID:WebinarID,
        energyType: energyType,
        productName: productName,
        tutorName: tutorName,
        webinarDate: webinarDate,
        webinarDuration:webinarDuration,
        webinarMode:webinarMode,

    };

    axios
      .patch(URL, payload)
      .then((_response) => {
        Alert.alert(
          " Updated",
          " updated successfully!!",
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
      
        <TextInput
          value={WebinarID}
          onChange={(e) => setWebinarID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter WebinarID"
        />
        <TextInput
          value={energyType}
          onChange={(e) => setenergyType(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter energyType"
        />
        <TextInput
          value={productName}
          onChange={(e) => setproductName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter productName  "
        />
        <TextInput
          value={tutorName}
          onChange={(e) => settutorName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter tutorName"
        />
        <TextInput
       
          value={webinarDate}
          onChange={(e) => setwebinarDate(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Webinar Date"
        />
        <TextInput
          value={webinarDuration}

          onChange={(e) => setwebinarDuration(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Webinar Duration "
        />

<TextInput
          value={webinarMode}

          onChange={(e) => setwebinarMode(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Webinar Mode "
        />
      
      
      

        <TouchableOpacity
          onPress={() => createWebinar()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Update </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default UpdateWebinar;
