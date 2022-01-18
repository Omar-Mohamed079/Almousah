import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function HadithDetails(props) {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Text style={styles.Header}>اسم باب الحديث</Text>
      <Text style={styles.paragraph}>
        هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا
        النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص
        إفتراضي
      </Text>
      <View style={styles.btnContainer}>
        <View style={styles.btnVideo}>
          <Text style={styles.txt}>التفسير المرئى</Text>
        </View>
        <View style={styles.btnVoice}>
          <Text style={styles.txt}>التفسير الصوتى</Text>
        </View>
      </View>
      <View style={styles.sourahContainer}>
        <ScrollView>
          <Text style={styles.txtSourah}>مكان الكتابه</Text>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    color: 'black',
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 16,
    marginBottom: 10,
    marginVertical: 15,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'black',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  btnVoice: {
    width: 123,
    height: 37,
    borderRadius: 5,
    borderColor: '#707070',
    backgroundColor: '#AB1F57',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },
  btnVideo: {
    width: 123,
    height: 37,
    borderRadius: 5,
    borderColor: '#707070',
    backgroundColor: '#AB1F57',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  txt: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  sourahContainer: {
    flex: 1,
    width: 340,
    borderColor: '#011132',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  txtSourah: {
    color: '#011132',
    fontSize: 14,
    fontFamily: 'NotoKufiArabic-Regular',
    textAlign: 'center',
  },
});
export default HadithDetails;
