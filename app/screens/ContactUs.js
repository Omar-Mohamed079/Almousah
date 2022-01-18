import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import InputText from '../components/TextInput';

function ContactUs(props) {
 return (
   <View style={styles.container}>
     <Header />
     <SearchBar />
     <View style={styles.formContainer}>
       <Text style={styles.txt}> اتصل بنا</Text>
       <InputText name={'الاسم'} />
       <InputText name={'البريد الإلكترونى'} />
       <InputText name={'الرسالة'} message={true} />
     </View>
     <View style={styles.btn}>
       <Text style={styles.txtbtn}>إرسال</Text>
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  txt: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'NotoKufiArabic-Regular',
    marginBottom:10
  },
  formContainer:{
      marginTop:10,
      marginHorizontal:20
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
    marginTop: 150,
    alignSelf:"center"
  },
  txtbtn: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'white',
  },
});
export default ContactUs;