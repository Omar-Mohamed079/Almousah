import React from 'react';
import { View,StyleSheet, ImageBackground, Text } from 'react-native';

function TodayCards(props) {
 return (
   <View style={styles.cardContainer}>
     <ImageBackground
       source={require('../../assets/CardBg.png')}
       style={{
         width: 165,
         height: 270,
         justifyContent: 'center',
         alignItems: 'center',
       }}>
       <Text style={{color:"#fff"}}>حديث اليوم</Text>
     </ImageBackground>
     <ImageBackground
       source={require('../../assets/CardBg.png')}
       style={{
         width: 165,
         height: 270,
         justifyContent: 'center',
         alignItems: 'center',
       }}>
       <Text style={{color:"#fff"}}>آية اليوم</Text>
     </ImageBackground>
   </View>
 );
}
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
  },
});
export default TodayCards;