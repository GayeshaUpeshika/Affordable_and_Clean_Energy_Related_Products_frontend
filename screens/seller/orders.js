import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from '../../styles'
import PendingOrders from './orders/pendingorders';
import ShippedOrders from './orders/shippedorders';
import { createStackNavigator } from '@react-navigation/stack';
import EditOrder from './orders/editorder';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function Orders(){


    return (
        <NavigationContainer independent={true}>
              <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
        
                  if (route.name === 'Pending Orders') {
                    iconName = focused ? 'documents-outline' : 'documents-outline';
                  } else if (route.name === 'Shipped Orders') {
                    iconName = focused ? 'train-outline' : 'train-outline';
                  }
        
                  // You can return any component that you like here!
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'green',
                tabBarInactiveTintColor: 'gray',
              })}
              >
                
                <Tab.Screen name="Pending Orders" component={PendingOrderStack} />
                <Tab.Screen name="Shipped Orders" component={ShippedOrders} />
              </Tab.Navigator>
            </NavigationContainer>
        
            )

}

const PendingOrderStack = () => {
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='PendingOrder' component={PendingOrders} />
      <Stack.Screen name='EditOrder' component={EditOrder} />
    </Stack.Navigator>
  )
}

