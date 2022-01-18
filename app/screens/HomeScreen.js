import React from 'react';
import {View, StyleSheet, Text, TextInput, ImageBackground} from 'react-native';
import Header from '../components/Header';
import Info from '../components/Info';
import ReadMore from '../components/ReadMore';
import SearchBar from '../components/SearchBar';
import TextCard from '../components/TextCard';
import TodayCards from '../components/TodayCards';
import TodayComp from '../components/TodayComp';
function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header valid={true} />
      <SearchBar />
      <View style={styles.contain}>
        <Info />
        <TodayComp />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  contain:{
    justifyContent: 'center',
    alignItems:"center"
  }
});
export default HomeScreen;
