import React, { useEffect } from 'react';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
function SplashScreen(props) {
  const navigation = useNavigation();
    useEffect(() => {
    setTimeout(() => {
        navigation.navigate('HomeScreen');
    }, 2500);
    })
  return (
    <ImageBackground
      style={styles.container}
      source={require('../../assets/Splashscreen.png')}>
      <Text style={styles.txt1}> فضيلة الشيخ ياسين رشدي</Text>
      <Text style={styles.txt2}>جمعية المواساة الاسلامية</Text>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt1: {
    color: '#ffffff',
    fontSize: 43,
    marginBottom: 5,
    fontFamily: 'W_esteghlal',
  },
  txt2: {
    color: '#ffffff',
    fontSize: 18,
    fontFamily: 'NotoKufiArabic-Regular',
  },
});
export default SplashScreen;
