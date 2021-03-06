import React, {useState, useRef, juseEffect} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, Animated} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput';
import ButtonWithTick from '../components/ButtonWithTick';
import SuggestionStack from './SuggestionContainer';
import AccountStack from './AccountScreen';
import MessagesScreen from './MessagesScreen';
import MatchesScreen from './MatchesScreen';
import SuggestionScreen from './SuggestionScreen'

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
// icon size
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
// function MyTabBar(props){

function MyTabBar({descriptors,state,navigation}) {
  
  
  const navAnim = useRef(new Animated.Value(state.index)).current;

  function animateLine(value) {
    Animated.timing(navAnim, {
      toValue: value * windowWidth * 0.25,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }

  animateLine(state.index);
 
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
                    position: 'absolute',
                    top: -2,
                    right: -5,
                  }}></Image>
              </View>
            </TouchableOpacity>
          );
        }
        var bottom = 0;
        if (Platform.OS === 'ios') {
          bottom = 20;
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
              marginBottom:bottom,
            }}>
              <View>
              <Image
              source={icons[index]}
              style={{
                tintColor: isFocused ? '#FFC700' : '#ADAFBB',
                width: 20,
                height: 20,
              }}></Image>
                
              </View>
           
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();
const TabsScreen = props => {
 
 
  
  var matchType = props.route.params.matchType;
  return (
    
      <Tab.Navigator
        tabBar={(prop)=> <MyTabBar  {...prop}  />}
        
        screenOptions={{ headerShown: false, unmountOnBlur: true}}>

        <Tab.Screen
          name="Suggestions"
          children={() => {
            return <SuggestionScreen {...props}  parentNavigation = {props.navigation} matchType={matchType} />;
          }}  
        />
        <Tab.Screen
          name="Matches"
          screenOptions={{tabBarVisible: false}}
          children={() => {
            return <MatchesScreen matchType={matchType} />;
          }}
        />

        {/* <Tab.Screen
          name="Messages"
          screenOptions={{tabBarVisible: false}}
          children={() => {
            return <MessagesScr
            een />;
          }}
        /> */}
        <Tab.Screen name="Messages"  component={MessagesScreen} />
        <Tab.Screen name="Account" component={AccountStack} />

      </Tab.Navigator>
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

// console.log('state');
  // console.log(props);
  // console.log(state);
  // console.log(state);
  // console.log('des1');
  // console.log(descriptors[state.history[0].key].options['initialRouteName']);
  // console.log('des2');
  // console.log(descriptors);
  // console.log(props);