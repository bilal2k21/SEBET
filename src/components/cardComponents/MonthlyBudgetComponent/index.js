import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Strings} from '../../../assets/strings';
import {Colors} from '../../../assets/colors';
import {hp, wp, Size} from '../../../assets/dimensions';

const MonthlyBudgetComponent = () => {
  return (
    <LinearGradient
      colors={['#ED3237', '#A01D20']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <View style={styles.budgetCard}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.jan2022}>{Strings.jan2022}</Text>
          <View>
            <Text style={styles.monthlyBudget}>{Strings.monthlyBudget}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                // marginTop: hp(-0.5),
              }}>
              <View style={styles.circle} />
              <View
                style={{
                  borderTopWidth: 1,
                  width: 5,
                  borderColor: Colors.primaryLight,
                }}
              />
              <View style={styles.smallCircle} />
              <View
                style={{
                  borderTopWidth: 1,
                  width: wp(35),
                  borderColor: Colors.primaryLight,
                }}
              />
            </View>
          </View>
        </View>

        {/* Render it when data not found */}
        <View>
          <Text style={styles.createMonthlyBudget}>
            {Strings.createMonthlyBudget}
          </Text>
          <TouchableOpacity>
            <Text style={styles.createBudget}>{Strings.createBudget}</Text>
          </TouchableOpacity>
        </View>

        {/* Render it when data found */}
        {/* <View>
            <Text style={styles.expectedBudget}>{Strings.expectedBudget}</Text>
            <Text style={styles.price}>$5700</Text>
          </View> */}
      </View>
    </LinearGradient>
  );
};

export default MonthlyBudgetComponent;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 20,
    overflow: 'hidden', // Clip the gradient within the button

    width: wp(85),
    height: hp(20),
    marginLeft: wp(5),
    padding: wp(4),
  },
  // budgetCard: {
  // width: wp(85),
  // height: hp(20),
  // // backgroundColor: Colors.primaryRed,
  // borderRadius: 15,
  // marginLeft: wp(5),
  // padding: wp(4),
  // },
  jan2022: {
    fontSize: Size(4),
    fontWeight: '700',
    color: Colors.darkGrey,
    lineHeight: Size(3.5),
  },
  monthlyBudget: {
    fontSize: Size(2.5),
    fontWeight: '700',
    color: Colors.primaryLight,
    lineHeight: Size(2.5),
    textAlign: 'right',
  },
  circle: {
    width: wp(3),
    height: wp(3),
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
  },
  smallCircle: {
    width: wp(2.3),
    height: wp(2.3),
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
  },
  createMonthlyBudget: {
    fontSize: Size(1.75),
    fontWeight: '500',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(2),
  },
  createBudget: {
    color: Colors.orangeText,
    fontSize: Size(1.55),
    textAlign: 'center',
  },
  expectedBudget: {
    fontSize: Size(1.55),
    fontWeight: '500',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(3),
  },
  price: {
    fontSize: Size(2.5),
    fontWeight: '700',
    color: Colors.primaryLight,
    textAlign: 'center',
  },
});
