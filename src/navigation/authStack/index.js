import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Intro from '../../screens/authScreens/intro';
import ResetPassword from '../../screens/authScreens/resetPassword';
import Login from '../../screens/authScreens/login';
import Signup from '../../screens/authScreens/signup';
import ForgotPassword from '../../screens/authScreens/forgotPassword';
import OTP from '../../screens/authScreens/otp';

const auth = createStackNavigator();

function AuthStack() {
  return (
    <auth.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      // headerMode="none"
      initialRouteName={'Intro'}>
      <auth.Screen name="Intro" component={Intro} />
      <auth.Screen name="Login" component={Login} />
      <auth.Screen name="Signup" component={Signup} />
      <auth.Screen name="ForgotPassword" component={ForgotPassword} />
      <auth.Screen name="OTP" component={OTP} />
      <auth.Screen name="ResetPassword" component={ResetPassword} />
    </auth.Navigator>
  );
}
export {AuthStack};
