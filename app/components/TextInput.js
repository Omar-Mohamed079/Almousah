import React from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';

function InputText({name,message}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{name}</Text>
      <TextInput style={message?styles.wide:styles.input} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#BBB7B7',
  },
  txt: {
    fontSize: 10,
    color: '#000',
    fontFamily: 'NotoKufiArabic-Regular',
    marginHorizontal: 10,
  },
  wide: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#BBB7B7',
    minHeight:150
  },
});
export default InputText;
