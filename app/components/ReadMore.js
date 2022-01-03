import React from 'react';
import { View,StyleSheet, Text } from 'react-native';

function ReadMore(props) {
 return (
   <View
     style={styles.container}>
     <Text
       style={styles.txt}>
       اقرأ المزيد
     </Text>
   </View>
 );
}
const styles = StyleSheet.create({
container:{
       width: 95,
       height: 29,
       backgroundColor: '#AB1F57',
       justifyContent: 'center',
       alignItems: 'center',
       borderRadius: 5,
       alignSelf: 'flex-start',
       marginTop: 5,
     },
     txt:{
         
         color: '#ffffff',
         fontFamily: 'NotoKufiArabic-Regular',
         fontSize: 10,
       
     }
})
export default ReadMore;