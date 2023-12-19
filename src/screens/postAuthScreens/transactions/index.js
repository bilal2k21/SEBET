import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {hp, wp} from '../../../assets/dimensions';

const Transactions = () => {
  const transactionsDataArray = [
    {
      amount: Strings.amount,
      date: Strings.dateSample,
      type: Strings.debt_Snowball,
    },
    {
      amount: Strings.amount,
      date: Strings.dateSample,
      type: Strings.debt_Snowball,
    },
    {
      amount: Strings.amount,
      date: Strings.dateSample,
      type: Strings.debt_Snowball,
    },
  ];

  const renderTransactionsDetails = ({item}) => {
    return (
      <View style={styles.userDetailsView}>
        <View style={styles.amountView}>
          <Text style={styles.amountTitle}>{Strings.amount}</Text>
          <Text style={styles.amountValue}>$500</Text>
        </View>

        <View style={styles.amountView}>
          <Text style={styles.amountTitle}>{Strings.date}</Text>
          <Text style={styles.amountValue}>{item.date}</Text>
        </View>

        <View style={styles.amountView}>
          <Text style={styles.amountTitle}>{Strings.type}</Text>
          <Text style={styles.amountValue}>{item.type}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.transactions} />

      <View style={styles.line} />

      <FlatList
        data={transactionsDataArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTransactionsDetails}
      />
    </SafeAreaView>
  );
};

export default Transactions;

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
  userDetailsView: {
    width: wp(100),
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3.5),
    borderBottomWidth: 2,
    borderColor: Colors.darkGrey,
  },
  amountView: {
    alignItems: 'center',
  },
  amountTitle: {
    fontWeight: '500',
    color: Colors.primaryLight,
  },
  amountValue: {
    color: Colors.lightGreyText,
  },
});
