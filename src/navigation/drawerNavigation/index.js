import React, {useState, useEffect} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from '../../screens/postAuthScreens/profile';
import Dashboard from '../../screens/postAuthScreens/dashboard';
import MonthlyBudget from '../../screens/postAuthScreens/monthlyBudget';
import DebtSnowball from '../../screens/postAuthScreens/debtSnowball';
import Transactions from '../../screens/postAuthScreens/transactions';
import Reports from '../../screens/postAuthScreens/reports';
import {hp, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import {Text, Image} from 'react-native';
import {Images} from '../../assets/images';
import {Strings} from '../../assets/strings';
import {View} from 'react-native';
import AddExpense from '../../screens/postAuthScreens/addExpense';
import CustomCategories from '../../screens/postAuthScreens/customCategories';
import DebtDetails from '../../screens/postAuthScreens/debtDetails';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  const [userFirstName, setUserFirstName] = useState('');

  // Function to get the current user's document from Firestore
  const fetchUserData = async () => {
    try {
      const userDoc = await firestore()
        .collection('users')
        .doc(auth().currentUser.uid)
        .get();
      const userData = userDoc.data();
      setUserFirstName(userData?.firstName || '');
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <Drawer.Navigator
      screenOptions={{
        swipeEdgeWidth: 200,
        drawerActiveTintColor: Colors.primaryLight,
        drawerActiveBackgroundColor: Colors.primaryDark,
        drawerInactiveTintColor: Colors.primaryLight,
        drawerInactiveBackgroundColor: Colors.primaryDark,
        drawerStyle: {
          backgroundColor: Colors.primaryDark,
          width: wp(80),
          height: hp(100),
        },
      }}
      initialRouteName="Dashboard"
      backBehavior="initialRoute">
      <Drawer.Screen
        name={Strings.viewProfile}
        component={Profile}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View
                style={{
                  width: wp(10),
                  height: wp(10),
                  backgroundColor: Colors.primaryRed,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  source={Images.logo}
                  resizeMode="contain"
                  style={{height: size, width: size}}
                />
              </View>
              <View style={{marginLeft: wp(4)}}>
                <Text style={{color: Colors.primaryLight}}>
                  {Strings.hello_}
                </Text>
                <Text style={{color: Colors.primaryLight, fontWeight: '500'}}>
                  {userFirstName || Strings.userName}
                </Text>
              </View>
              <Text
                style={{
                  color: Colors.green1,
                  fontWeight: '500',
                  marginLeft: wp(17),
                  marginTop: hp(2.5),
                }}>
                {Strings.viewProfile}
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name={Strings.dashboard}
        component={Dashboard}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                width: wp(70),
                borderColor: Colors.darkGrey,
                paddingVertical: hp(3.5),
              }}>
              <Image
                source={Images.category}
                resizeMode="contain"
                style={{height: size, width: size}}
              />
              <Text
                style={{
                  color: Colors.primaryLight,
                  fontWeight: '500',
                  marginLeft: wp(8),
                }}>
                {Strings.dashboard}
              </Text>
            </View>
          ),
        }}
      />

      <Drawer.Screen
        name=" "
        component={MonthlyBudget}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // paddingTop: hp(2.5),
              }}>
              <Image
                source={Images.wallet}
                resizeMode="contain"
                style={{height: size, width: size}}
              />
              <Text
                style={{
                  color: Colors.primaryLight,
                  fontWeight: '500',
                  marginLeft: wp(8),
                }}>
                {Strings.monthly_Budget}
              </Text>
            </View>
          ),
        }}
      />
      {/* Sinking Funds screen */}
      <Drawer.Screen
        name={Strings.sinking_Funds}
        component={DebtDetails}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={Images.chart}
              resizeMode="contain"
              style={{height: size, width: size}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="  "
        component={DebtSnowball}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // paddingBottom: hp(2.5),
              }}>
              <Image
                source={Images.twoCircles}
                resizeMode="contain"
                style={{height: size, width: size}}
              />
              <Text
                style={{
                  color: Colors.primaryLight,
                  fontWeight: '500',
                  marginLeft: wp(8),
                }}>
                {Strings.debt_Snowball}
              </Text>
            </View>
          ),
        }}
      />
      <Drawer.Screen
        name="   "
        component={Transactions}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderTopWidth: 1,
                width: wp(70),
                borderColor: Colors.darkGrey,
                paddingTop: hp(3.5),
              }}>
              <Image
                source={Images.swapRed}
                resizeMode="contain"
                style={{height: size, width: size}}
              />
              <Text
                style={{
                  color: Colors.primaryLight,
                  fontWeight: '500',
                  marginLeft: wp(8),
                }}>
                {Strings.transactions}
              </Text>
            </View>
          ),
        }}
      />

      {/* Weekly schedule screen */}
      <Drawer.Screen
        name={Strings.weeklySchedule}
        component={CustomCategories}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <Image
              source={Images.calendar}
              resizeMode="contain"
              style={{height: size, width: size}}
            />
          ),
        }}
      />

      <Drawer.Screen
        name={Strings.reports}
        component={Reports}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                borderBottomWidth: 1,
                width: wp(70),
                borderColor: Colors.darkGrey,
                paddingBottom: hp(3.5),
              }}>
              <Image
                source={Images.reportRed}
                resizeMode="contain"
                style={{height: size, width: size}}
              />
              <Text
                style={{
                  color: Colors.primaryLight,
                  fontWeight: '500',
                  marginLeft: wp(8),
                }}>
                {Strings.reports}
              </Text>
            </View>
          ),
        }}
      />

      {/* Upload CSV file button */}
      <Drawer.Screen
        name={Strings.addExpense}
        component={AddExpense}
        options={{
          headerShown: false,
          drawerIcon: ({focused, size}) => (
            <View
              style={{
                width: wp(70),
                borderBottomWidth: 1,
                borderColor: Colors.darkGrey,
                paddingBottom: hp(3),
              }}>
              <View
                style={{
                  width: wp(65),
                  height: hp(15),
                  alignItems: 'center',
                  justifyContent: 'space-evenly',
                  borderWidth: 3,
                  borderRadius: 20,
                  borderColor: Colors.darkGrey,
                  borderStyle: 'dashed',
                }}>
                <Image
                  source={Images.add}
                  resizeMode="contain"
                  style={{height: size, width: size}}
                />
                <Text
                  style={{
                    color: Colors.lightGreyText,
                    fontWeight: '500',
                    textAlign: 'center',
                  }}>
                  {Strings.uploadCSVFile}
                </Text>
              </View>
            </View>
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
