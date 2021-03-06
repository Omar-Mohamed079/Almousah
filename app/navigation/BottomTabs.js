import React, { useRef } from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppNavigator from './AppNavigator';
import Quran from '../screens/Quran';
import Bokhary from '../screens/Bokhary';
import OtherSciences from '../screens/OtherSciences';
import Books from '../screens/Books';
import {Image, Text, View} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import DrawerNavigator from './DrawerNavigator';
const Tab = createBottomTabNavigator();
  // const tabOffsetValue = useRef(initialValue);
const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#AB1F57"
    inactiveColor="#AB1F57"
    barStyle={{
      backgroundColor: '#ffffff',
      width: '100%',
      justifyContent: 'space-between',
    }}>
    <Tab.Screen
      name="Books"
      component={Books}
      options={{
        tabBarLabelStyle: {
          color: '#535353',
          fontFamily: 'NotoKufiArabic-Regular',
        },
        headerShown: false,
        tabBarActiveTintColor: '#535353',
        tabBarLabel: 'الكتب',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../../assets/books.png')}
            style={{width: 24, height: 19}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="OtherSciences"
      component={OtherSciences}
      options={{
        tabBarLabelStyle: {
          color: '#535353',
          fontFamily: 'NotoKufiArabic-Regular',
        },
        headerShown: false,
        tabBarActiveTintColor: '#535353',
        tabBarLabel: 'العلوم الاخري',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../../assets/science.png')}
            style={{width: 24, height: 19}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Bokhary"
      component={Bokhary}
      options={{
        tabBarLabelStyle: {
          color: '#535353',
          fontFamily: 'NotoKufiArabic-Regular',
        },
        headerShown: false,
        tabBarActiveTintColor: '#535353',
        tabBarLabel: ' البخاري',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../../assets/bokhary.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Quran"
      component={Quran}
      options={{
        tabBarLabelStyle: {
          color: '#535353',
          fontFamily: 'NotoKufiArabic-Regular',
        },
        headerShown: false,
        tabBarActiveTintColor: '#535353',
        tabBarLabel: 'القرآن الكريم',
        tabBarIcon: ({color}) => (
          <Image
            source={require('../../assets/quran2-icon.png')}
            style={{width: 24, height: 19}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabelStyle: {
          color: '#535353',
          fontFamily: 'NotoKufiArabic-Regular',
        },
        headerShown: false,
        tabBarActiveTintColor: '#535353',
        tabBarLabel: 'الرئيسية',
        tabBarIcon: () => (
          <Image
            source={require('../../assets/home.png')}
            style={{width: 24, height: 19}}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;
