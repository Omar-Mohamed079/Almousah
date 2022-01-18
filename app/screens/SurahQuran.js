import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Colors} from 'react-native-paper';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';

function SurahQuran(props) {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <Text style={styles.Header}>سورة الفاتحة</Text>
      <Text style={styles.paragraph}>
        هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا
        النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص إفتراضي هذا النص
        إفتراضي
      </Text>
      <View style={styles.btnContainer}>
        <View style={styles.btnVideo}>
          <Text style={styles.txt}>التفسير المرئى</Text>
        </View>
        <View style={styles.btnVoice}>
          <Text style={styles.txt}>التفسير الصوتى</Text>
        </View>
      </View>
      <View style={styles.sourahContainer}>
        <ScrollView>
          <Text style={styles.Header}>بسم الله الرحمن الرحيم </Text>
          <Text style={styles.txtSourah}>
            الم ﴿1﴾ ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِلْمُتَّقِينَ
            ﴿2﴾ الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ
            وَمِمَّا رَزَقْنَاهُمْ يُنْفِقُونَ ﴿3﴾ وَالَّذِينَ يُؤْمِنُونَ بِمَا
            أُنْزِلَ إِلَيْكَ وَمَا أُنْزِلَ مِنْ قَبْلِكَ وَبِالْآخِرَةِ هُمْ
            يُوقِنُونَ ﴿4﴾ أُولَٰئِكَ عَلَىٰ هُدًى مِنْ رَبِّهِمْ ۖ وَأُولَٰئِكَ
            هُمُ الْمُفْلِحُونَ ﴿5﴾ إِنَّ الَّذِينَ كَفَرُوا سَوَاءٌ عَلَيْهِمْ
            أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ لَا يُؤْمِنُونَ ﴿6﴾ خَتَمَ
            اللَّهُ عَلَىٰ قُلُوبِهِمْ وَعَلَىٰ سَمْعِهِمْ ۖ وَعَلَىٰ
            أَبْصَارِهِمْ غِشَاوَةٌ ۖ وَلَهُمْ عَذَابٌ عَظِيمٌ ﴿7﴾ وَمِنَ
            النَّاسِ مَن يَقُولُ آمَنَّا بِاللَّهِ وَبِالْيَوْمِ الْآخِرِ وَمَا
            هُم بِمُؤْمِنِينَ ﴿8﴾ يُخَادِعُونَ اللَّهَ وَالَّذِينَ آمَنُوا وَمَا
            يَخْدَعُونَ إِلَّا أَنْفُسَهُمْ وَمَا يَشْعُرُونَ ﴿9﴾ فِي
            قُلُوبِهِمْ مَرَضٌ فَزَادَهُمُ اللَّهُ مَرَضًا ۖ وَلَهُمْ عَذَابٌ
            أَلِيمٌ بِمَا كَانُوا يَكْذِبُونَ ﴿10﴾ وَإِذَا قِيلَ لَهُمْ لَا
            تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ ﴿11﴾
            أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ وَلَٰكِنْ لَا يَشْعُرُونَ ﴿12﴾
            وَإِذَا قِيلَ لَهُمْ آمِنُوا كَمَا آمَنَ النَّاسُ قَالُوا أَنُؤْمِنُ
            كَمَا آمَنَ السُّفَهَاءُ ۗ أَلَا إِنَّهُمْ هُمُ السُّفَهَاءُ
            وَلَٰكِنْ لَا يَعْلَمُونَ ﴿13﴾ وَإِذَا لَقُوا الَّذِينَ آمَنُوا
            قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا
            مَعَكُمْ إِنَّمَا نَحْنُ مُسْتَهْزِئُونَ ﴿14﴾ اللَّهُ يَسْتَهْزِئُ
            بِهِمْ وَيَمُدُّهُمْ فِي طُغْيَانِهِمْ يَعْمَهُونَ ﴿15﴾ أُولَٰئِكَ
            الَّذِينَ اشْتَرَوُا الضَّلَالَةَ بِالْهُدَىٰ فَمَا رَبِحَتْ
            تِجَارَتُهُمْ وَمَا كَانُوا مُهْتَدِينَ ﴿16﴾ مَثَلُهُمْ كَمَثَلِ
            الَّذِي اسْتَوْقَدَ نَارًا فَلَمَّا أَضَاءَتْ مَا حَوْلَهُ ذَهَبَ
            اللَّهُ بِنُورِهِمْ وَتَرَكَهُمْ فِي ظُلُمَاتٍ لَا يُبْصِرُونَ ﴿17﴾
            صُمٌّ بُكْمٌ عُمْيٌ فَهُمْ لَا يَرْجِعُونَ ﴿18﴾ أَوْ كَصَيِّبٍ مِنَ
            السَّمَاءِ فِيهِ ظُلُمَاتٌ وَرَعْدٌ وَبَرْقٌ يَجْعَلُونَ
            أَصَابِعَهُمْ فِي آذَانِهِمْ مِنَ الصَّوَاعِقِ حَذَرَ الْمَوْتِ ۚ
            وَاللَّهُ مُحِيطٌ بِالْكَافِرِينَ ﴿19﴾ يَكَادُ الْبَرْقُ يَخْطَفُ
            أَبْصَارَهُمْ ۖ كُلَّمَا أَضَاءَ لَهُمْ مَشَوْا فِيهِ وَإِذَا
            أَظْلَمَ عَلَيْهِمْ قَامُوا ۚ وَلَوْ شَاءَ اللَّهُ لَذَهَبَ
            بِسَمْعِهِمْ وَأَبْصَارِهِمْ ۚ إِنَّ اللَّهَ عَلَىٰ كُلِّ شَيْءٍ
            قَدِيرٌ ﴿20﴾ يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمُ الَّذِي
            خَلَقَكُمْ وَالَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ ﴿21﴾
            الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً
            وَأَنْزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ
            رِزْقًا لَكُمْ ۖ فَلَا تَجْعَلُوا لِلَّهِ أَنْدَادًا وَأَنْتُمْ
            تَعْلَمُونَ ﴿22﴾ وَإِنْ كُنْتُمْ فِي رَيْبٍ مِمَّا نَزَّلْنَا عَلَىٰ
            عَبْدِنَا فَأْتُوا بِسُورَةٍ مِنْ مِثْلِهِ وَادْعُوا شُهَدَاءَكُمْ
            مِنْ دُونِ اللَّهِ إِنْ كُنْتُمْ صَادِقِينَ ﴿23﴾ فَإِنْ لَمْ
            تَفْعَلُوا وَلَنْ تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا
            النَّاسُ وَالْحِجَارَةُ ۖ أُعِدَّتْ لِلْكَافِرِينَ ﴿24﴾
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Header: {
    color: 'black',
    fontFamily: 'NotoKufiArabic-Regular',
    fontSize: 16,
    marginBottom: 10,
    marginVertical: 15,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  paragraph: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'black',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  btnVoice: {
    width: 123,
    height: 37,
    borderRadius: 5,
    borderColor: '#707070',
    backgroundColor: '#AB1F57',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 9,
  },
  btnVideo: {
    width: 123,
    height: 37,
    borderRadius: 5,
    borderColor: '#707070',
    backgroundColor: '#AB1F57',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 9,
  },
  txt: {
    fontSize: 12,
    fontFamily: 'NotoKufiArabic-Regular',
    color: 'white',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 15,
  },
  sourahContainer: {
    flex: 1,
    width: 340,
    borderColor: '#011132',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 15,
    alignItems: 'center',
    marginBottom:10
  },
  txtSourah: {
    color: '#011132',
    fontSize: 14,
    fontFamily: 'NotoKufiArabic-Regular',
    textAlign: 'center',
  },
});
export default SurahQuran;
