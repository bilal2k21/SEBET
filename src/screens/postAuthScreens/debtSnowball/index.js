import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Images} from '../../../assets/images';
import {Bar} from 'react-native-progress';

const DebtSnowball = () => {
  // Variable for conditional rendering
  let temp = 1;
  // let temp = undefined;

  const DebtDetailsData = [
    {
      name: Strings.citiBank,
      balance: '$5,000.00',
      interestRate: '18%',
      minimumPayment: '$75.00',
      yourPayment: '$75.00',
    },
    {
      name: Strings.dollarBankCard,
      balance: '$8,000.00',
      interestRate: '10%',
      minimumPayment: '$50.00',
      yourPayment: '$50.00',
    },
    {
      name: Strings.gbmc,
      balance: '$4,500.00',
      interestRate: '0%',
      minimumPayment: '$150.00',
      yourPayment: '$225.00',
    },
    // Add more data items as needed
  ];

  const renderItem = ({item, index}) => (
    <View>
      <View style={styles.debtItemView}>
        {Object.values(item).map((value, i) => (
          <Text key={i} style={styles.debtItemName}>
            {value}
          </Text>
        ))}
      </View>
      {index < DebtDetailsData.length - 1 && <View style={styles.separator} />}
    </View>
  );

  const keyExtractor = (item, index) => `${index}`;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.debt_Snowball} />

      <View style={styles.line} />

      <Text style={styles.enterDebtsHere}>{Strings.enterDebtsHere}</Text>

      <View style={styles.line} />

      {temp ? (
        <View style={styles.extraAmountView}>
          <TouchableOpacity style={styles.editButton}>
            <Image
              source={Images.pencil}
              style={styles.add}
              resizeMode="contain"
            />
            <Text style={styles.editButtonText}>$25</Text>
          </TouchableOpacity>

          <Text style={styles.extraAmountToDebt}>
            {Strings.extraAmountToDebt}
          </Text>
        </View>
      ) : (
        <View style={styles.greenView}>
          <TouchableOpacity style={styles.greenButton}>
            <Image
              source={Images.add}
              style={styles.add}
              resizeMode="contain"
            />
            <Text style={styles.greenText}>{Strings.extraIncome}</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.line} />

      {/* <ScrollView> */}
      <View style={styles.titlesView}>
        <Text style={[styles.titlesText, temp && {color: Colors.primaryLight}]}>
          {Strings.debtName}
        </Text>
        <Text style={[styles.titlesText, temp && {color: Colors.primaryLight}]}>
          {Strings.yourBalance}
        </Text>
        <Text style={[styles.titlesText, temp && {color: Colors.primaryLight}]}>
          {Strings.interestRate}
        </Text>
        <Text style={[styles.titlesText, temp && {color: Colors.primaryLight}]}>
          {Strings.minimumPayment}
        </Text>
        <Text style={[styles.titlesText, temp && {color: Colors.primaryLight}]}>
          {Strings.yourPayment}
        </Text>
      </View>

      {temp && (
        <FlatList
          data={DebtDetailsData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          contentContainerStyle={styles.flatListView}
        />
      )}

      <View
        style={
          temp
            ? [styles.totalView, {backgroundColor: Colors.red1}]
            : styles.totalView
        }>
        <Text
          style={
            temp
              ? [styles.totalText, {color: Colors.primaryLight}]
              : styles.totalText
          }>
          {Strings.total}
        </Text>
        <Text
          style={
            temp
              ? [styles.totalText, {color: Colors.primaryLight}]
              : styles.totalText
          }>
          ${temp ? '23,855.32' : '00.32'}
        </Text>
        <Text
          style={
            temp
              ? [styles.totalText, {color: Colors.primaryLight}]
              : styles.totalText
          }>
          {temp ? ' ' : '00.00'}
        </Text>
        <Text
          style={
            temp
              ? [styles.totalText, {color: Colors.primaryLight}]
              : styles.totalText
          }>
          ${temp ? '75.00' : '00.00'}
        </Text>
        <Text
          style={
            temp
              ? [styles.totalText, {color: Colors.primaryLight}]
              : styles.totalText
          }>
          ${temp ? '75.00' : '00.00'}
        </Text>
      </View>

      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image source={Images.add} style={styles.add} resizeMode="contain" />
          <Text style={styles.greenText}>{Strings.addADebt}</Text>
        </TouchableOpacity>
      </View>

      {temp ? (
        <View style={styles.progressMainView}>
          <View style={styles.firstView}>
            <Text style={styles.gbmc}>{Strings.gbmc}</Text>
            <View style={styles.progressBarView}>
              <Text style={styles.progressBarText}>$600</Text>
              <Bar
                height={5}
                width={100}
                progress={temp ? 0.85 : 0}
                borderWidth={0}
                borderRadius={10}
                color={Colors.green1}
                unfilledColor={Colors.darkGrey}
                style={{
                  alignSelf: 'center',
                  marginHorizontal: hp(1),
                }}
              />
              <Text style={styles.progressBarText}>$700</Text>
            </View>
            <TouchableOpacity style={styles.greaterThan}>
              <Image source={Images.greaterThan} resizeMode="center" />
            </TouchableOpacity>
          </View>

          <View style={styles.firstView}>
            <Text style={styles.gbmc}>{Strings.cITIBANK}</Text>
            <View style={styles.progressBarView}>
              <Text style={styles.progressBarText}>$2500</Text>
              <Bar
                height={5}
                width={100}
                progress={temp ? 0.5 : 0}
                borderWidth={0}
                borderRadius={10}
                color={Colors.primaryYellow}
                unfilledColor={Colors.darkGrey}
                style={{
                  alignSelf: 'center',
                  marginHorizontal: hp(1),
                }}
              />
              <Text style={styles.progressBarText}>$5000</Text>
            </View>
            <TouchableOpacity style={styles.greaterThan}>
              <Image source={Images.greaterThan} resizeMode="center" />
            </TouchableOpacity>
          </View>

          <View style={styles.firstView}>
            <Text style={styles.gbmc}>{Strings.carLoan}</Text>
            <View style={styles.progressBarView}>
              <Text style={styles.progressBarText}>$5000</Text>
              <Bar
                height={5}
                width={100}
                progress={temp ? 0.21 : 0}
                borderWidth={0}
                borderRadius={10}
                color={Colors.red1}
                unfilledColor={Colors.darkGrey}
                style={{
                  alignSelf: 'center',
                  marginHorizontal: hp(1),
                }}
              />
              <Text style={styles.progressBarText}>$23,855</Text>
            </View>
            <TouchableOpacity style={styles.greaterThan}>
              <Image source={Images.greaterThan} resizeMode="center" />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Image source={Images.oops} style={styles.oops} resizeMode="center" />
          <Text style={styles.noDataFound}>{Strings.noDataFound}</Text>
        </View>
      )}
      {/* </ScrollView> */}
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
    marginVertical: hp(1.5),
  },
  enterDebtsHere: {
    fontSize: Size(1.7),
    color: Colors.primaryLight,
    marginHorizontal: wp(5),
  },
  greenView: {
    alignSelf: 'flex-end',
    marginRight: wp(5),
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
  extraAmountView: {
    width: wp(80),
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  editButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  editButtonText: {
    fontSize: Size(3.3),
    lineHeight: hp(4.2),
    color: Colors.green1,
    marginLeft: wp(3),
  },
  extraAmountToDebt: {
    fontSize: Size(1.7),
    color: Colors.primaryLight,
    textAlign: 'center',
  },
  titlesView: {
    width: wp(95),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titlesText: {
    flex: 1,
    fontSize: Size(1.6),
    fontWeight: '500',
    color: Colors.grayText,
    textAlign: 'center',
  },
  flatListView: {
    width: wp(95),
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  debtItemView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: hp(4),
  },
  debtItemName: {
    flex: 1,
    fontWeight: '400',
    color: Colors.lightGreyText,
    textAlign: 'center',
  },
  separator: {
    width: wp(105),
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: Colors.darkGrey,
    marginVertical: hp(1),
  },
  totalView: {
    width: wp(95),
    height: hp(5),
    flexDirection: 'row',
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: hp(1),
  },
  totalText: {
    fontSize: Size(1.6),
    color: Colors.darkGreyText,
    fontWeight: '600',
  },
  progressMainView: {
    width: wp(100),
    height: hp(24),
    marginTop: hp(2),
  },
  firstView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    borderBottomWidth: 1,
    borderColor: Colors.darkGrey,
  },
  gbmc: {
    color: Colors.primaryLight,
    fontSize: Size(1.7),
    fontWeight: '500',
  },
  progressBarView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBarText: {
    fontWeight: '400',
    color: Colors.lightGreyText,
  },
  greaterThan: {
    height: '100%',
    width: wp(10),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  oops: {
    width: wp(46),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(4),
  },
  noDataFound: {
    fontSize: Size(1.7),
    fontWeight: '300',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(1.5),
  },
});
