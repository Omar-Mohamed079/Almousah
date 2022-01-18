import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import ReadMore from './ReadMore';

function TextCard({txt,header}) {
 return (
   <View style={styles.paragraph}>
     <Text style={styles.header}>{header}</Text>
     <Text style={styles.txt}> {txt}</Text>
     <ReadMore />
   </View>
 );
}
const styles = StyleSheet.create({
  paragraph: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    marginTop: 15,
  },
  header: {
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 16,
    color: '#011132',
    // marginRight: 10,
    marginBottom: 10,
  },
  txt: {
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 10.5,
    color: '#011132',
  },
});
export default TextCard;