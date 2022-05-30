import React, {useState, useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import firestore from '@react-native-firebase/firestore';

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

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');
const Description = props => {
  var heading = props.route.params.heading;
  var number = props.route.params.id;
  const [des, setDes] = useState(undefined);
  var docId;

  if (number == '11/2') {
    docId = '11_2';
  } else if (number == '22/4') {
    docId = '22_4';
  } else if (number == '33/6') {
    docId = '33_6';
  } else {
    docId = getNum(number);
  }

  function getNum(str) {
    var val = 0;
    var arr = str.split('/');
    if (arr.length == 0) {
      return arr[0];
    } else {
      return arr[1];
    }
  }

  function updateData(data) {
    console.log('updating data ');
    
    if (data) {
      setDes(data.description);
    } else {
      console.log('error');
    }
  }

  useEffect(() => {
    var id = props.id;
    const subscriber = firestore()
      .collection(heading)
      .doc(docId)
      .onSnapshot(documentSnapshot => {
        var data;
        if (documentSnapshot) {
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        } else {
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);

  const navigationAction = params => {
    props.navigation.navigate('BirthDay', {name: 'Jane'});
  };
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
      <SafeAreaView>
        <ScrollView>
          <View style={styles.mainPage}>
            <Text
              adjustsFontSizeToFit
              numberOfLines={1}
              style={[styles.heading]}>
              {heading} {number}
            </Text>
            <Text style={{textAlign:'justify',marginLeft: 40, marginRight: 40, marginTop: 10}}>
              {des}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  btn: {
    marginTop: 40,
  },
  container: {
    marginTop: 50,
    width: windowWidth - 80,
    // marginLeft:40,
    // marginLeft:40,
    fontSize: 14,
    letterSpacing: 1.5,
    color: 'black',
  },
  mainPage: {
    flex: 1,
    // backgroundColor:'pink',
    // alignItems: 'center',
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
    // justifyContent: 'center',
    backgroundColor: 'red',
  },
  heading: {
    width: windowWidth - 80,
    marginTop: 20,
    fontSize: 70,
    marginLeft:40,
   
    // justifyContent:'flex-end',
    marginRight:40,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeading: {
    fontSize: 15,
  },
});

export default Description;
