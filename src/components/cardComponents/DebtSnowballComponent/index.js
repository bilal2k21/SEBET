import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Strings} from '../../../assets/strings';
import {Colors} from '../../../assets/colors';
import {hp, wp, Size} from '../../../assets/dimensions';
import {Bar} from 'react-native-progress';
// import {ProgressChart} from 'react-native-chart-kit';

const DebtSnowballComponent = () => {
  const temp = undefined;
  // const temp = 2 / 10;
  const percentage = '40%'; //Use UseState later for updated value

  // const data = [0.6];
  // const chartConfig = {
  //   backgroundGradientFromOpacity: 0,
  //   backgroundGradientToOpacity: 0,
  //   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  // };
  return (
    <LinearGradient
      colors={['#01AA45', '#00702D']}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.gradient}>
      <View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View>
            <Text style={styles.debtSnowball}>{Strings.debtSnowball}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: hp(0.5),
              }}>
              <View
                style={{
                  borderTopWidth: 1,
                  width: wp(35),
                  borderColor: Colors.primaryLight,
                }}
              />
              <View style={styles.smallCircle} />

              <View
                style={{
                  borderTopWidth: 1,
                  width: 5,
                  borderColor: Colors.primaryLight,
                }}
              />
              <View style={styles.circle} />
            </View>
          </View>
          {/* <ProgressChart
            data={data}
            width={75}
            height={75}
            strokeWidth={5}
            radius={33}
            chartConfig={chartConfig}
            hideLegend={true}
          /> */}

          <Text style={styles.noDebt}>
            {temp ? `2/10 ${Strings.paid}` : Strings.noDebt}
          </Text>
        </View>

        {temp ? (
          <View style={styles.bottomView}>
            <Text style={styles.percentage}>{percentage}</Text>
            <Bar
              height={15}
              width={280}
              progress={0.4}
              borderWidth={0}
              borderRadius={10}
              color={Colors.primaryLight}
              unfilledColor={Colors.darkGrey}
              style={{
                alignSelf: 'center',
                marginVertical: hp(0.5),
              }}
            />
            <Text style={styles.debtCleared}>
              {percentage}
              {Strings.debtCleared}
            </Text>
          </View>
        ) : (
          <View>
            <Text style={styles.enterDebt}>{Strings.enterDebt}</Text>
            <TouchableOpacity>
              <Text style={styles.tapToBegin}>{Strings.tapToBegin}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

export default DebtSnowballComponent;

const styles = StyleSheet.create({
  gradient: {
    width: wp(85),
    height: hp(20),
    borderRadius: 20,
    // marginLeft: wp(5),
    padding: wp(4),
  },
  noDebt: {
    fontSize: Size(4),
    fontWeight: '700',
    color: Colors.darkGrey,
    lineHeight: Size(4),
    textAlign: 'right',
  },
  debtSnowball: {
    fontSize: Size(2.5),
    fontWeight: '700',
    color: Colors.primaryLight,
    lineHeight: Size(2.7),
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
  enterDebt: {
    fontSize: Size(1.7),
    fontWeight: '500',
    color: Colors.primaryLight,
    textAlign: 'center',
    marginTop: hp(0.7),
  },
  tapToBegin: {
    color: Colors.greenText,
    fontSize: Size(1.55),
    textAlign: 'center',
  },
  bottomView: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // marginTop: hp(3),
  },
  percentage: {
    color: Colors.primaryLight,
    fontSize: Size(3),
    lineHeight: hp(3.2),
    fontWeight: '700',
    textAlign: 'center',
  },
  debtCleared: {
    fontSize: Size(1.5),
    fontWeight: '700',
    color: Colors.primaryLight,
    textAlign: 'center',
  },
});
