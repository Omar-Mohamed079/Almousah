import * as React from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import BottomTabs from './BottomTabs';
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
            headerTitleAlign:"center",
            headerLeft: () => <></>,
          }}
        />
      </Stack.Navigator>
    );


}


export default AppNavigator