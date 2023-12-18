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
import IIcon from 'react-native-vector-icons/Ionicons';

const Profile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageView}>
        <CustomHeader title={Strings.profile} />
        <Image
          source={Images.profile}
          style={styles.profileImage}
          // resizeMode="center"
        />
      </View>

      <Text style={styles.userName}>{Strings.userName}</Text>

      <Text style={styles.userDetails}>{Strings.emailSample}</Text>
      <Text style={styles.userDetails}>{Strings.mobileNoSample}</Text>
      <Text style={styles.userDetails}>{Strings.addressSample}</Text>

      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image
            source={Images.pencil}
            style={styles.pencil}
            resizeMode="contain"
          />
          <Text style={styles.greenText}>{Strings.editProfile}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.line} />

      <Text style={styles.yourReferralCode}>{Strings.yourReferralCode}</Text>

      <View style={styles.dashedView}>
        <Text style={styles.referralCodeSample}>
          {Strings.referralCodeSample}
        </Text>
      </View>

      <View style={styles.agreementView}>
        <TouchableOpacity>
          <Text style={styles.referralAgreement}>
            {Strings.referralAgreement}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.referralAgreement}>{Strings.myReferrals}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>{Strings.logout}</Text>
        <View style={styles.forwardArrowView}>
          <Image
            source={Images.forwardArrow}
            style={styles.forwardArrow}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  imageView: {
    width: wp(100),
    height: hp(28.5),
    backgroundColor: Colors.darkGrey,
    paddingTop: hp(2),
  },
  profileImage: {
    width: wp(80),
    height: hp(20),
    alignSelf: 'center',
    marginTop: hp(2),
    marginLeft: wp(7),
  },
  userName: {
    color: Colors.primaryLight,
    fontSize: Size(2.6),
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: hp(1),
  },
  userDetails: {
    color: Colors.primaryLight,
    textAlign: 'center',
  },
  greenView: {
    width: wp(35),
    alignSelf: 'flex-end',
    marginVertical: hp(2),
    marginRight: wp(2.5),
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencil: {
    width: 30,
    height: 30,
  },
  greenText: {
    fontSize: Size(1.7),
    color: Colors.green1,
    marginLeft: wp(4),
  },
  line: {
    width: wp(90),
    borderTopWidth: 2,
    borderColor: Colors.darkGrey,
    alignSelf: 'center',
    marginBottom: hp(3),
  },
  yourReferralCode: {
    color: Colors.primaryLight,
    marginLeft: wp(10),
  },
  dashedView: {
    height: hp(7),
    width: wp(80),
    borderWidth: 3,
    borderColor: Colors.darkGrey,
    borderStyle: 'dashed',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: hp(2),
  },
  referralCodeSample: {
    color: Colors.red1,
    fontSize: Size(3),
    fontWeight: '700',
  },
  agreementView: {
    width: wp(80),
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  referralAgreement: {
    color: Colors.green1,
    fontWeight: '500',
  },
  logoutButton: {
    width: wp(25),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginRight: wp(10),
    marginTop: hp(20),
  },
  logoutText: {
    fontSize: Size(1.7),
    color: Colors.redText,
  },
  forwardArrowView: {
    width: wp(7),
    height: wp(6),
    borderRadius: 5,
    backgroundColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  forwardArrow: {
    width: 15,
    height: 8,
  },
});
