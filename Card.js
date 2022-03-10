// import React, {Component} from 'react';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const kuni = (props): Node => {
  return (
    <View>
      <Text> {props.title} </Text>
    </View>
  );
};
// const Card = () => {
//   return <Text>this is wasem view</Text>;
// };

export default kuni;
