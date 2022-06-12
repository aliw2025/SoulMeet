import React, {useState, useRef, juseEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, Animated} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput';
import ButtonWithTick from '../components/ButtonWithTick';
import SuggestionScreen from './SuggestionScreen';
// import AccountScreen from './AccountScreen';
import AccountStack from './AccountScreen';
import MessagesScreen from './MessagesScreen';
import MatchesScreen from './MatchesScreen';

// react items
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

// global variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
// icons
const message = require('../assets/messages.png');
const match = require('../assets/match.png');
const grayHeart = require('../assets/grayHeart.png');
const dot = require('../assets/dot.png');
const people = require('../assets/people.png');
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
var size = 20;

const CustomTabBar = props => {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        width: '100%',
        height: 60,
      }}></View>
  );
};
var i = 0;
var icons = [match, grayHeart, message, people];
function MyTabBar({state, descriptors, navigation}) {
 

  const navAnim = useRef(new Animated.Value(0)).current;

  function animateLine(value) {
    Animated.timing(navAnim, {
      toValue: value * windowWidth * 0.25,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{flexDirection: 'row', paddingTop: 10, paddingBottom: 10}}>
      <Animated.View
        style={{
          transform: [{translateX: navAnim}],
          marginLeft: 0,
          marginRight: 0,
          position: 'absolute',
          left: 0,
          top: 0,
          width: windowWidth / 4,
          height: 2,
          backgroundColor: '#FFC700',
        }}></Animated.View>
      {state.routes.map((route, index, i) => {
        i++;
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {

          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            animateLine(index);
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name});

          }

        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };
        // console.log('key ' + route.name);
        if (route.name == 'Matches') {
          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                flex: 1,
                marginLeft: 0,
                marginRight: 0,
                borderWidth: 0,
                alignItems: 'center',
              }}>
              <View>
                <Image
                  source={icons[index]}
                  style={{
                    tintColor: isFocused ? '#FFC700' : '#ADAFBB',
                    width: 20,
                    height: 20,
                  }}></Image>
                <Image
                  source={dot}
                  style={{
                    // tintColor: isFocused ? '#FFC700' : '#ADAFBB',
                    position: 'absolute',
                    top: -2,
                    right: -5,
                  }}></Image>
              </View>
            </TouchableOpacity>
          );
        }
        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              marginLeft: 0,
              marginRight: 0,
              borderWidth: 0,
              alignItems: 'center',
            }}>
            <Image
              source={icons[index]}
              style={{
                tintColor: isFocused ? '#FFC700' : '#ADAFBB',
                width: 20,
                height: 20,
              }}></Image>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
const TabsScreen = props => {
  var matchType = props.route.params.matchType;
  console.log('i am tab screen');
  return (
    <NavigationContainer independent={true}>
      
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        screenOptions={{headerShown: false,unmountOnBlur:true}}>
        <Tab.Screen
          name="Suggestions"
          children={() => {
            return <SuggestionScreen matchType={matchType} />;
          }}
        />
        <Tab.Screen
          name="Matches"
          children={() => {
            return <MatchesScreen matchType={matchType} />;
          }}
        />
        <Tab.Screen name="Messages" component={MessagesScreen} />
        <Tab.Screen name="Account" component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabsScreen;
