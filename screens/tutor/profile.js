import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

const DeliverStack = createStackNavigator();

import {styles} from '../../styles'

import ViewProfile from '../tutor/profile/view.profile';
import UpdateProfile from '../tutor/profile/update.profile';
import Webinars from './webinar';
import AddTutor from './addtutor';

const Tab = createBottomTabNavigator();

const DeliveryAddressStack = () => (
  <DeliverStack.Navigator>
    <DeliverStack.Screen name="Profile" component={ViewProfile} />
    <DeliverStack.Screen name="webinar" component={Webinars} />
    <DeliverStack.Screen name="Addtutor" component={AddTutor} />
  </DeliverStack.Navigator>
);


export default function Profile(){


    return (
<NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'ViewProfile') {
            iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
          } else if (route.name === 'UpdateProfile') {
            iconName = focused ? 'create-outline' : 'create-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="ViewProfile" component={DeliveryAddressStack} />
        <Tab.Screen name="UpdateProfile" component={UpdateProfile} />
      </Tab.Navigator>
    </NavigationContainer>

    )

}

