import React from 'react';
import { View,StyleSheet } from 'react-native';
import TextCard from './TextCard';

function Info(props) {
 return (
   <>
     <TextCard
       header="نبذة عن الشيخ"
       txt="وُلد فضيلته بمصر في الأول من يناير من عام 1932م.
          حصل على بكالوريوس العلوم البحرية سنة 1952م. وشهادة ربان لأعالى البحار عام 1967 م."
     />
     <TextCard
       header="نبذة عن الجمعية"
       txt="تأسست جمعية المواساة الإسلامية بالإسكندرية عام 1910 .
        ترأس الجمعية فضيلة الشيخ ياسين محمد رشدى سنة 1991 ميلادية."
     />
   </>
 );
}
const styles = StyleSheet.create({
container:{
}
})
export default Info;