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

const CustomCategories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.customCategories} />
      <View style={styles.line} />

      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image source={Images.add} style={styles.add} resizeMode="contain" />
          <Text style={styles.greenText}>{Strings.addCategory}</Text>
        </TouchableOpacity>
      </View>
      <Image source={Images.oops} style={styles.oops} resizeMode="center" />
      <Text style={styles.noDataFound}>{Strings.noDataFound}</Text>
    </SafeAreaView>
  );
};

export default CustomCategories;

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
  greenView: {
    width: wp(37),
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
  oops: {
    width: wp(46),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(20),
  },
  noDataFound: {
    fontSize: Size(1.7),
    fontWeight: '300',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(1.5),
  },
});
