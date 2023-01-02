
import * as React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




import Profile from './profile';
import Sell from './sell';
import Products from './products';
import Orders from './orders';
import Bank from './bank';

const Tab = createMaterialTopTabNavigator();
//const Tab = createBottomTabNavigator();

export default function SellerNavigation(){


    

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
        <Tab.Screen name="Sell" component={Sell} />
        <Tab.Screen name="Bank" component={Bank} />
        <Tab.Screen name="Product" component={Products} />
        <Tab.Screen name="Orders" component={Orders} />
      </Tab.Navigator>
    </NavigationContainer>
   

    )

}

