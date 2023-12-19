import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens/preAuthScreens/splash';
import AuthStack from './authStack';
import DrawerNavigation from './drawerNavigation';
import MileageTracking from '../screens/postAuthScreens/mileageTracking';
// import Dashboard from '../screens/postAuthScreens/dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={'MileageTracking'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
        <Stack.Screen name="MileageTracking" component={MileageTracking} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
