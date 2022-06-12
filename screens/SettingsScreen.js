import React, {useState, useEffect, useContext} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import {AuthContext} from '../navigation/AuthProvider';
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

const SettingsScreen = ({navigation}) => {
  const {logout} = useContext(AuthContext);
  const {countryCode, setCountryCode} = useState < CountryCode > 'FR';

  const {country, setCountry} = useState < Country > null;

  const {withCountryNameButton, setWithCountryNameButton} = useState(false);
  const {withFlag, setWithFlag} = useState(true);
  const {withEmoji, setWithEmoji} = useState(true);
  const {withFilter, setWithFilter} = useState(true);
  const {withAlphaFilter, setWithAlphaFilter} = useState(false);
  const {withCallingCode, setWithCallingCode} = useState(false);

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
          text="Change Languaage"></ButtonWithBg>
      </View>
      <View style={[{marginLeft: 40, marginTop: 20}]}>
        <ButtonWithBg
          active="true"
          image={buttonBgOrange}
          text="Report a bug"></ButtonWithBg>
      </View>
      <View style={[{marginLeft: 40, marginTop: 20}]}>
        <ButtonWithBg
          active="true"
          image={buttonBgOrange}
          text="Log out"
          btnAction={logoutUser}></ButtonWithBg>
      </View>
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

export default SettingsScreen;
