import React from 'react';
import {View, StyleSheet, Text, TextInput, ImageBackground} from 'react-native';
import Info from '../components/Info';
import ReadMore from '../components/ReadMore';
import SearchBar from '../components/SearchBar';
import TextCard from '../components/TextCard';
import TodayCards from '../components/TodayCards';
function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <Info />
        <TodayCards/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
 
});
export default HomeScreen;
