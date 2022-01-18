import React from 'react';
import { View,StyleSheet, ImageBackground, Text } from 'react-native';

function RowQuran({name}) {
 return (
   <View style={styles.rowContainer}>
     <View style={styles.row}>
       <Text style={styles.txt}>{name}</Text>
       <View style={styles.IconContainer}>
         <ImageBackground
           source={require('../../assets/file.png')}
           style={styles.icon}
         />
         <View
           style={{
             width: 1,
             height: 19,
             backgroundColor: '#011132',
             marginHorizontal: 10,
           }}></View>
         <ImageBackground
           source={require('../../assets/media.png')}
           style={styles.icon}
         />
       </View>
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'column',
    marginBottom:10
  },
  row: {
    flexDirection: 'row-reverse',
    width: 330,
    height: 46,
    borderWidth: 1,
    borderColor: '#011132',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  txt: {
    fontSize: 10,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'black',
    marginRight: 10,
  },
  IconContainer: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  icon: {
    width: 17,
    height: 17,
  },
});
export default RowQuran;