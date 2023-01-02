import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import {styles} from '../../styles'

import EditSellingItem from './sell/eidtsellitem';
import AddItemForm from './sell/additemform';
import DeleteSellingItem from './sell/deleteitem';

const Tab = createBottomTabNavigator();

export default function Profile(){


    return (
<NavigationContainer independent={true}>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Add Item') {
            iconName = focused ? 'add-outline' : 'add-outline';
          } else if (route.name === 'Edit Item') {
            iconName = focused ? 'create-outline' : 'create-outline';
          }else if (route.name === 'Delete Item') {
            iconName = focused ? 'remove-outline' : 'remove-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        
        <Tab.Screen name="Add Item" component={AddItemForm} />
        <Tab.Screen name="Edit Item" component={EditSellingItem} />
        <Tab.Screen name="Delete Item" component={DeleteSellingItem} />
      </Tab.Navigator>
    </NavigationContainer>

    )

}

