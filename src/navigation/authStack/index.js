import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../screens/authScreens/login';
import Signup from '../../screens/authScreens/signup';
import Signup2 from '../../screens/authScreens/signup/signup2';

const auth = createStackNavigator();

const AuthStack = () => {
  return (
    <auth.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'Login'}>
      <auth.Screen name="Login" component={Login} />
      <auth.Screen name="Signup" component={Signup} />
      <auth.Screen name="Signup2" component={Signup2} />
    </auth.Navigator>
  );
};
export default AuthStack;
