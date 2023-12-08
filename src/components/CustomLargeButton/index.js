import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View} from 'react-native';
import {Size, hp, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native-svg';
import {Images} from '../../assets/images';

const CustomLargeButton = ({text, onPress, overrideStyle}) => {
  return (
    <LinearGradient
      colors={['#01AA45', '#00702D']} // #ED3237 #A01D20
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <TouchableOpacity
        style={[styles.button, overrideStyle]}
        onPress={onPress}>
        <LinearGradient
          colors={['#00702D', '#01AA45']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 30}}>
          <View style={styles.imageView}>
            <Image
              source={Images.swap}
              style={{
                height: 20,
                width: 20,
                borderWidth: 1,
                //  tintColor: 'blue'
              }}
              resizeMode="contain"
            />
          </View>
        </LinearGradient>
        <Text style={styles.buttonText}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 10,
    // overflow: 'hidden', // Clip the gradient within the button
  },
  button: {
    borderWidth: 1,
    borderColor: 'red',
    // width: wp(70),
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageView: {
    width: wp(15),
    height: wp(15),
    backgroundColor: 'transparent',
    borderRadius: 30,
    marginRight: 100,
    maxWidth: 100,
  },
  buttonText: {
    color: Colors.primaryLight,
    fontSize: Size(2.2),
    fontWeight: '500',
  },
});

export default CustomLargeButton;
