import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeliveryAddress from './profile/manage/delivery.address';
import { createStackNavigator } from '@react-navigation/stack';
import ViewProfile from './profile/view.profile';
import UpdateProfile from '../buyer/profile/update.profile';
import PaymentCards from './profile/manage/payment.cards';
import NewDelivery from './profile/manage/delivery/new.delivery';

const DeliverStack = createStackNavigator();



import {styles} from '../../styles'



const Tab = createBottomTabNavigator();

const DeliveryAddressStack = () => (
  <DeliverStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <DeliverStack.Screen name="Profile" component={ViewProfile} />
    <DeliverStack.Screen name="deliveryaddr" component={DeliveryAddress} />
    <DeliverStack.Screen name="newAddress" component={NewDelivery} />
    <DeliverStack.Screen name="managepayment" component={PaymentCards} />
  </DeliverStack.Navigator>
);

export default function Profile(){


    return (
<NavigationContainer independent={true} >
      <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
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

