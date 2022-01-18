import React from 'react';
import { View,StyleSheet, Text, ImageBackground } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function BookScreen(props) {
 return (
   <View style={styles.container}>
     <Header />
     <SearchBar />
     <View style={styles.bookContainer}>
       <Text style={styles.txt}> كتاب هو الله</Text>
       <ImageBackground
         source={require('../../assets/allah-book.png')}
         style={{width: 270, height: 360, marginTop: 10}}
         resizeMode="stretch"
       />
       <View style={styles.btns}>
         <View style={styles.btn}>
           <Text style={styles.txtbtn}>تصفح</Text>
         </View>
         <View style={styles.btn}>
           <Text style={styles.txtbtn}>تحميل</Text>
         </View>
       </View>
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  txt: {
    fontSize: 15,
    color: '#000',
    fontFamily: 'NotoKufiArabic-Regular',
    alignSelf: 'center',
    marginTop: 8,
  },
  bookContainer: {
    alignItems: 'center',
  },
  btn: {
    width: 123,
    height: 37,
    borderRadius: 10,
    backgroundColor: '#AB1F57',
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal:10
  },
  txtbtn: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'white',
  },
  btns:{
      flexDirection:"row",
    //   justifyContent: 'space-between',
  }
});
export default BookScreen;