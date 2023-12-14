import {Text, Image, StyleSheet, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import {Images} from '../../assets/images';
import {Size, hp, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import {Strings} from '../../assets/strings';
import {useNavigation} from '@react-navigation/native';

export const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Auth');
    }, 3000);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      <Text style={styles.txt}>{Strings.SEBET}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {alignSelf: 'center', height: hp(12), width: wp(40)},
  txt: {
    fontSize: Size(2.3),
    color: Colors.primaryLight,
    textAlign: 'center',
  },
});
