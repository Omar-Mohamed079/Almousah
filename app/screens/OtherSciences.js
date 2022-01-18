import React, {useState} from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import {Tab, Text, TabView} from 'react-native-elements';
import {ScrollView, StyleSheet, View} from 'react-native';
import RowQuran from '../components/RowQuran';
import RowVideoQuran from '../components/RowVideoQuran';
function OtherSciences(props) {
  const [index, setIndex] = useState(0);
  const[activeIndex,setActiveindex]=useState(0)
  console.log(activeIndex)

  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Tab
        value={index}
        onChange={setIndex}
        disableIndicator={true}
        variant="default">
        <Tab.Item
          title="المجالس المرئية"
          containerStyle={{
            borderWidth: 1,
            borderColor: '#011132',
            borderRadius: 5,
            backgroundColor: activeIndex === 0 ? '#AB1F57' : 'white',
            maxHeight: 50,
          }}
          titleStyle={{
            color: activeIndex === 0 ? 'white' : 'black',
            fontSize: 10,
            fontFamily: 'NotoKufiArabic-Regular',paddingBottom:5
          }}
          onPressIn={() => setActiveindex(0)}
        />
        <Tab.Item
          title="المجالس الصوتية"
          containerStyle={{
            borderWidth: 1,
            borderColor: '#011132',
            borderRadius: 5,
            marginLeft: 0.5,
            backgroundColor: activeIndex === 1 ? '#AB1F57' : 'white',
            maxHeight: 50,
          }}
          titleStyle={{
            color: activeIndex === 1 ? 'white' : 'black',
            fontSize: 10,
            fontFamily: 'NotoKufiArabic-Regular',
            paddingBottom:5
          }}
          onPressIn={() => setActiveindex(1)}
        />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item
          style={{
            backgroundColor: 'white',
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            flex: 1,
            marginBottom: 10,
          }}>
          <ScrollView>
            <RowVideoQuran />
            <RowVideoQuran />
            <RowVideoQuran />
            <RowVideoQuran />
            <RowVideoQuran />
            <RowVideoQuran />
          </ScrollView>
        </TabView.Item>
        <TabView.Item
          style={{
            backgroundColor: 'white',
            width: '100%',
            alignItems: 'center',
            marginTop: 10,
            flex: 1,
          }}>
          <ScrollView>
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
            <RowQuran />
          </ScrollView>
        </TabView.Item>
      </TabView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default OtherSciences;
