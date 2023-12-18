import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Images} from '../../../assets/images';
import IIcon from 'react-native-vector-icons/Ionicons';

const Expense = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.expense} />
      <View style={styles.line} />
      <View style={styles.searchView}>
        <TextInput
          placeholder={Strings.searchList}
          placeholderTextColor={Colors.primaryLight}
          cursorColor={Colors.primaryLight}
          style={styles.input}
        />
        {/* <IIcon
          color={Colors.primaryLight}
          name="search-outline"
          size={Size(2.5)}
        /> */}
        <Image
          source={Images.search}
          style={styles.search}
          resizeMode="contain"
        />
      </View>
      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image source={Images.add} style={styles.add} resizeMode="contain" />
          <Text style={styles.greenText}>{Strings.addExpense}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.notAddedExpenseView}>
        <Text style={styles.notAddedExpenseText}>
          {Strings.notAddedExpense}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Expense;

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
    marginVertical: hp(3),
  },
  searchView: {
    flexDirection: 'row',
    height: hp(6),
    width: wp(90),
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
  },
  input: {
    flex: 1,
    color: Colors.primaryLight,
  },
  search: {width: wp(5), height: wp(5)},
  greenView: {
    width: wp(40),
    alignSelf: 'flex-end',
    marginVertical: hp(3),
    marginRight: wp(2.5),
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
    marginLeft: wp(4),
  },
  notAddedExpenseView: {
    height: hp(20),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: Colors.darkGrey,
    borderStyle: 'dashed',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(15),
  },
  notAddedExpenseText: {
    color: Colors.lightGreyText,
    fontSize: Size(1.7),
    textAlign: 'center',
    paddingHorizontal: wp(1),
  },
});
