import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {styles} from '../../styles'

import ViewProfile from '../tech/profile/view.profile';
import UpdateProfile from '../tech/profile/update.profile';

const Tab = createBottomTabNavigator();

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
        <Tab.Screen name="ViewProfile" component={ViewProfile} />
        <Tab.Screen name="UpdateProfile" component={UpdateProfile} />
      </Tab.Navigator>
    </NavigationContainer>

    )

}

