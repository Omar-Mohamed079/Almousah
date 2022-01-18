import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function Books(props) {

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <ScrollView>
        <View style={styles.booksContainer}>
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.booksContainer}>
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.booksContainer}>
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
          <ImageBackground
            source={require('../../assets/allah-book.png')}
            style={{width: 160, height: 220}}
            resizeMode="stretch"
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  booksContainer:{
    flex:1,
    justifyContent: 'space-between',
    flexDirection:"row",
    marginHorizontal:15,
    marginTop:5,
    marginBottom:10
  }
});
export default Books;
