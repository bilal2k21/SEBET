import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import DropDownPicker from 'react-native-dropdown-picker';
import {Images} from '../../../assets/images';
import {Bar} from 'react-native-progress';

const MonthlyBudget = () => {
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

  // For month pick
  const [month, setMonth] = useState('');
  const [openMonth, setOpenMonth] = useState(false);
  const [monthName, setMonthName] = useState([
    {label: 'JANUARY', value: 'JANUARY'},
    {label: 'FEBRUARY', value: 'FEBRUARY'},
    {label: 'MARCH', value: 'MARCH'},
    {label: 'APRIL', value: 'APRIL'},
    {label: 'MAY', value: 'MAY'},
    {label: 'JUNE', value: 'JUNE'},
    {label: 'JULY', value: 'JULY'},
    {label: 'AUGUST', value: 'AUGUST'},
    {label: 'SEPTEMBER', value: 'SEPTEMBER'},
    {label: 'OCTOBER', value: 'OCTOBER'},
    {label: 'NOVEMBER', value: 'NOVEMBER'},
    {label: 'DECEMBER', value: 'DECEMBER'},
  ]);

  //Variable for conditional rendering
  let temp = '$5700';
  // let temp = undefined;

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.monthly_Budget} />
      <View style={styles.line} />
      <View style={styles.upperView}>
        <Text style={styles.year}>{Strings.year}</Text>
        {/* Dropdown for year */}
        <View
          style={{
            width: wp(26),
          }}>
          <DropDownPicker
            style={{
              //   height: hp(6),
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
            // zIndex={2000}
            maxHeight={160}
          />
        </View>
        <Text style={styles.year}>{Strings.month}</Text>

        {/* Dropdown for month */}
        <View
          style={{
            width: wp(39),
          }}>
          <DropDownPicker
            style={{
              //   height: hp(6),
              backgroundColor: Colors.primaryLight,
              borderWidth: 0,
              borderRadius: 30,
            }}
            open={openMonth}
            value={month}
            items={monthName}
            setOpen={setOpenMonth}
            setValue={setMonth}
            setItems={setMonthName}
            placeholder="SEPTEMBER"
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
            // zIndex={2000}
            maxHeight={160}
          />
        </View>
      </View>
      <View style={styles.greenView}>
        <TouchableOpacity style={styles.greenButton}>
          <Image
            source={Images.pencil}
            style={styles.pencil}
            resizeMode="contain"
          />
          <Text style={styles.greenText}>{Strings.addExpectedIncome}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleView}>
        <View style={styles.expectedIncomeView}>
          <Text style={{color: temp ? Colors.primaryLight : Colors.grayText}}>
            {Strings.expectedIncomeInMonth}
          </Text>
          <Text
            style={{
              color: temp ? Colors.primaryLight : Colors.grayText,
              fontSize: Size(2.5),
              fontWeight: '700',
            }}>
            {temp ? temp : '- -'}
          </Text>
        </View>
        <View style={styles.lineView} />
        <View style={styles.incomeSpentView}>
          <Text style={{color: Colors.primaryLight}}>
            {temp ? `${Strings.incomeSpent}` : ''}
          </Text>
          <Text style={styles.incomeSpentValue}>{temp ? '61%' : ''}</Text>
        </View>
        <Bar
          height={15}
          width={280}
          progress={temp ? 0.61 : 0}
          borderWidth={0}
          borderRadius={10}
          color={Colors.redText}
          unfilledColor={temp ? Colors.primaryDark : Colors.grayText}
          style={{
            alignSelf: 'center',
            marginVertical: hp(0.5),
          }}
        />
        <View style={styles.remainingAmountView}>
          <Text style={{color: Colors.primaryLight}}>
            {temp ? `${Strings.remainingAmount}` : ''}
          </Text>
          <Text style={styles.remainingAmountValue}>{temp ? '$2223' : ''}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.addExpenseButton}>
        <Text style={styles.addExpenseText}>{Strings.addExpense}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MonthlyBudget;

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
  upperView: {
    width: wp(95),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  year: {
    color: Colors.primaryLight,
    fontSize: Size(1.5),
    fontWeight: '600',
  },
  greenView: {
    width: wp(55),
    alignSelf: 'flex-end',
    marginVertical: hp(3),
    marginRight: wp(2.5),
  },
  greenButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pencil: {
    width: 30,
    height: 30,
  },
  greenText: {
    fontSize: Size(1.7),
    color: Colors.green1,
    marginLeft: wp(4),
  },
  middleView: {
    width: wp(90),
    height: hp(27),
    alignSelf: 'center',
    backgroundColor: Colors.darkGrey,
    borderWidth: 1,
    borderRadius: 20,
    padding: 20,
  },
  expectedIncomeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lineView: {
    width: '100%',
    borderTopWidth: 1,
    borderColor: Colors.primaryDark,
    marginVertical: hp(2),
  },
  incomeSpentView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: hp(1.5),
  },
  incomeSpentValue: {
    color: Colors.redText,
    fontSize: Size(2.5),
    fontWeight: '700',
  },
  remainingAmountView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(1.5),
  },
  remainingAmountValue: {
    color: Colors.primaryLight,
    fontSize: Size(2),
    fontWeight: '700',
  },
  addExpenseButton: {
    height: hp(20),
    width: hp(20),
    borderWidth: Size(4),
    borderRadius: 100,
    borderColor: Colors.darkGrey,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hp(5),
  },
  addExpenseText: {
    color: Colors.primaryLight,
    fontSize: Size(1.7),
    textAlign: 'center',
    paddingHorizontal: wp(1),
  },
});
