import React from 'react';
import { View,StyleSheet, ImageBackground, Text } from 'react-native';

function RowVideoQuran(props) {
 return (
   <View style={styles.container}>
     <ImageBackground
       source={require('../../assets/sheikVideo.png')}
       style={styles.image}>
       <View>
           
       </View>
       <Text style={styles.txt}>عنوان المجلس</Text>
       <ImageBackground
         source={require('../../assets/play.png')}
         style={styles.icon}
       />
     </ImageBackground>
   </View>
 );
}
const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 144,
    borderRadius: 10,
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  txt: {
    fontSize: 10,
    fontFamily: 'NotoKufiArabic-Regular',
    marginTop:20,
    marginBottom:10
  },
});
export default RowVideoQuran;