import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';

function TodayComp(props) {
  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <View style={[styles.card, {borderColor: '#AB1F57'}]}>
          <ImageBackground
            source={require('../../assets/quran-today.png')}
            resizeMode="stretch"
            style={{
              width: 27,
              height: 36,
            }}
          />
          <Text style={[styles.txt, {color: '#AB1F57'}]}>آية اليوم</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/hadith-today.png')}
            resizeMode="stretch"
            style={{
              width: 27,
              height: 36,
            }}
          />
          <Text style={styles.txt}>حديث اليوم</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/fatwah-today.png')}
            resizeMode="stretch"
            style={{
              width: 27,
              height: 36,
            }}
          />
          <Text style={styles.txt}>فتوى اليوم</Text>
        </View>
        <View style={styles.card}>
          <ImageBackground
            source={require('../../assets/artical-today.png')}
            resizeMode="stretch"
            style={{
              width: 27,
              height: 36,
            }}
          />
          <Text style={styles.txt}>فقرة اليوم</Text>
        </View>
      </View>
      <View style={{justifyContent:"center"}}>
        <ImageBackground
          source={require('../../assets/cad-horiz.png')}
          resizeMode='stretch'
          style={{
            width: 330,
            height: 140,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
            
          }}>
          <Text style={{color: '#fff'}}>آية اليوم</Text>
        </ImageBackground>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  txt: {fontFamily: 'NotoKufiArabic-Regular', color: '#011132', fontSize: 9},
  cards: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems:"center",
    marginTop: 40,
    marginRight:-10
  },
  card: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#011132',
    borderWidth: 0.3,
    borderRadius: 5,
    marginLeft: 10,
  },
  container:{
      justifyContent:"center",
  }
});
export default TodayComp;
