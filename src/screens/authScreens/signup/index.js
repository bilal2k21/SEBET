import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  Image,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {Colors} from '../../../assets/colors';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Strings} from '../../../assets/strings';
import CustomButton from '../../../components/CustomButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {Images} from '../../../assets/images';
import CustomHeader from '../../../components/CustomHeader';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

export default function Signup({navigation}) {
  const handleSignup = async () => {
    // Check if input fields are empty
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      phone === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      ToastAndroid.show('Fill the empty fields', ToastAndroid.SHORT);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      ToastAndroid.show(
        'Mismatch password & confirm password',
        ToastAndroid.SHORT,
      );
      return;
    }

    // Continue with user registration
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('Account created successfully');
      ToastAndroid.show('Account created successfully', ToastAndroid.SHORT);

      //Save data to firestore
      await firestore().collection('users').doc(auth().currentUser.uid).set({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      });
      console.log('Data inserted successfully');
      ToastAndroid.show('Data inserted successfully', ToastAndroid.LONG);

      navigation.navigate('Signup2');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        ToastAndroid.show('Email already used', ToastAndroid.SHORT);
        console.log('That email address is already in use!');
      } else if (error.code === 'auth/invalid-email') {
        ToastAndroid.show('Invalid email', ToastAndroid.SHORT);
        console.log('That email address is invalid!');
      } else if (error.code === 'auth/weak-password') {
        ToastAndroid.show('Weak password', ToastAndroid.SHORT);
        console.log('The password is weak!');
      }

      console.error('Error during user registration:', error);
    }
  };
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          <Text style={styles.hello}>{Strings.hello}</Text>
          <Text style={styles.signupToGetStart}>
            {Strings.signupToGetStart}
          </Text>
        </View>
        <View style={styles.middleView}>
          <View style={styles.nameView}>
            <View style={{width: '48%'}}>
              <CustomTextInput
                placeholder={Strings.firstName}
                value={firstName}
                onChangeText={setFirstName}
              />
            </View>
            <View style={{width: '48%'}}>
              <CustomTextInput
                placeholder={Strings.lastName}
                value={lastName}
                onChangeText={setLastName}
              />
            </View>
          </View>
          <CustomTextInput
            placeholder={Strings.email}
            value={email}
            onChangeText={setEmail}
          />
          <CustomTextInput
            placeholder={Strings.phone}
            value={phone}
            onChangeText={setPhone}
          />
          <CustomTextInput
            placeholder={Strings.password}
            value={password}
            onChangeText={setPassword}
            // isSecure={true}
          />
          <CustomTextInput
            placeholder={Strings.confirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            // isSecure={true}
          />
        </View>
        <View style={styles.bottomView}>
          <CustomButton
            buttonTextStyle={{fontSize: Size(1.6)}}
            text={Strings.sign_Up}
            size={'large'}
            onPress={handleSignup}
            // onPress={handleFirestore}
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
  hello: {
    color: Colors.primaryRed,
    fontSize: Size(4),
    fontWeight: '600',
  },
  signupToGetStart: {
    color: Colors.primaryLight,
    fontSize: Size(4),
    fontWeight: '600',
  },
  middleView: {
    width: wp(90),
    marginVertical: hp(3),
  },
  nameView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomView: {
    width: wp(90),
  },
});
