import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Images} from '../../../assets/images';

const DebtSnowball = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.debt_Snowball} />
      <View style={styles.line} />
      <Text style={styles.enterDebtsHere}>{Strings.enterDebtsHere}</Text>
      <View style={styles.line} />
      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image source={Images.add} style={styles.add} resizeMode="contain" />
          <Text style={styles.greenText}>{Strings.extraIncome}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <View style={styles.titlesView}>
        <Text style={styles.titlesText}>{Strings.debtName}</Text>
        <Text style={styles.titlesText}>{Strings.yourBalance}</Text>
        <Text style={styles.titlesText}>{Strings.interestRate}</Text>
        <Text style={styles.titlesText}>{Strings.minimumPayment}</Text>
        <Text style={styles.titlesText}>{Strings.yourPayment}</Text>
      </View>

      <View style={styles.recordsView}>
        <Text style={styles.recordsText}>{Strings.total}</Text>
        <Text style={styles.recordsText}>$00.32</Text>
        <Text style={styles.recordsText}>00.00</Text>
        <Text style={styles.recordsText}>$00.00</Text>
        <Text style={styles.recordsText}>$00.00</Text>
      </View>

      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image source={Images.add} style={styles.add} resizeMode="contain" />
          <Text style={styles.greenText}>{Strings.addADebt}</Text>
        </TouchableOpacity>
      </View>
      <Image source={Images.oops} style={styles.oops} resizeMode="center" />
      <Text style={styles.noDataFound}>{Strings.noDataFound}</Text>
    </SafeAreaView>
  );
};

export default DebtSnowball;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingTop: hp(2),
  },
  line: {
    width: wp(100),
    borderTopWidth: 2,
    borderColor: Colors.darkGrey,
    marginVertical: hp(2.5),
  },
  enterDebtsHere: {
    fontSize: Size(1.7),
    color: Colors.primaryLight,
    marginHorizontal: wp(5),
  },
  greenView: {
    alignSelf: 'flex-end',
    marginRight: wp(5),
    // marginBottom: hp(3),
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  add: {
    width: 30,
    height: 30,
  },
  greenText: {
    fontSize: Size(1.7),
    color: Colors.green1,
    marginLeft: wp(3),
  },
  titlesView: {
    width: wp(90),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlesText: {
    fontSize: Size(1.6),
    color: Colors.grayText,
    fontWeight: '500',
    textAlign: 'center',
  },
  recordsView: {
    width: wp(95),
    height: hp(5.5),
    flexDirection: 'row',
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(2.5),
  },
  recordsText: {
    fontSize: Size(1.6),
    color: Colors.darkGreyText,
    fontWeight: '600',
  },
  oops: {
    width: wp(46),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(7),
  },
  noDataFound: {
    fontSize: Size(1.7),
    fontWeight: '300',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(1.5),
  },
});
