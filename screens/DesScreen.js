import React, {useState, useEffect, useContext} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  FlatList,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const AdjustLabel = ({fontSize, text, style, numberOfLines}) => {
  const [currentFont, setCurrentFont] = useState(fontSize);

  return (
    <Text
      numberOfLines={numberOfLines}
      adjustsFontSizeToFit
      style={[style, {fontSize: currentFont}]}
      onTextLayout={e => {
        const {lines} = e.nativeEvent;
        if (lines.length > numberOfLines) {
          setCurrentFont(currentFont - 1);
        }
      }}>
      {text}
    </Text>
  );
};

const DesScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const {countryCode, setCountryCode} = useState < CountryCode > 'FR';

  const {country, setCountry} = useState < Country > null;

  const {withCountryNameButton, setWithCountryNameButton} = useState(false);
  const {withFlag, setWithFlag} = useState(true);
  const {withEmoji, setWithEmoji} = useState(true);
  const {withFilter, setWithFilter} = useState(true);
  const {withAlphaFilter, setWithAlphaFilter} = useState(false);
  const {withCallingCode, setWithCallingCode} = useState(false);
    const [numberList,setNumberList] = useState(undefined);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const subscriber = firestore()
          .collection('numbersDescriptions')
          .onSnapshot((querySnapshot)=>{
            console.log('dfdfdfdfl wase');
            var threadArr = [];
            var i = 0;
            querySnapshot.forEach(documentSnapshot => {
              console.log(documentSnapshot.data());
              var data = documentSnapshot.data();
              threadArr.push({
                id: documentSnapshot.id,
                data: documentSnapshot.data(),
              });
              
            });
            setNumberList(threadArr);
          })  
        return () => {
          subscriber();
        };
      }, [refresh]);
      
  const navigationAction = params => {
    navigation.navigate('AreYouHere', {name: 'Jane'});
  };
  function logoutUser(params) {
    logout();
  }
  const onSelect = (country: Country) => {
    console.log(country);
  };
  return (
    <View source={image} resizeMode="cover" style={styles.BackGrounimage}>
      <View style={[{marginTop: '40%', marginLeft: 40}]}>
        <ButtonWithBg
          active="true"
          image={buttonBgOrange}
          text="add number"></ButtonWithBg>
      </View>
      <FlatList
          data={numberList}
          numColumns={1}
          
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          extraData = {refresh}
          renderItem={({item}) => {
            return (
              <View  style ={[{width:'100%'}]}>
                <Text> {item.data.name}</Text>
              </View>
            );
          }}
        />

    </View>
  );
};
const styles = StyleSheet.create({
  abc: {
    zIndex: 2,
  },
  BackGrounimage: {},
  heading: {
    marginLeft: 40,
    width: windowWidth - 80,
    marginRight: 40,
    fontSize: 70,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 15,
    color: 'black',
    marginLeft: 40,
    width: windowWidth - 80,
    marginRight: 40,
  },
});

export default DesScreen;
