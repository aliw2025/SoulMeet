import React, {useState, useEffect, useContext} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CustomTextInput from '../components/CustomTextInput';
import {AuthContext} from '../navigation/AuthProvider';
import {ActivityIndicator} from 'react-native';

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

const LoadingScreen = props => {
  return (
    <View
      style={{height: '100%', alignItems: 'center', justifyContent: 'center'}}>
      <ActivityIndicator color={'black'} />
    </View>
  );
};

export default  LoadingScreen;
