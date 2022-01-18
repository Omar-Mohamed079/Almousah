import React from 'react';
import { View,StyleSheet, Text, ImageBackground } from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function VideoScreen(props) {
 return (
   <View style={styles.container}>
     <Header />
     <SearchBar />
     <View style={styles.videoContainer}>
       <Text style={styles.head}> عنوان المجلس</Text>
       <ImageBackground
         source={require('../../assets/video-sheik.png')}
         style={styles.image}>
         <ImageBackground
           source={require('../../assets/play.png')}
           style={styles.icon}
         />
       </ImageBackground>
       <Text style={styles.paragraph}>
         هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا
         النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا
         النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا
         النص إفتراضي
       </Text>
       <View style={styles.btn}>
           <Text style={styles.txt}>تحميل</Text>
       </View>
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  head: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'NotoKufiArabic-Regular',
    marginBottom: 10,
  },
  videoContainer: {
    alignItems: 'center',
    marginTop: 5,
    flex: 1,
  },
  image: {
    width: 350,
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 30,
    height: 30,
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'black',
    marginTop: 15,
    textAlign: 'center',
  },
  btn: {
    width: 123,
    height: 37,
    borderRadius: 10,
    backgroundColor: '#AB1F57',
    borderWidth: 1,
    borderColor: '#707070',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  txt: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'white',
  },
});
export default VideoScreen;