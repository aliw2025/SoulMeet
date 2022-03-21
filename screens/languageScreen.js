import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');
const SelectLanguage = ({navigation}) => {
  console.log('here');
  const {countryCode, setCountryCode} = useState < CountryCode > 'FR';
  console.log('her1');
  const {country, setCountry} = useState < Country > null;
  console.log('her2');
  const {withCountryNameButton, setWithCountryNameButton} = useState(false);
  const {withFlag, setWithFlag} = useState(true);
  const {withEmoji, setWithEmoji} = useState(true);
  const {withFilter, setWithFilter} = useState(true);
  const {withAlphaFilter, setWithAlphaFilter} = useState(false);
  const {withCallingCode, setWithCallingCode} = useState(false);
  console.log('here3');
  const onSelect = (country: Country) => {
    console.log(country);
    // setCountryCode(country.cca2)
    // setCountry(country)
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      
      style={styles.BackGrounimage}>
      <Text style={[styles.heading]}> Select Language</Text>
      <Text style={[styles.subHeading]}>
        {' '}
        Please select your preferrred Language
      </Text>
      <View style={[styles.abc]}>
      <LanguagePickerBtn text = "English" >
      
      </LanguagePickerBtn>
      </View>
      
      <ButtonWithBg
        path = 'AreYouHere'
        active = "true"
        style={{margin: 20, backgroundColor: 'red'}}
        image={buttonBgOrange}
        text = "NEXT"
        navigation={navigation}></ButtonWithBg>
       
      {/* <View style={styles.container}> */}

      {/* <Option
        title='With country name on button'
        value={withCountryNameButton}
        onValueChange={setWithCountryNameButton}
      />
      <Option title='With flag' value={withFlag} onValueChange={setWithFlag} />
      <Option
        title='With emoji'
        value={withEmoji}
        onValueChange={setWithEmoji}
      />
      <Option 
        title='With filter'
        value={withFilter}
        onValueChange={setWithFilter}
      />
      <Option
        title='With calling code'
        value={withCallingCode}
        onValueChange={setWithCallingCode}
      />
      <Option
        title='With alpha filter code'
        value={withAlphaFilter}
        onValueChange={setWithAlphaFilter}
      /> */}
      {/* <CountryPicker
        {...{
          countryCode,
          withFilter,
          withFlag,
          withCountryNameButton,
          withAlphaFilter,
          withCallingCode,
          withEmoji,
          onSelect,
        }}
        visible
        style={[styles.fuck]}
      />
      {country !== null && (
        <Text style={styles.data}>{JSON.stringify(country, null, 2)}</Text>
      )}
    </View> */}
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  abc: {
    margin: 20,
    zIndex:2,
  },
  btnBg: {
    // width: 300,
    height: 60,
    justifyContent: 'center',
    width: 320,
    // margin:20,
    // flex:1
  },
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subHeading: {
    fontSize: 15,
  },
 
});

export default SelectLanguage;
