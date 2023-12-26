import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens/preAuthScreens/splash';
import AuthStack from './authStack';
import DrawerNavigation from './drawerNavigation';
import Dashboard from '../screens/postAuthScreens/dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={'Splash'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
