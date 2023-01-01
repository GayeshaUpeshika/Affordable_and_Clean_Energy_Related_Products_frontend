import * as React from 'react';
import { View, Button, Text, Animated, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Roles
import SellerNavigation from "./screens/seller/seller.navigation";
import BuyerNavigation from "./screens/buyer/buyer.navigation";
import TutorNavigation from './screens/tutor/tutor.navigation';
import TechNavigation from './screens/tech/tech.navigation';

// Components
import DeliveryAddress from './screens/buyer/profile/manage/delivery.address';  

import Login from "./screens/auth/login";
import Register from "./screens/auth/register";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import { styles } from './styles';


//Tutor
import ViewTutorials from './screens/tutor/displayallTutorsscreen';
import TutorDashBoard from './screens/tutordashboard';
import DisplayAllToutorsScreen from './screens/tutor/displayAlltoutorsscreen';
import UpdateTutor from './screens/tutor/updatetutor';
import DisplayTutorial from './screens/tutor/displaytutorial';
import AddTutor from './screens/tutor/addtutor';
import AddPayment from './screens/tutor/addpayment';
import AddWebinar from './screens/tutor/addwebinar';
import DisplayAllWebinars from './screens/tutor/displayallwebinars';
import UpdateWebinar from './screens/tutor/updatewebinar';
import AddParticipant from './screens/tutor/addparticipant';
import ViewTutor from './screens/tutor/viewtutorial';
import Profile from './screens/tutor/profile/view.profile';
import AddQuestion from './screens/tutor/addquestions';
import Questions from './screens/tutor/displayquestions';
import Reply from './screens/tutor/addreply';
import DisplayAllReplies from './screens/tutor/displayreplies';
import UpdateReply from './screens/tutor/updatereplies';





export default function App() {

  function Home({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home</Text>
        <View style={styles.button}>
          <Button
            title="Login"
            color="#841584"
            onPress={() => navigation.navigate('Login')}
            
        />
        </View>

        <View style={styles.button}>
        <Button
            title="Register"
            color="#841584"
            onPress={() => navigation.navigate('Register')}
            
        />
      </View>
      </View>
    );
  }

  function MyStack() { 
    return (
      
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: 'tomato' },
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
        />

        <Stack.Screen
          name="Seller"
          component={SellerNavigation}
        />
        <Stack.Screen
          name="Buyer"
          component={BuyerNavigation}
        />
        <Stack.Screen
          name="Tutor"
          component={TutorDashBoard}
        />
        <Stack.Screen
          name="Tech"
          component={TechNavigation}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
        <Stack.Screen
          name="deliveryaddr"
          component={DeliveryAddress}
        />
         <Stack.Screen
          name="ViewTutorials"
          component={ViewTutorials}
        />
        <Stack.Screen name='TutorDashBoard' component={TutorDashBoard} />
        <Stack.Screen name='AddTutor' component={AddTutor} />
        <Stack.Screen name='ViewTutor' component={ViewTutor} />
        <Stack.Screen name='display' component={DisplayAllToutorsScreen} />
        <Stack.Screen name='displaylock' component={DisplayTutorial} />
        <Stack.Screen name='UpdateTutor' component={UpdateTutor} />
        <Stack.Screen name='Payment' component={AddPayment} />
        <Stack.Screen name='Webinar' component={AddWebinar} />
        <Stack.Screen name='AllWebinar' component={DisplayAllWebinars} />
        <Stack.Screen name='UpdateWebinar' component={UpdateWebinar} />
        <Stack.Screen name='AddParticipant' component={AddParticipant} />
        <Stack.Screen name='Profile' component={Profile} />
        <Stack.Screen name='AddQuestion' component={AddQuestion} />
        <Stack.Screen name='Questions' component={Questions} />
        <Stack.Screen name='AddReply' component={Reply} />
        <Stack.Screen name='AllReplies' component={DisplayAllReplies} />
        <Stack.Screen name='UpdateReply' component={UpdateReply} />
      </Stack.Navigator>
     
      
    );
  }

  return (
    
    <NavigationContainer independent={true}>
    <MyStack />
  </NavigationContainer>
  
  );
}
