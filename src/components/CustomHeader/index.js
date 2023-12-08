import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import IIcon from 'react-native-vector-icons/Ionicons';
import {Size, hp, wp} from '../../assets/dimensions';
import {Colors} from '../../assets/colors';
import LinearGradient from 'react-native-linear-gradient';
// import {useNavigation} from '@react-navigation/native';

export default function CustomHeader(props) {
  // const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <LinearGradient
        colors={['#ED3237', '#A01D20']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.gradient}>
        <TouchableOpacity
          style={styles.redView}
          // onPress={() => navigation.goBack()}
        >
          <IIcon
            color={Colors.primaryLight}
            name="arrow-back"
            size={Size(2.5)}
          />
        </TouchableOpacity>
      </LinearGradient>

      <Text style={styles.titleStyle}>{props?.title}</Text>

      <View style={styles.blankView} />
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  gradient: {
    borderRadius: 10,
    overflow: 'hidden', // Clip the gradient within the button
  },
  redView: {
    width: wp(10),
    height: wp(10),
    // backgroundColor: Colors.primaryRed,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: Size(2.6),
    fontWeight: 'bold',
    color: Colors.primaryLight,
    alignSelf: 'center',
  },
  blankView: {
    width: wp(10),
  },
});
