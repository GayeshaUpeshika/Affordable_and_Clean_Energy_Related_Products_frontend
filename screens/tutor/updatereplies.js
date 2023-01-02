

 

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

const UpdateReply = ({ route, navigation }) => {

    const [QuestionID, setQuestionID] = useState("");
    const [ReplyID, setReplyID] = useState("");
    const [questionName, setquestionName] = useState("");
    const [replyName, setreplyName] = useState("");


  useEffect(() => {
    axios
      .get(
        `https://ueehosting.herokuapp.com/RepliesPost/GetReplyByID/${route.params.ReplyID}`
      )
      .then((res) => {
        setReplyID(res.data.ReplyID);
        setQuestionID(res.data.QuestionID);
        setquestionName(res.data.questionName);
        setreplyName(res.data.replyName);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  const createOrder = () => {
    const URL = `https://ueehosting.herokuapp.com/RepliesPost/UpdateReplyById/${route.params.ReplyID}`;

    const payload = {

        ReplyID:ReplyID,
        QuestionID: QuestionID,
        questionName: questionName,
        replyName: replyName,
        

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

   
source={require('../images/so.jpg')}
/>
      <ScrollView>
      
        <TextInput
          value={ReplyID}
          onChange={(e) => setReplyID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter ReplyID  "
        />
        <TextInput
          value={QuestionID}
          onChange={(e) => setQuestionID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter QuestionID  "
        />
        <TextInput
          value={questionName}
          onChange={(e) => setquestionName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter questionName  "
        />
        <TextInput
          value={replyName}
          onChange={(e) => setreplyName(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="enter replyName  "
        />
        
      

        <TouchableOpacity
          onPress={() => createOrder()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Update  </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default UpdateReply;
