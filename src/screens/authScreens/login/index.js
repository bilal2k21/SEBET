import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {Colors} from '../../../assets/colors';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Strings} from '../../../assets/strings';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {Images} from '../../../assets/images';

export default function Login({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const forgotPress = () => {
  //   navigation.navigate('ForgotPassword');
  // };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView>
        <View style={styles.upperView}>
          <Image
            source={Images.logo}
            resizeMode="contain"
            style={styles.logo}
          />
          <Text style={styles.helloAgain}>{Strings.helloAgain}</Text>
          <Text style={styles.welcomeBack}>{Strings.welcomeBack}</Text>
        </View>
        <View style={styles.middleView}>
          <CustomTextInput
            placeholder={Strings.email}
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder={Strings.password}
            value={password}
            onChangeText={setPassword}
            // isSecure={true}
          />
        </View>
        <View style={styles.bottomView}>
          <CustomButton
            buttonTextStyle={{fontSize: Size(1.6)}}
            text={Strings.sign_In}
            size={'large'}
            // onPress={handleLogin}
          />
          <View style={styles.horizontalView}>
            <TouchableOpacity
            // onPress={forgotPress}
            >
              <Text style={styles.forgot}>{Strings.forgotPassword}</Text>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={forgotPress}
            >
              <Text style={styles.signup}>{Strings.signup}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperView: {
    width: '90%',
  },
  logo: {height: hp(8), width: wp(25)},
  helloAgain: {
    color: Colors.primaryRed,
    fontSize: Size(4),
    fontWeight: '600',
  },
  welcomeBack: {
    color: Colors.primaryLight,
    fontSize: Size(4),
    fontWeight: '600',
  },
  middleView: {
    width: wp(90),
    marginVertical: hp(3),
  },
  bottomView: {
    width: wp(90),
  },
  horizontalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgot: {
    color: Colors.primaryRed,
    fontWeight: '500',
  },
  signup: {
    color: Colors.primaryGreen,
    fontWeight: '500',
  },
});
