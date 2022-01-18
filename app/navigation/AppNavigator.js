import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabs';
import DrawerNavigator from './DrawerNavigator';
import Bokhary from '../screens/Bokhary';
import Books from '../screens/Books';
import Quran from '../screens/Quran';
import OtherSciences from '../screens/OtherSciences';
const Stack = createNativeStackNavigator();

const AppNavigator=()=>{

    return (
      <Stack.Navigator>
        <Stack.Screen
          component={SplashScreen}
          name="SplashScreen"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={BottomTabs}
          name="HomeScreen"
          options={{
            headerShown: false,
            title: ' فضيله الشيخ ياسين رشدي',
            headerStyle: {
              backgroundColor: '#011132',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontFamilt: 'W_esteghlal',
            },
            lableStyle: {
              fontWeight: 'normal',
              fontFamily: 'W_esteghlal',
            },
            headerTitleAlign: 'center',
            headerLeft: () => <></>,
          }}
        />
        {/* <Stack.Screen
          component={Bokhary}
          name="Bokhary"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={HomeScreen}
          name="Main"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Books}
          name="Books"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={Quran}
          name="Quran"
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={OtherSciences}
          name="OtherSciences"
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    );


}


export default AppNavigator