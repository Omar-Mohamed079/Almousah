import React from 'react';
import { View,StyleSheet, Text, ImageBackground } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import RowQuran from "../components/RowQuran"

function Quran(props) {
 return (
   <View style={styles.container}>
     <Header />
     <SearchBar />
     <Text style={styles.Header}>القرآن الكريم </Text>
     <RowQuran name="اسم السورة" />
     <RowQuran name="اسم السورة" />
     <RowQuran name="اسم السورة" />
     <RowQuran name="اسم السورة" />
     <RowQuran name="اسم السورة" />
     <RowQuran name="اسم السورة" />
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
export default Quran;