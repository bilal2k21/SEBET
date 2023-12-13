import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Strings} from '../../../assets/strings';
import {Colors} from '../../../assets/colors';
import {hp, wp, Size} from '../../../assets/dimensions';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import {Images} from '../../../assets/images';

const SinkingFundComponent = () => {
  const temp = undefined;
  // const temp = 61;

  return (
    <LinearGradient
      colors={['#ED3237', '#A01D20']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={styles.fundPercentage}>
            {temp ? temp : 0}
            {'\n'}%
          </Text>

          <AnimatedCircularProgress
            size={70}
            width={5}
            backgroundWidth={3}
            fill={temp ? temp : 100}
            tintColor="#FFFFFF"
            backgroundColor="#292929"
            rotation={0}
            // onAnimationComplete={() => console.log('onAnimationComplete')}
          >
            {() => (
              <Image
                source={Images.image}
                style={{width: 35, height: 35}}
                resizeMode="contain"
              />
            )}
          </AnimatedCircularProgress>
          <View>
            <Text style={styles.sinkingFund}>{Strings.sinkingFund}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View style={styles.circle} />
              <View
                style={{
                  borderTopWidth: 1,
                  width: 5,
                  borderColor: Colors.primaryLight,
                }}
              />
              <View style={styles.smallCircle} />
              <View
                style={{
                  borderTopWidth: 1,
                  width: wp(35),
                  borderColor: Colors.primaryLight,
                }}
              />
            </View>
          </View>
        </View>

        {temp ? (
          <View style={styles.bottomView}>
            <Text style={styles.needsAdded}>{Strings.needsAdded}</Text>
            <Text style={styles.price}>$5700</Text>
          </View>
        ) : (
          <View>
            <Text style={styles.advanceSavings}>{Strings.advanceSavings}</Text>
            <TouchableOpacity>
              <Text style={styles.getStarted}>{Strings.getStarted}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default SinkingFundComponent;

const styles = StyleSheet.create({
  gradient: {
    width: wp(85),
    height: hp(20),
    borderRadius: 20,
    // marginLeft: wp(5),
    padding: wp(4),
  },
  fundPercentage: {
    fontSize: Size(4),
    fontWeight: '700',
    color: Colors.darkGrey,
    lineHeight: Size(4),
  },
  sinkingFund: {
    fontSize: Size(2.5),
    fontWeight: '700',
    color: Colors.primaryLight,
    lineHeight: Size(2.5),
    textAlign: 'right',
  },
  circle: {
    width: wp(3),
    height: wp(3),
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
  },
  smallCircle: {
    width: wp(2.3),
    height: wp(2.3),
    borderRadius: 8,
    backgroundColor: Colors.primaryLight,
  },
  advanceSavings: {
    fontSize: Size(1.75),
    fontWeight: '500',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(0.7),
  },
  getStarted: {
    color: Colors.orangeText,
    fontSize: Size(1.55),
    textAlign: 'center',
  },
  bottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(3),
  },
  needsAdded: {
    fontSize: Size(1.55),
    fontWeight: '500',
    color: Colors.primaryLight,
  },
  price: {
    fontSize: Size(2.5),
    fontWeight: '700',
    color: Colors.primaryLight,
  },
});
