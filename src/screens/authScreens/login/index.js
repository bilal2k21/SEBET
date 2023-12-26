import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import {Colors} from '../../../assets/colors';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Strings} from '../../../assets/strings';
import {Images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import auth from '@react-native-firebase/auth';
import {LogBox} from 'react-native';

export default function Login({navigation}) {
  LogBox.ignoreAllLogs();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Check if passwords is empty
    if (email === '' || password === '') {
      ToastAndroid.show(
        'Email and password cannot be empty',
        ToastAndroid.SHORT,
      );
      return;
    }

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account loggedin!');
        ToastAndroid.show('Logged in successfully', ToastAndroid.SHORT);
        navigation.navigate('Dashboard');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
          console.log('That email address is invalid!');
        }
        if (error.code === 'auth/invalid-credential') {
          ToastAndroid.show('Invalid credential', ToastAndroid.SHORT);
          console.log('Invalid credential');
        }
        console.error(error);
      });
  };

  // const forgotPress = () => {
  //   navigation.navigate('ForgotPassword');
  // };

  const handleSignup = () => {
    navigation.navigate('Signup');
  };

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
            onPress={handleSignIn}
          />
          <View style={styles.horizontalView}>
            <TouchableOpacity
            // onPress={forgotPress}
            >
              <Text style={styles.forgot}>{Strings.forgotPassword}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignup}>
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
