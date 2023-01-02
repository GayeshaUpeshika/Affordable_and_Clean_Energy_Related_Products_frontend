 

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


const AddTutor = ({ route, navigation }) => {

  const [TutorialID, setTutorialID] = useState("");
  const [tutorialTitle, settutorialTitle] = useState("");
  const [tutorialDescription, settutorialDescription] = useState("");
  const [tutorialPeriod, settutorialPeriod] = useState("");
  const [TutorialImages, setTutorialImages] = useState("");
  const [ProductName, setProductName] = useState("");



  const addTutorial = () => {
    const payload = {
        TutorialID:TutorialID,
        tutorialTitle: tutorialTitle,
        tutorialDescription: tutorialDescription,
        tutorialPeriod: tutorialPeriod,
        TutorialImages: TutorialImages,
        ProductName:ProductName,
    };

    const URL = "https://ueehosting.herokuapp.com/TutorialPost/CreateTutorial/"

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          "tutorial Added!",
          "Your tutorial  has been created successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("display", {
                  
                  
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
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%"
   
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
            >Publish New tutorial </Text>
        <TextInput
          value={TutorialID}
          onChange={(e) => setTutorialID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Tutorial ID "
        />
        <TextInput
          value={tutorialTitle}
          onChange={(e) => settutorialTitle(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter tutorial Title  "
        />
        <TextInput
          value={tutorialDescription}
          onChange={(e) => settutorialDescription(e.nativeEvent.text)}
          style={commonStyles.textView1}
          placeholder=" Enter tutorial Description "
          numberOfLines={10}
          multiline={true}
        />
        <TextInput
          value={tutorialPeriod}
          onChange={(e) => settutorialPeriod(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter tutorial Period"
        />

<TextInput
          value={TutorialImages}
          onChange={(e) => setTutorialImages(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter TutorialImages link    "
        />

<TextInput
          value={ProductName}
          onChange={(e) => setProductName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Product Name "
        />




        <TouchableOpacity onPress={() => addTutorial()} style={commonStyles.button}>
          <Text style={{ color: "white" }}>Publish New Tutorial</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default AddTutor;



