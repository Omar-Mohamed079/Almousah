import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import RowQuran from '../components/RowQuran';
import SearchBar from '../components/SearchBar';

function Bokhary(props) {
 return (
   <View style={styles.container}>
     <Header />
     <SearchBar />
     <Text style={styles.Header}>صحيح البخاري</Text>
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
     <RowQuran name="اسم باب الحديث" />
   </View>
 );
}
const styles = StyleSheet.create({
  Header: {
    color: "black",
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 16,
    marginBottom: 10,
    marginVertical: 15,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
export default Bokhary;