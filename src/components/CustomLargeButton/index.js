import React from 'react';
import {TouchableOpacity, Text, StyleSheet, View, Image} from 'react-native';
import {Size, hp, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
import {Images} from '../../assets/images';

const CustomLargeButton = ({text}) => {
  // Define default gradient colors and image for the button
  let gradientColors = ['#01AA45', '#00702D'];
  let innerGradientColors = ['#00702D', '#01AA45'];

  let imageSource = Images.swap;

  if (text.toLowerCase() === 'reports') {
    gradientColors = ['#ED3237', '#A01D20'];
    innerGradientColors = ['#A01D20', '#ED3237'];

    imageSource = Images.report;
  }
  return (
    <LinearGradient
      colors={gradientColors}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <TouchableOpacity style={styles.button}>
        <LinearGradient
          colors={innerGradientColors}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}
          style={{borderRadius: 30, marginRight: 20}}>
          <View style={styles.imageView}>
            <Image
              source={imageSource}
              style={{
                height: wp(10),
                width: wp(10),
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
    marginTop: hp(0.5),
    marginBottom: hp(1.5),
    borderRadius: 20,
    width: wp(90),
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageView: {
    width: wp(15),
    height: wp(15),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primaryLight,
    fontSize: Size(2.2),
    fontWeight: '500',
  },
});

export default CustomLargeButton;
