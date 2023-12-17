import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Dashboard from '../../screens/postAuthScreens/dashboard';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#c6cbef',
          width: 250,
        },
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        options={{
          drawerLabel: 'First tab Options',
          title: 'First Tab',
        }}
        component={Dashboard}
      />
      {/* <Drawer.Screen
        name="Dashboard"
        options={{
          drawerLabel: 'Second tab Options',
          title: 'Second Tab',
        }}
        component={Dashboard}
      /> */}
    </Drawer.Navigator>
  );
}
