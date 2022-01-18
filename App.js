import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigator from './app/navigation/AppNavigator';
import HomeScreen from './app/screens/HomeScreen';
import SplashScreen from './app/screens/SplashScreen';
import Books from "./app/screens/Books"
import BottomTabs from './app/navigation/BottomTabs';
import SheikScreen from './app/screens/SheikScreen';
import CharityScreen from './app/screens/CharityScreen';
import Quran from './app/screens/Quran';
import SurahQuran from './app/screens/SurahQuran';
import OtherSciences from './app/screens/OtherSciences';
import VideoScreen from './app/screens/VideoScreen';
import BookScreen from './app/screens/BookScreen';
import ContactUs from './app/screens/ContactUs';
import Bokhary from './app/screens/Bokhary';
import HadithDetails from './app/screens/HadithDetails';
const App = () => {
  return (
    <NavigationContainer>
  <AppNavigator/>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
