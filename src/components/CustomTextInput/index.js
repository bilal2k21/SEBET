import React, {useState} from 'react';
import {TextInput, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../assets/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomTextInput = ({
  placeholder,
  value,
  onChangeText,
  multilineHeight,
  isSecure = false,
}) => {
  const inputStyle = multilineHeight ? {height: multilineHeight} : null;
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(isSecure);

  const toggleSecureTextEntry = () => {
    setIsSecureTextEntry(!isSecureTextEntry);
  };

  return (
    <View style={[styles.container, inputStyle]}>
      <TextInput
        style={[
          styles.textInput,
          multilineHeight && {textAlignVertical: 'top'},
        ]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={Colors.primaryGray}
        cursorColor={Colors.primaryLight}
        secureTextEntry={isSecureTextEntry}
        multiline={multilineHeight !== undefined} // Enable multiline if multilineHeight is provided
      />
      {isSecure ? (
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={toggleSecureTextEntry}>
          <Ionicons
            name={isSecureTextEntry ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color={Colors.primaryLight}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    backgroundColor: Colors.darkGrey,
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    color: Colors.primaryLight,
  },
  iconContainer: {
    alignSelf: 'center',
  },
});

export default CustomTextInput;
