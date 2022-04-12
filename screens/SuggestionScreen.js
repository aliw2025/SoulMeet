import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
// import {Modal} from '../components/Modal';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  Image,
  useColorScheme,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Button,
  ImageBackground,
} from 'react-native';
import TabTwoScreen from './testScreen';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const arrow = require('../assets/arrow.png');
const setting = require('../assets/setting.png');
const photo = require('../assets/photo.png');
const mainProfile = require('../assets/mainProfile.png');
const cross = require('../assets/cross.png');
const star = require('../assets/star.png');
const heart = require('../assets/heart.png');

//  the screen component
const SuggestionScreen = props => {
  return (
    <SafeAreaView style={[{flex: 1}]}>
      {/* top row sectoin */}
      <View style={styles.topRow}>
        <View>
          <TouchableOpacity>
            <View style={[styles.backBtn]}>
              <Image source={arrow}></Image>
            </View>
          </TouchableOpacity>
        </View>
        <Text style={{fontSize: 24, fontWeight: 'bold', color: 'black'}}>
          Suggested
        </Text>
        <View>
          <TouchableOpacity>
            <View style={[styles.backBtn]}>
              <Image source={setting}></Image>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* image body */}
      <View style={{alignItems: 'center', marginTop: 10}}>
        <Image style={{opacity: 0.2}} source={photo}></Image>
        <View style={{position: 'absolute', top: 20}}>
          <Image source={mainProfile}></Image>
          <View
            style={{
              position: 'absolute',
              backgroundColor: 'white',
              opacity: 0.8,
              top: '50%',
              bottom: 0,
              width: '100%',
              borderRadius: 10,
            }}></View>
          <View
            style={{
              position: 'absolute',
              top: '55%',
            }}>
            <View
              style={{
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                marginLefmarginTop: 10,
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  padding: 5,
                  width: '60%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 0,
                }}>
                Life Path
              </Text>
              <View style={{borderRadius: 10, backgroundColor: '#FFC700'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 10,
                    padding: 5,
                    color: 'white',
                  }}>
                  12/3
                </Text>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                16/7
              </Text>
            </View>
            <View
              style={{
                top: -15,
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                marginLefmarginTop: 10,
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  padding: 5,
                  width: '60%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 0,
                }}>
                Life Path
              </Text>
              <View style={{borderRadius: 10, backgroundColor: '#FFC700'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 10,
                    padding: 5,
                    color: 'white',
                  }}>
                  12/3
                </Text>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                16/7
              </Text>
            </View>
            <View
              style={{
                top: -30,
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                marginLefmarginTop: 10,
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  padding: 5,
                  width: '60%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 0,
                }}>
                Life Path
              </Text>
              <View style={{borderRadius: 10, backgroundColor: '#FFC700'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 10,
                    padding: 5,
                    color: 'white',
                  }}>
                  12/3
                </Text>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                16/7
              </Text>
            </View>
            <View
              style={{
                top: -45,
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                marginLefmarginTop: 10,
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  padding: 5,
                  width: '60%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 0,
                }}>
                Life Path
              </Text>
              <View style={{borderRadius: 10, backgroundColor: '#FFC700'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 10,
                    padding: 5,
                    color: 'white',
                  }}>
                  12/3
                </Text>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                16/7
              </Text>
            </View>
            <View
              style={{
                top: -60,
                marginRight: 20,
                marginLeft: 20,
                flexDirection: 'row',
                marginLefmarginTop: 10,
              }}>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  padding: 5,
                  width: '60%',
                  fontSize: 16,
                  fontWeight: 'bold',
                  marginLeft: 0,
                }}>
                Life Path
              </Text>
              <View style={{borderRadius: 10, backgroundColor: '#FFC700'}}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    paddingTop: 15,
                    paddingBottom: 10,
                    padding: 5,
                    color: 'white',
                  }}>
                  12/3
                </Text>
              </View>
              <Text
                style={{
                  paddingTop: 15,
                  paddingBottom: 10,
                  marginLeft: 5,
                  fontSize: 16,
                  fontWeight: 'bold',
                  padding: 5,
                }}>
                16/7
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* reaction buttons */}
      <View
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
          marginLeft: 40,
          marginRight: 40,
        }}>
        <View style={{padding: 20, borderRadius: 360,backgroundColor:'pink',}}>
          <Image source={cross} />
        </View>
        <View
          style={{padding: 20, borderRadius: 360, backgroundColor: '#FFC700'}}>
          <Image source={heart} />
        </View>

        <View
          style={{
            shadowRadius: 10,
           backgroundColor:'pink',
            overflow: 'hidden',
            shadowOpacity: 1,
            padding: 20,
            borderRadius: 360,
          }}>
          <Image source={star} />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topRow: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    // position: 'absolute',
  },
  BackGrounimage: {
    alignItems: 'center',

    backgroundColor: 'pink',
    alignSelf: 'center',
    width: '80%',
  },
});

export default SuggestionScreen;
