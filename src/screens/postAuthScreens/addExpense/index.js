import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/colors';
import CustomHeader from '../../../components/CustomHeader';
import {Strings} from '../../../assets/strings';
import {Size, hp, wp} from '../../../assets/dimensions';
import DropDownPicker from 'react-native-dropdown-picker';

const AddExpense = () => {
  const [category, setCategory] = useState('');
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    {label: 'Grocery', value: 'Grocery'},
    {label: 'Health', value: 'Health'},
    {label: 'Education', value: 'Education'},
    {label: 'Travel', value: 'Travel'},
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader title={Strings.addExpense} />
      <View style={styles.line} />

      <TouchableOpacity style={styles.greenButton}>
        <Text style={styles.greenText}>{Strings.customCategories}</Text>
      </TouchableOpacity>

      <View style={styles.dropdownView}>
        <DropDownPicker
          style={{
            backgroundColor: Colors.primaryLight,
            borderWidth: 0,
          }}
          open={open}
          value={category}
          items={items}
          setOpen={setOpen}
          setValue={setCategory}
          setItems={setItems}
          placeholder={Strings.selectCategory}
          textStyle={{
            color: Colors.primaryDark,
          }}
          arrowIconStyle={{tintColor: Colors.primaryDark}}
          listItemContainerStyle={{
            backgroundColor: Colors.primaryLight,
          }}
          tickIconStyle={{tintColor: Colors.primaryDark}}
        />
      </View>

      <View style={styles.dottedView}>
        <Text style={styles.noSubCategoryText}>{Strings.noSubCategory}</Text>
        <TouchableOpacity>
          <Text style={styles.addSubCategoryText}>
            {Strings.addSubCategory}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddExpense;

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
  greenButton: {
    alignSelf: 'flex-end',
    marginRight: wp(5),
  },
  greenText: {
    fontSize: Size(1.7),
    color: Colors.green1,
  },
  dropdownView: {width: wp(90), alignSelf: 'center', marginTop: hp(3)},
  dottedView: {
    height: hp(20),
    width: wp(80),
    alignSelf: 'center',
    borderWidth: 3,
    borderColor: Colors.darkGrey,
    borderStyle: 'dashed',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    marginTop: hp(15),
  },
  noSubCategoryText: {
    color: Colors.lightGreyText,
    fontSize: Size(1.7),
    textAlign: 'center',
    paddingHorizontal: wp(1),
  },
  addSubCategoryText: {
    color: Colors.green1,
    fontWeight: '500',
    marginTop: hp(2),
  },
});
