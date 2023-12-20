import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import {Images} from '../../../assets/images';
import CustomButton from '../../../components/CustomButton';

const RadioButton = ({label, onPress, selected}) => {
  return (
    <TouchableOpacity
      style={selected ? styles.selectedButton : styles.unselectedButton}
      onPress={onPress}>
      {selected ? (
        <View style={styles.tickView}>
          <Image source={Images.tick} resizeMode="center" />
        </View>
      ) : (
        <View style={styles.emptyTickView} />
      )}
      <Text style={styles.quarterlyText}>{label}</Text>
    </TouchableOpacity>
  );
};

const Reports = () => {
  const [selectedOption, setSelectedOption] = useState('quarterly');
  const handleOptionChange = option => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.reports} />

      <View style={styles.line} />
      <Text style={styles.emailForReports}>{Strings.emailForReports}</Text>

      <Image
        source={Images.reports}
        style={styles.reportsImage}
        resizeMode="center"
      />

      <TextInput
        placeholder={Strings.emailAddress}
        placeholderTextColor={Colors.primaryLight}
        cursorColor={Colors.primaryLight}
        style={styles.input}
      />

      <View style={styles.line} />

      <Text style={styles.emailForReports}>{Strings.chooseReportsPeriod}</Text>

      <View>
        <RadioButton
          label={Strings.quarterly}
          onPress={() => handleOptionChange('quarterly')}
          selected={selectedOption === 'quarterly'}
        />

        <RadioButton
          label={Strings.annually}
          onPress={() => handleOptionChange('annually')}
          selected={selectedOption === 'annually'}
        />
      </View>

      <View style={styles.saveButton}>
        <CustomButton
          text={Strings.save}
          size={'large'}
          buttonTextStyle={{fontSize: Size(1.6)}}
        />
      </View>
    </SafeAreaView>
  );
};

export default Reports;

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
    marginVertical: hp(2.5),
  },
  emailForReports: {
    fontSize: Size(1.7),
    color: Colors.primaryLight,
    marginHorizontal: wp(5),
  },
  reportsImage: {
    width: wp(50),
    height: hp(25),
    alignSelf: 'center',
    marginTop: hp(3),
  },
  input: {
    height: hp(6),
    width: wp(90),
    alignSelf: 'center',
    backgroundColor: Colors.darkGrey,
    borderRadius: 10,
    paddingHorizontal: wp(5),
    marginTop: hp(2),
  },
  selectedButton: {
    width: wp(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(12),
    marginTop: hp(2.5),
  },
  unselectedButton: {
    width: wp(35),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: wp(12),
    marginTop: hp(2.5),
  },
  tickView: {
    width: wp(7),
    height: wp(7),
    backgroundColor: Colors.green1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  emptyTickView: {
    width: wp(7),
    height: wp(7),
    backgroundColor: Colors.darkGrey,
    borderRadius: 7,
  },
  quarterlyText: {
    fontSize: Size(1.7),
    fontWeight: '600',
    color: Colors.primaryLight,
  },
  saveButton: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(5),
  },
});
