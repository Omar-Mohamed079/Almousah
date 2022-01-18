import React from 'react';
import { View,StyleSheet, TextInput, ImageBackground } from 'react-native';

function SearchBar(props) {
 return (
   <View style={styles.searchView}>
     <View style={styles.sectionStyle}>
       <ImageBackground
         source={require('../../assets/icon-search.png')}
         style={{width: 26, height: 18}}
       />
       <TextInput
         style={{
           color: '#ffffff',
           fontSize: 10,
           width: '50%',
           textAlign:"right",
           fontFamily: 'NotoKufiArabic-Regular',
           alignSelf: 'center',
         }}
         placeholderTextColor={'#ffffff'}
         placeholder="ابحث هنا"
         onChangeText={txt => console.log(txt)}
       />
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#B7B7B7',
    borderColor: '#707070',
    borderWidth: 0.5,
    height: 50,
    borderRadius: 5,
    margin: 10,
    width: '90%',
    borderRadius: 35,
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  searchView: {
    width: '100%',
    backgroundColor: '#011132',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SearchBar;