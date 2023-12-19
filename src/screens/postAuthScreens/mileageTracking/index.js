import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Images} from '../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';

const MileageTracking = () => {
  let change = 'green';
  // let change = 'red';
  let gradientColors = [Colors.green1, Colors.green2];
  let innerGradientColors = [Colors.green2, Colors.green1];
  let imageSource = Images.blackTriangle;

  if (change !== 'green') {
    gradientColors = [Colors.red1, Colors.red2];
    innerGradientColors = [Colors.red2, Colors.red1];

    imageSource = Images.blackSquare;
  }

  const userDataArray = [
    {
      distance: '200 m',
      startTime: Strings.timeSample,
      endTime: Strings.timeSample,
      date: Strings.dateSample2,
    },
    {
      distance: '300 m',
      startTime: Strings.timeSample,
      endTime: Strings.timeSample,
      date: Strings.dateSample2,
    },
    {
      distance: '300 m',
      startTime: Strings.timeSample,
      endTime: Strings.timeSample,
      date: Strings.dateSample2,
    },
  ];

  const renderUserDetails = ({item}) => {
    return (
      <View style={styles.userDetailsView}>
        <Text style={styles.distance}>{item.distance}</Text>

        <View style={styles.startTimeView}>
          <Text style={styles.startTimeTitle}>{Strings.startTime}</Text>
          <Text style={styles.startTimeValue}>{item.startTime}</Text>
        </View>

        <View style={styles.startTimeView}>
          <Text style={styles.startTimeTitle}>{Strings.endTime}</Text>
          <Text style={styles.startTimeValue}>{item.endTime}</Text>
        </View>

        <View style={styles.startTimeView}>
          <Text style={styles.startTimeTitle}>{Strings.date}</Text>
          <Text style={styles.startTimeValue}>{item.date}</Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.mileageTracking} />

      <View style={styles.line} />

      <Text style={styles.september}>{Strings.september}</Text>

      <View style={styles.line} />

      <View style={styles.mileageInfoView}>
        <View style={{height: hp(8.5), justifyContent: 'space-between'}}>
          <Text style={styles.totalMileageText}>{Strings.totalMileage}</Text>
          <Text style={styles.milageValue}>2000 m</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={{height: hp(8.5), justifyContent: 'space-between'}}>
          <Text style={styles.totalMileageText}>{Strings.todayMileage}</Text>
          <Text style={styles.milageValue}>1200 m</Text>
        </View>

        <View style={styles.verticalLine} />

        <View style={{height: hp(8.5), justifyContent: 'space-between'}}>
          <Text style={styles.totalMileageText}>{Strings.lastMileage}</Text>
          <Text style={styles.milageValue}>200 m</Text>
        </View>
      </View>

      <View style={styles.line} />

      <View style={styles.startMilageView}>
        <Text style={styles.startMileageText}>{Strings.startMileage}</Text>

        {/* Gradient Button */}
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
              style={{borderRadius: 30}}>
              <View style={styles.imageView}>
                <Image
                  source={imageSource}
                  style={{
                    height: wp(8),
                    width: wp(8),
                  }}
                  resizeMode="contain"
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <View style={styles.line} />

      <FlatList
        data={userDataArray}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderUserDetails}
      />
    </SafeAreaView>
  );
};

export default MileageTracking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
    paddingTop: hp(2),
  },
  line: {
    width: wp(100),
    borderTopWidth: 2,
    borderColor: Colors.darkGrey,
    marginVertical: hp(3),
  },
  september: {
    fontSize: Size(2.5),
    fontWeight: '600',
    color: Colors.redText,
    textAlign: 'center',
  },
  mileageInfoView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp(10),
  },
  totalMileageText: {
    // fontSize: Size(1.7),
    fontWeight: '500',
    color: Colors.primaryLight,
    textAlign: 'center',
  },
  milageValue: {
    fontSize: Size(2),
    fontWeight: '500',
    color: Colors.green1,
  },
  verticalLine: {
    height: hp(11),
    borderLeftWidth: 2,
    borderColor: Colors.darkGrey,
  },
  startMilageView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  startMileageText: {
    fontSize: Size(1.8),
    fontWeight: '500',
    color: Colors.primaryLight,
  },
  gradient: {
    width: wp(18),
    height: wp(18),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  imageView: {
    width: wp(13),
    height: wp(13),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  userDetailsView: {
    width: wp(100),
    height: hp(7),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: wp(3.5),
    borderBottomWidth: 2,
    borderColor: Colors.darkGrey,
  },
  distance: {
    fontSize: Size(1.8),
    fontWeight: '700',
    color: Colors.green1,
  },
  startTimeView: {
    // alignItems: 'center',
  },
  startTimeTitle: {
    fontWeight: '500',
    color: Colors.primaryLight,
  },
  startTimeValue: {
    color: Colors.lightGreyText,
  },
});
