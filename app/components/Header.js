import React from 'react';
import { View,StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import {useNavigation} from '@react-navigation/native';
function Header({valid=false}) {
const navigation = useNavigation();
 return (
   <View style={styles.Header}>
     <Text style={styles.txt}>فضيلة الشيخ ياسين رشدى</Text>
     {/* <TouchableOpacity
       onPress={() => navigation.openDrawer()}>
       <Image
         source={require('../../assets/burger.png')}
         style={{width: 24, height: 19}}
       />
     </TouchableOpacity> */}
   </View>
 );
}
const styles = StyleSheet.create({
  Header: {
    backgroundColor: '#011132',
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txt: {
    fontSize: 22,
    fontFamily: 'W_esteghlal',
    color: '#fff',
    // marginLeft: 70,
    alignSelf:"center"
  },
});
export default Header;