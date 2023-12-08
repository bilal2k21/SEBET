import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';
import {Size, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';

const CustomButton = ({
  text,
  onPress,
  size,
  disabled,
  buttonTextStyle,
  overrideStyle,
}) => {
  const getSizeStyle = () => {
    switch (size) {
      case 'customSmall':
        return styles.customSmall;
      case 'small':
        return styles.smallButton;
      case 'large':
        return styles.largeButton;
      default:
        return styles.mediumButton;
    }
  };

  return (
    <LinearGradient
      colors={['#01AA45', '#00702D']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.button}>
      <TouchableOpacity
        style={[
          styles.buttonContent,
          getSizeStyle(),
          disabled && styles.disabledButton,
          overrideStyle,
        ]}
        onPress={onPress}
        disabled={disabled}>
        <Text style={{...styles.buttonText, ...buttonTextStyle}}>{text}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    overflow: 'hidden', // Clip the gradient within the button
    marginVertical: wp(2),
  },
  buttonContent: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', // Set background to transparent to see the gradient
  },
  smallButton: {
    paddingVertical: wp(3),
    paddingHorizontal: wp(2),
    width: wp(40),
    alignSelf: 'center',
  },
  customSmall: {
    paddingVertical: wp(2),
    paddingHorizontal: 12,
    // width: wp(30),
    alignSelf: 'center',
    backgroundColor: Colors.white,
    borderColor: Colors.primaryLight,
    borderWidth: 0.5,
  },
  mediumButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    minWidth: 100,
  },
  largeButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    minWidth: 120,
  },
  disabledButton: {
    opacity: 0.5,
  },
  buttonText: {
    color: Colors.primaryLight,
    fontSize: Size(2.2),
  },
});

export default CustomButton;
