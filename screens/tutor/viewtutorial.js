

 

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

const ViewTutor = ({ route, navigation }) => {

    const [TutorialID, setTutorialID] = useState("");
    const [tutorialTitle, settutorialTitle] = useState("");
    const [tutorialDescription, settutorialDescription] = useState("");
    const [tutorialPeriod, settutorialPeriod] = useState("");
    const [TutorialImages, setTutorialImages] = useState("");
    const [ProductName, setProductName] = useState("");


  useEffect(() => {
    axios
      .get(
        `https://ueehosting.herokuapp.com/TutorialPost/GetTutorialByID/${route.params.TutorialID}`
      )
      .then((res) => {
        setTutorialID(res.data.TutorialID);
        settutorialTitle(res.data.tutorialTitle);
        settutorialDescription(res.data.tutorialDescription);
        settutorialPeriod(res.data.tutorialPeriod);
        setTutorialImages(res.data.TutorialImages);
        setProductName(res.data.ProductName);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  return (
    <ImageBackground source={bg} resizeMode="stretch" style={styles.image}>
    <View>

                   
<Image   style={{ width: 420, height: 190 }}

   
source={require('../images/so.jpg')}
/>
      <ScrollView>
      
        <TextInput
          value={TutorialID}
          onChange={(e) => setTutorialID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter TutorialID  "
        />
        <TextInput
          value={tutorialTitle}
          onChange={(e) => settutorialTitle(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter tutorialTitle  "
        />
        <TextInput
          value={tutorialDescription}
          onChange={(e) => settutorialDescription(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter tutorialDescription  "
        />
        <TextInput
          value={tutorialPeriod}
          onChange={(e) => settutorialPeriod(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter tutorialPeriod  "
        />
        <TextInput
          value={ProductName}

          onChange={(e) => setProductName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter  Product Name "
        />
      
      
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default ViewTutor;
