import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Drawer} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
function CustomDrawer(props) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
        <Text style={{fontFamily: 'W_esteghlal', fontSize: 30, color: '#fff'}}>
          فضيلة الشيخ ياسين رشدى
        </Text>
        <Text
          style={{
            fontFamily: 'NotoKufiArabic-Regular',
            fontSize: 10,
            color: '#fff',
          }}>
          جمعية المواساة الإسلامية
        </Text>
      </View>
      <DrawerContentScrollView>
        {/* <DrawerItemList {...props} /> */}
        <Drawer.Section style={{marginTop: 25}}>
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/bokhary-white.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="الصفحة الرئيسية"
            labelStyle={{color: '#fff'}}
            onPress={() => navigation.navigate('Main')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/quran-white.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="القرآن الكريم"
            labelStyle={{color: '#fff'}}
            onPress={() => console.log('home pressed')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/hadith-white.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="صحيح البخاري"
            labelStyle={{color: '#fff'}}
            onPress={() => console.log('home pressed')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/science-white.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="العلوم الأخري"
            labelStyle={{color: '#fff'}}
            onPress={() => console.log('home pressed')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/books-white.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="الكتب"
            labelStyle={{color: '#fff'}}
            onPress={() => console.log('home pressed')}
          />
          <DrawerItem
            icon={() => (
              <Image
                source={require('../../assets/share.png')}
                style={{width: 24, height: 24}}
              />
            )}
            label="شارك التطبيق"
            labelStyle={{color: '#fff'}}
            onPress={() => console.log('home pressed')}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 50,
          paddingHorizontal: 40,
        }}>
        <Image
          source={require('../../assets/facebook.png')}
          style={{width: 40, height: 40}}
        />
        <Image
          source={require('../../assets/instagram.png')}
          style={{width: 40, height: 40}}
        />
        <Image
          source={require('../../assets/youtube.png')}
          style={{width: 40, height: 40}}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AB1F57',
  },
});
export default CustomDrawer;
