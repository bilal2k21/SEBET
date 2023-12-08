import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Images} from '../../../assets/images';
import {hp, wp} from '../../../assets/dimensions';
import {Colors} from '../../../assets/colors';
import MonthlyBudgetComponent from '../../../components/cardComponents/MonthlyBudgetComponent';
import SinkingFundComponent from '../../../components/cardComponents/SinkingFundComponent';
import DebtSnowballComponent from '../../../components/cardComponents/DebtSnowballComponent';
// import Carousel from 'react-native-snap-carousel';
import CustomLargeButton from '../../../components/CustomLargeButton';
import {Strings} from '../../../assets/strings';

const Dashboard = () => {
  const carouselRef = useRef(null);

  const data = [
    {component: <MonthlyBudgetComponent />},
    {component: <DebtSnowballComponent />},
    {component: <SinkingFundComponent />},
  ];

  const renderItem = ({item}) => {
    return <View style={styles.slide}>{item.component}</View>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{width: wp(7)}}>
        <Image
          source={Images.drawerIcon}
          style={styles.drawerIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.line} />
      {/* <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        height={hp(20)}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        // layout={'default'} // default, stack, tinder
        // autoplay={true}
        // autoplayInterval={2000}
        // loop={true}
        inactiveSlideScale={1}
        // inactiveSlideOpacity={0.1}
      /> */}
      <CustomLargeButton text={Strings.transactions} />
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryDark,
  },
  drawerIcon: {
    width: wp(7),
    height: hp(3),
    marginLeft: wp(5),
    marginTop: hp(2),
  },
  line: {
    width: wp(100),
    borderTopWidth: 2,
    borderColor: Colors.darkGrey,
    marginVertical: hp(3),
  },
});
