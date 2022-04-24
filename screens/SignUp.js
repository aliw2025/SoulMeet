import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth';


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
const SignUp = ({navigation}) => {
    // const [initializing, setInitializing] = useState(true);
    // const [user, setUser] = useState();
    auth()
    .createUserWithEmailAndPassword('jane.doe@example.com', 'SuperSecretPassword!')
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
    // console.log('user: '+user);
    // Handle user state changes
    // function onAuthStateChanged(user) {
    //   setUser(user);
    //   if (initializing) setInitializing(false);
    // }
  
    // useEffect(() => {
    //   const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    //   return subscriber; // unsubscribe on unmount
    // }, []);
  
    // if (initializing) return null;
    // var text = '';
    // if (!user) {
    // //   return (
    // //     <View>
    // //       <Text>Login</Text>
    // //     </View>
    // //   );
    //     text = 'login';
    // }else{
    //     text = user.email;
    // }
  
    
     
  const navigationAction = params => {
    navigation.navigate("BirthDay", {name: 'Jane'});
  }
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

        {/* <Text>
           {text}
        </Text> */}
       
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
 
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor:'red',
  },

 
});

export default SignUp;
