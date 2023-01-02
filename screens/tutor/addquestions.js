

 

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


const AddQuestions = ({ route, navigation }) => {

    const [QuestionID, setQuestionID] = useState("");
    const [questionName, setquestionName] = useState("");
   

  const createQuestion = () => {
    const URL = `https://ueehosting.herokuapp.com/QuestionsPost/CreateQuestion/`;
   

    const payload = {

        QuestionID:QuestionID,
        questionName: questionName,
      

    };

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          " Added Questions",
          " Added successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("AllReplies", {
                  
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

   
source={require('../images/image5.jpg')}
/>
      <ScrollView>
      <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#008000",
                marginBottom:"4%"
            }}
            > Add Questions </Text>
        <TextInput
          value={QuestionID}
          onChange={(e) => setQuestionID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter QuestionID"
        />
        <TextInput
          value={questionName}
          onChange={(e) => setquestionName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter Question"
        />
       
      
      
      

        <TouchableOpacity
          onPress={() => createQuestion()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Add Question </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default AddQuestions;
