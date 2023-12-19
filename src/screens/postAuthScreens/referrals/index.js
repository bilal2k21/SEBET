import {View, StyleSheet, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import IIcon from 'react-native-vector-icons/Ionicons';

const Referrals = () => {
  const userDataArray = [
    {
      userName: Strings.userName,
      email: Strings.emailSample,
      joiningDate: Strings.dateSample,
    },
    {
      userName: Strings.userName,
      email: Strings.emailSample,
      joiningDate: Strings.dateSample,
    },
    {
      userName: Strings.userName,
      email: Strings.emailSample,
      joiningDate: Strings.dateSample,
      temp: 1,
    },
  ];

  const renderUserDetails = ({item}) => {
    const userNameColor =
      item.temp === undefined ? Colors.green1 : Colors.redText;
    return (
      <View style={styles.userDetailsView}>
        <Text style={[styles.userName, {color: userNameColor}]}>
          {item.userName}
        </Text>

        <View style={styles.emailView}>
          <Text style={styles.emailTitle}>Email</Text>
          <Text style={styles.emailValue}>{item.email}</Text>
        </View>

        <View style={styles.emailView}>
          <Text style={styles.emailTitle}>Joining Date</Text>
          <Text style={styles.emailValue}>{item.joiningDate}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.referrals} />

      <View style={styles.line} />

      <View style={styles.statusView}>
        <View style={styles.greenView} />
        <Text style={styles.active}>{Strings.active}</Text>
        <View style={styles.redView} />
        <Text style={styles.active}>{Strings.inactive}</Text>
      </View>

      <FlatList
        data={userDataArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUserDetails}
      />
    </SafeAreaView>
  );
};

export default Referrals;

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
  statusView: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
  },
  greenView: {
    width: wp(4),
    height: wp(4),
    borderRadius: 5,
    backgroundColor: Colors.green1,
  },
  active: {
    color: Colors.primaryLight,
    fontWeight: '600',
    marginLeft: wp(2),
  },
  redView: {
    width: wp(4),
    height: wp(4),
    borderRadius: 5,
    backgroundColor: Colors.red1,
    marginLeft: wp(10),
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
  userName: {
    fontSize: Size(1.8),
    fontWeight: '700',
    // color: Colors.green1,
  },
  emailView: {
    alignItems: 'center',
  },
  emailTitle: {
    fontWeight: '500',
    color: Colors.primaryLight,
  },
  emailValue: {
    color: Colors.lightGreyText,
  },
});
