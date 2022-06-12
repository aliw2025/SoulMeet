/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {Dimensions} from 'react-native';
import ButtonWithBg from '../components/ButtonWithBg.js';
import MainCarousel from '../components/carousel';
const width = Dimensions.get('window').width;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableHighlight,
  View,
  Button,
  ImageBackground,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const image = require('../assets/grad.png');

const HomeScreen = ({navigation}) => {
  const navigationAction = params => {
    navigation.navigate('SignUp', {name: 'Jane'});
  };

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={[styles.main]}>
          <MainCarousel></MainCarousel>
        </View>
        <View style={[styles.btn]}>
          <View style={[{marginLeft: 40, marginTop: 20, marginRight: 40}]}>
            <ButtonWithBg
              path="Profile"
              active="true"
              text="Create an account"
              btnAction={navigationAction}
              navigation={navigation}></ButtonWithBg>
          </View>
        </View>
        <View style={[styles.signInBox]}>
          <Text style={[{color: 'black'}]}>Already have an account?</Text>
          <TouchableHighlight  underlayColor="clear"  onPress = {()=>{
             navigation.navigate('SignIn', {name: 'Jane'});
          }}>
            <Text style={[{color: '#FFC700', fontWeight: 'bold'}]}>
              {' '}
              Sign In{' '}
            </Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signInBox: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    height: 300,
    
  },
  SafeAreaView: {
    
  },
  btn: {
    
  },
  inside: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'gray',
    flex: 1,
  },
  main: {
    height: '80%',
  },
  container2: {
    height: '70%',
    width: windowWidth,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    height: '80%',
  },
  BackGrounimage: {
    height: '100%',
  },
});

export default HomeScreen;
