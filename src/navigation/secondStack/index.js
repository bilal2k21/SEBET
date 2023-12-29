import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigation from '../drawerNavigation';
import AddExpense from '../../screens/postAuthScreens/addExpense';
import CustomCategories from '../../screens/postAuthScreens/customCategories';
import Dashboard from '../../screens/postAuthScreens/dashboard';
import DebtDetails from '../../screens/postAuthScreens/debtDetails';
import DebtSnowball from '../../screens/postAuthScreens/debtSnowball';
import Expense from '../../screens/postAuthScreens/expense';
import MileageTracking from '../../screens/postAuthScreens/mileageTracking';
import MonthlyBudget from '../../screens/postAuthScreens/monthlyBudget';
import Profile from '../../screens/postAuthScreens/profile';
import Referrals from '../../screens/postAuthScreens/referrals';
import Reports from '../../screens/postAuthScreens/reports';
import Transactions from '../../screens/postAuthScreens/transactions';

const Stack2 = createStackNavigator();

const SecondStack = () => {
  return (
    <Stack2.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}
      initialRouteName={'DrawerNavigation'}>
      <Stack2.Screen name="DrawerNavigation" component={DrawerNavigation} />
      <Stack2.Screen name="AddExpense" component={AddExpense} />
      <Stack2.Screen name="CustomCategories" component={CustomCategories} />
      <Stack2.Screen name="Dashboard" component={Dashboard} />
      <Stack2.Screen name="DebtDetails" component={DebtDetails} />
      <Stack2.Screen name="DebtSnowball" component={DebtSnowball} />
      <Stack2.Screen name="Expense" component={Expense} />
      <Stack2.Screen name="MileageTracking" component={MileageTracking} />
      <Stack2.Screen name="MonthlyBudget" component={MonthlyBudget} />
      <Stack2.Screen name="Profile" component={Profile} />
      <Stack2.Screen name="Referrals" component={Referrals} />
      <Stack2.Screen name="Reports" component={Reports} />
      <Stack2.Screen name="Transactions" component={Transactions} />
    </Stack2.Navigator>
  );
};
export default SecondStack;
