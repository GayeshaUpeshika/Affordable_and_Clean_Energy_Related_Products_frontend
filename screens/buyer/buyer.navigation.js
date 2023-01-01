
import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const BuyStack = createStackNavigator();
const OrderStack = createStackNavigator();
const ServiceStack = createStackNavigator();

import Profile from '../buyer/profile';
import Buy from '../buyer/buy';
import Item from '../buyer/buy/item';
import Orders from '../buyer/orders';
import Service from '../buyer/service';
import Learn from '../buyer/learn';
import Checkout from '../buyer/buy/checkout';
import NewSearvice from '../buyer/buyerService/new.service';

const BuyStackScreen = () => (
  <BuyStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <BuyStack.Screen name="Buypage" component={Buy} />
    <BuyStack.Screen name="SelectedItem" component={Item} />
  </BuyStack.Navigator>
)

const OrderStackScreen = () => (
  <OrderStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <OrderStack.Screen name="OrdersPage" component={Orders} />
    <OrderStack.Screen name="Checkout" component={Checkout} />
  </OrderStack.Navigator>
)

const ServiceStackScreen = () => (
  <ServiceStack.Navigator screenOptions={{
    headerShown: false
  }}>
    <ServiceStack.Screen name="ServicePage" component={Service} />
    <ServiceStack.Screen name="newService" component={NewSearvice} />
  </ServiceStack.Navigator>
)

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();

export default function BuyerNavigation(){

    return (

    <NavigationContainer independent={true} >
      <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === 'Profile') {
        //     iconName = focused ? 'person-circle-outline' : 'person-circle-outline';
        //   } else if (route.name === 'Sell') {
        //     iconName = focused ? 'cash-outline' : 'cash-outline';
        //   }else if (route.name === 'Bank'){
        //     iconName = focused ? 'business-outline' : 'business-outline';
        //   }else if (route.name === 'Products'){
        //     iconName = focused ? 'cube-outline' : 'cube-outline';
        //   }else if (route.name === 'Orders'){
        //     iconName = focused ? 'clipboard-outline' : 'clipboard-outline';
        //   }

        //   // You can return any component that you like here!
        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: { fontSize: 10.5, fontWeight: 'bold'
         }
      })}
      >
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Buy" component={BuyStackScreen} />
        <Tab.Screen name="Orders" component={OrderStackScreen} />
        <Tab.Screen name="Service" component={ServiceStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
   

    )

}

