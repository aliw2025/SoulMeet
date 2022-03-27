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
  const olamba = params => {
    console.log('olamba');
  };
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={[styles.main]}>
          <MainCarousel></MainCarousel>
          {/* <ScrollView
            onScroll={() => olamba()}
            horizontal={true}
            snapToInterval={width}
            decelerationRate={0}
            snapToAlignment={'center'}
            scrollEventThrottle={1}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator = {false}
            style={styles.scrollContainer}>
            <View style={[styles.container1]}>
              <View style={[styles.inside]}></View>
              <View><Text>text1</Text></View>
            </View>
            <View style={[styles.container2]}>
              <View style={[styles.inside]}></View>
              <View><Text>text2</Text></View>
            </View>
            <View style={[styles.container3]}>
              <View style={[styles.inside]}></View>
              <View><Text>text3</Text></View>
            </View>
          </ScrollView> */}
        </View>
        <View style={[styles.btn]}>
          <View style={[{marginLeft: 40, marginTop: 20,marginRight:40}]}>
            <ButtonWithBg
              path="Profile"
              active="true"
              text="Create an account"
              navigation={navigation}></ButtonWithBg>
          </View>
        </View>
        <View style={[styles.signInBox]}>
                <Text >Already have an account?</Text>
                <Text style={[{color:'#FFC700',fontWeight:'bold'}]}> Sign In </Text>
              </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signInBox:{
    marginTop:20,
    flex:1,
    flexDirection:'row',
    textAlign:'center',
    justifyContent:'center',
    height:300,
    // backgroundColor:'red'
  },
  SafeAreaView: {
    //  flex: 1,
  },
  btn: {
    // backgroundColor: 'purple',
    //  flex: 1,
  },
  inside: {
    width: '80%',
    borderRadius: 10,
    backgroundColor: 'gray',
    flex: 1,
    // height: 80,
  },
  main: {
    // backgroundColor: 'blue',
    height: '80%',
    //  flex: 1,
  },
  container2: {
    //  flex: 1,
    // flexDirection: 'row',
    height: '70%',
    width: windowWidth,
    // height: 80,
    padding: 10,
    // marginLeft:-70,
    //  backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  container1: {
    //  flex: 1,
    height: '70%',
    width: windowWidth,
    // height: 80,
    padding: 10,
    //  backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'blue',
  },
  container3: {
    //  flex: 1,
    width: windowWidth,
    height: '70%',
    // height: 80,
    padding: 10,
    //  backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  scrollContainer: {
    //  flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'gray',
    height: '80%',
  },
  // top most parent
  BackGrounimage: {
    //  flex: 1,
    height: '100%',
  },
});

export default HomeScreen;
