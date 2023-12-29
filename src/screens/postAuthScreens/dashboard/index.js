import {
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Images} from '../../../assets/images';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Colors} from '../../../assets/colors';
import {Strings} from '../../../assets/strings';
import MonthlyBudgetComponent from '../../../components/cardComponents/MonthlyBudgetComponent';
import SinkingFundComponent from '../../../components/cardComponents/SinkingFundComponent';
import DebtSnowballComponent from '../../../components/cardComponents/DebtSnowballComponent';
import CustomLargeButton from '../../../components/CustomLargeButton';
import Carousel from 'react-native-snap-carousel';
import DropDownPicker from 'react-native-dropdown-picker';
import {LineChart} from 'react-native-chart-kit';
import {useNavigation} from '@react-navigation/native';

const Dashboard = () => {
  const navigation = useNavigation();
  const drawerNavigation = useNavigation();

  // For horizontal cards
  const carouselRef = useRef(null);
  const data = [
    {component: <MonthlyBudgetComponent />},
    {component: <DebtSnowballComponent />},
    {component: <SinkingFundComponent />},
  ];
  const renderItem = ({item}) => {
    return <View style={styles.slide}>{item.component}</View>;
  };

  // For year pick
  const [year, setYear] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: '2023', value: '2023'},
    {label: '2022', value: '2022'},
    {label: '2021', value: '2021'},
    {label: '2020', value: '2020'},
    {label: '2019', value: '2019'},
    {label: '2018', value: '2018'},
  ]);

  // For chart
  const months = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [30, 20, 55, 60, 50, 52, 50, 54, 52, 55, 50, 55],
        color: () => `rgba(255, 255, 255, 1)`, // White color for Income
        strokeWidth: 2,
      },
      {
        data: [18, 13, 18, 25, 22, 12, 25, 55, 75, 65, 73, 71], // Savings data
        color: () => `rgba(1, 170, 69, 1)`, // Green color for savings
        strokeWidth: 3.75,
      },
      {
        data: [20, 22, 30, 28, 35, 55, 60, 58, 80, 78, 83, 85], // Expenses data
        color: () => `rgba(237, 50, 55,1)`, // Red color for expenses
        strokeWidth: 3.75,
      },
    ],
    // legend: ['Income', 'Savings', 'Expenses'],
  };

  const chartConfig = {
    backgroundGradientFrom: Colors.darkGrey,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: Colors.darkGrey,
    backgroundGradientToOpacity: 0,
    color: () => `rgba(255, 255, 255, 1)`, // Color for the labels
    // strokeWidth: 2,
    // barPercentage: 0.5,
    // propsForDots: {r: '3'},
    // propsForBackgroundLines: {stroke: 'transparent'}, // Set background line color to transparent
    propsForLabels: {fontSize: Size(1.5)},
  };

  const handleDataPointClick = ({value, dataset, getColor}) => {
    console.log('Clicked Data Point:', {value, dataset, color: getColor()});
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={{width: wp(7)}}
        onPress={() => drawerNavigation.openDrawer()}>
        <Image
          source={Images.drawerIcon}
          style={styles.drawerIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.line} />
      <View style={styles.carouselView}>
        <Carousel
          ref={carouselRef}
          data={data}
          renderItem={renderItem}
          height={hp(20)}
          sliderWidth={wp(100)}
          itemWidth={wp(90)}
          // layout={'default'} // default, stack, tinder
          // autoplay={true}
          // autoplayInterval={2000}
          // loop={true}
          inactiveSlideScale={1}
          containerCustomStyle={{overflow: 'visible'}} // Allow cards to overflow
          // inactiveSlideOpacity={0.1}
        />
      </View>

      <View style={styles.graphParentView}>
        {/* Dropdown for year */}
        <View
          style={{
            width: wp(26),
            // height: hp(6),
            marginTop: hp(2),
            marginLeft: wp(4),
          }}>
          <DropDownPicker
            style={{
              // height: hp(1),
              backgroundColor: Colors.primaryLight,
              borderWidth: 0,
              borderRadius: 30,
            }}
            open={open}
            value={year}
            items={items}
            setOpen={setOpen}
            setValue={setYear}
            setItems={setItems}
            placeholder="2022"
            textStyle={{
              color: Colors.primaryDark,
              fontSize: Size(1.7),
              fontWeight: '600',
              paddingLeft: wp(2),
            }}
            // arrowIconStyle={{tintColor: Colors.primaryDark, marginRight: 10}}
            listItemContainerStyle={{
              backgroundColor: Colors.primaryLight,
            }}
            tickIconStyle={{
              tintColor: Colors.primaryDark,
            }}
            // disableBorderRadius={false}
            zIndex={2000}
            maxHeight={160}
          />
        </View>
        <LineChart
          data={months}
          width={wp(100)}
          height={hp(30)}
          chartConfig={chartConfig}
          bezier
          withDots={false}
          withShadow={false}
          withVerticalLines={false}
          withHorizontalLines={false}
          withVerticalLabels={false}
          withHorizontalLabels={false}
          fromZero={true}
          style={{
            width: wp(90),
            height: hp(27),
            borderRadius: 20,
            alignItems: 'center',
            paddingTop: wp(3),
            paddingRight: wp(2),
            paddingLeft: wp(8.5),
          }}
          // onDataPointClick={handleDataPointClick} //Works when "withDots" prop true
        />
        <View style={styles.labelsView}>
          <View style={styles.incomeBox} />
          <Text style={styles.labelsText}>{Strings.income}</Text>
          <View style={styles.savingsBox} />
          <Text style={styles.labelsText}>{Strings.savings}</Text>
          <View style={styles.expensesBox} />
          <Text style={styles.labelsText}>{Strings.expenses}</Text>
        </View>
      </View>

      <CustomLargeButton text={Strings.tRANSACTIONS} />
      <CustomLargeButton text={Strings.rEPORTS} />
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
  carouselView: {
    width: wp(110),
    marginLeft: wp(2.5),
    marginBottom: hp(3),
  },
  line: {
    width: wp(100),
    borderTopWidth: 2,
    borderColor: Colors.darkGrey,
    marginVertical: hp(3),
  },
  graphParentView: {
    width: wp(90),
    backgroundColor: Colors.darkGrey,
    borderRadius: 20,
    alignSelf: 'center',
    marginBottom: hp(1.5),
  },
  labelsView: {
    width: wp(60),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: wp(5),
    marginBottom: hp(1),
  },
  incomeBox: {
    width: wp(3),
    height: wp(3),
    backgroundColor: Colors.primaryLight,
    borderRadius: 3,
  },
  savingsBox: {
    width: wp(3),
    height: wp(3),
    backgroundColor: Colors.green1,
    borderRadius: 3,
  },
  expensesBox: {
    width: wp(3),
    height: wp(3),
    backgroundColor: Colors.redText,
    borderRadius: 3,
  },
  labelsText: {
    color: Colors.primaryLight,
    fontWeight: '600',
  },
});
