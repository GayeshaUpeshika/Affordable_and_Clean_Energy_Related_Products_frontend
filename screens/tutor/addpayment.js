

 

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


const AddPayment = ({ route, navigation }) => {

  const [TutorialID, setTutorialID] = useState("");
  const [PaymentID, setPaymentID] = useState("");
  const [paymentproductTitle, setpaymentproductTitle] = useState("");
  const [paymentuserName, setpaymentuserName] = useState("");
  const [receiptNo, setreceiptNo] = useState("");
  const [pinNo, setpinNo] = useState("");
   

  useEffect(() => {
    axios
      .get(
        `https://ueehosting.herokuapp.com/TutorialPost/GetTutorialByID/${route.params.TutorialID}`
      )
      .then((res) => {
        setTutorialID(res.data.TutorialID);

      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

 

  const createPayment = () => {
    const URL = `https://ueehosting.herokuapp.com/PaymentPost/CreatePayment/`;
   

    const payload = {

      TutorialID:TutorialID,
      PaymentID:PaymentID,
      paymentproductTitle: paymentproductTitle,
      paymentuserName: paymentuserName,
      receiptNo: receiptNo,
      pinNo: pinNo,
      

    };

    axios
      .post(URL, payload)
      .then((_response) => {
        Alert.alert(
          " Added Payments",
          " Added successfully!!",
          [
            {
              text: "OK",
              onPress: () =>
                navigation.navigate("display", {
                  userID: route.params.userID,
                  userRole: route.params.userRole,
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

   
source={require('../images/image4.jpg')}
/>
      <ScrollView>
      <Text style={{
                fontSize: 19,
                fontWeight: "600",
                textAlign: "center",
                color:"#008000",
                marginBottom:"4%"
            }}
            > Enter Payment Details </Text>
      <TextInput
          value={TutorialID}
          onChange={(e) => setTutorialID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Tutorial ID "
        />
        <TextInput
          value={PaymentID}
          onChange={(e) => setPaymentID(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Payment ID "
        />
        <TextInput
          value={paymentproductTitle}
          onChange={(e) => setpaymentproductTitle(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder="Enter Paid Product Title  "
        />
        <TextInput
          value={paymentuserName}
          onChange={(e) => setpaymentuserName(e.nativeEvent.text)}
          style={commonStyles.textView1}
          placeholder=" Enter Paid User Name "
          numberOfLines={10}
          multiline={true}
        />

<TextInput
          value={receiptNo}
          onChange={(e) => setreceiptNo(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Receipt No "
        />

<TextInput
          value={pinNo}
          onChange={(e) => setpinNo(e.nativeEvent.text)}
          style={commonStyles.textView}
          placeholder=" Enter Pin No "
        />


      
      

        <TouchableOpacity
          onPress={() => createPayment()}
          style={commonStyles.button}
        >
          <Text style={{ color: "white" }}>Add Payments </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </ImageBackground>
  );
};

export default AddPayment;
