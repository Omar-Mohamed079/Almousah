import {createDrawerNavigator} from '@react-navigation/drawer';
import * as React from 'react';
import {View, Text, Image} from 'react-native';
import CustomDrawer from '../components/CustomDrawer';
import Bokhary from '../screens/Bokhary';
import Books from '../screens/Books';
import HomeScreen from '../screens/HomeScreen';
import OtherSciences from '../screens/OtherSciences';
import Quran from '../screens/Quran';
import AppNavigator from './AppNavigator';
import BottomTabs from './BottomTabs';
const Drawer = createDrawerNavigator();

 const DrawerNavigator=()=>{
return (
  <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    initialRouteName="Main"
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
      drawerInactiveBackgroundColor: '#AB1F57',
      drawerActiveBackgroundColor: '#AB1F57',
      drawerLabelStyle: {
        fontFamily: 'NotoKufiArabic-Regular',
        fontSize: 15,
        color: '#fff',
      },
    }}>
    <Drawer.Screen
      name="الرئيسيه"
      component={HomeScreen}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/bokhary-white.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="القرآن الكريم"
      component={Quran}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/quran-white.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="صحيح البخاري"
      component={Bokhary}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/hadith-white.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="العلوم الأخري"
      component={OtherSciences}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/science-white.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="الكتب"
      component={Books}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/books-white.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
    <Drawer.Screen
      name="شارك التطبيق"
      component={Books}
      options={{
        drawerIcon: () => (
          <Image
            source={require('../../assets/share.png')}
            style={{width: 24, height: 24}}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);


}


export default DrawerNavigator