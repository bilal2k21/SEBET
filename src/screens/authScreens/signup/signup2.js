import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../../assets/colors';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Strings} from '../../../assets/strings';
import {Images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomHeader from '../../../components/CustomHeader';

export default function Signup2({navigation}) {
  const handleStart = () => {
    navigation.navigate('Dashboard');
  };

  const [zipCode, setZipCode] = useState('');
  const [city, setCity] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [referralCode, setReferralCode] = useState('');

  const [stateName, setStateName] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Punjab', value: 'punjab'},
    {label: 'Sindh', value: 'sindh'},
    {label: 'Balochistan', value: 'balochistan'},
    {label: 'KPK', value: 'kpk'},
  ]);
  // DropDownPicker.setTheme('DARK');
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader />
      <ScrollView>
        <View style={styles.upperView}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.aFewMore}>{Strings.aFewMore}</Text>
          <Text style={styles.detailsToBegin}>{Strings.detailsToBegin}</Text>
        </View>
        <View style={styles.middleView}>
          <View style={styles.stateView}>
            <View style={{width: '48%'}}>
              <DropDownPicker
                style={{
                  backgroundColor: Colors.darkGrey,
                  borderWidth: 0,
                }}
                open={open}
                value={stateName}
                items={items}
                setOpen={setOpen}
                setValue={setStateName}
                setItems={setItems}
                placeholder="State"
                textStyle={{
                  color: Colors.primaryGreen,
                }}
                arrowIconStyle={{tintColor: Colors.primaryGreen}}
                listItemContainerStyle={{
                  backgroundColor: Colors.darkGrey,
                }}
                tickIconStyle={{tintColor: Colors.primaryGreen}}
              />
            </View>
            <View style={{width: '48%'}}>
              <CustomTextInput
                placeholder={Strings.zipCode}
                value={zipCode}
                onChangeText={setZipCode}
              />
            </View>
          </View>
          <CustomTextInput
            placeholder={Strings.city}
            value={city}
            onChangeText={setCity}
          />
          <CustomTextInput
            placeholder={Strings.streetAddress}
            value={streetAddress}
            onChangeText={setStreetAddress}
            multilineHeight={hp(11)} // Set the desired height for multiline input
          />
          <Image
            source={Images.horizontalDots}
            resizeMode="contain"
            style={styles.horizontalDots}
          />
          <CustomTextInput
            placeholder={Strings.referralCode}
            value={referralCode}
            onChangeText={setReferralCode}
            // isSecure={true}
          />
        </View>
        <View style={styles.bottomView}>
          <CustomButton
            buttonTextStyle={{fontSize: Size(1.6)}}
            text={Strings.start}
            size={'large'}
            onPress={handleStart}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    alignItems: 'center',
    paddingTop: hp(2),
  },
  upperView: {
    width: '90%',
    marginTop: hp(7),
  },
  logo: {height: hp(8), width: wp(25)},
  aFewMore: {
    color: Colors.primaryRed,
    fontSize: Size(4),
    fontWeight: '600',
  },
  detailsToBegin: {
    color: Colors.primaryLight,
    fontSize: Size(4),
    fontWeight: '600',
  },
  middleView: {
    width: wp(90),
    marginVertical: hp(3),
  },
  stateView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  horizontalDots: {
    height: hp(5),
    width: wp(75),
    alignSelf: 'center',
  },
  bottomView: {
    width: wp(90),
  },
});
