import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash} from '../screens/preAuthScreens/splash';
import AuthStack from './authStack';
import DrawerNavigation from './drawerNavigation';
import MonthlyBudget from '../screens/postAuthScreens/monthlyBudget';
// import Dashboard from '../screens/postAuthScreens/dashboard';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false, gestureEnabled: false}}
        initialRouteName={'MonthlyBudget'}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Auth" component={AuthStack} />
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        {/* <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} /> */}
        <Stack.Screen name="MonthlyBudget" component={MonthlyBudget} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
