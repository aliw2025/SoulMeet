/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//  book
//  https://www.worldnumerology.com/numerology-course-classes/numerology-class-01-intro/
//  http://numerology.center/pinnacle_cycles.php
//  https://www.paulineedward.com/calculations/
//  http://numerology.center/pinnacle_cycles.php
//  https://www.worldnumerology.com/numerology-chart-calculator.php
//  https://numerology.findyourfate.com/online-numerology/rationalfirst.php

// reference links to the wbstie
// libs
import React from 'react';
import type {Node} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importign screens
import HomeScreen from './screens/HomePage';
import SelectLanguage from './screens/languageScreen';
import AreYouHere from './screens/AreYouHere';
import BirthDayScreen from './screens/BirthdayScreen';
import ChartScreen from './screens/chartScreen';
import ProfileDetails1 from './screens/profileDetails1';
import ProfileDetails2 from './screens/profileDetails2';
import WhoAm from './screens/whoAm';
import SummaryScreen from './screens/SummaryScreen';
import SuggestionScreen from './screens/SuggestionScreen';
import MatchProfileScreen from './screens/MatchProfile';
import ItsAMatchScreen from './screens/ItsAMatchScreen';
import MatchesScreen from './screens/MatchesScreen';
import MessagesScreen from './screens/MessagesScreen';
// import ShadowTest from './screens/testShadow';

// creating variables
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
// importing react-native
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

// imporiting react libraries
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const image = require('./grad.png');
// main component of the app
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: (props)=> <EmptyHeader/>}}
        />
        <Stack.Screen
          name="SelectLanguage"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={SelectLanguage}
        />
        <Stack.Screen
          name="AreYouHere"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={AreYouHere}
        />
        <Stack.Screen
          name="BirthDay"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={BirthDayScreen}
        />
        <Stack.Screen
          name="ProfileDetails1"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={ProfileDetails1}
        />
        <Stack.Screen
          name="ProfileDetails2"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={ProfileDetails2}
        />
        <Stack.Screen
          name="WhoAm"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={WhoAm}
        />
        <Stack.Screen
          name="ChartScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={ChartScreen}
        />
        <Stack.Screen
          name="SummaryScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={SummaryScreen}
        />
        <Stack.Screen
          name="SuggestionScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={SuggestionScreen}
        />
        <Stack.Screen
          name="MatchProfileScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={MatchProfileScreen}
        />
        <Stack.Screen
          name="ItsAMatchScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={ItsAMatchScreen}
        />
        <Stack.Screen
          name="MatchesScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={MatchesScreen}
        />
        <Stack.Screen
          name="MessagesScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={MessagesScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const HomeScreen = ({navigation}) => {
//   return (
//     <ImageBackground
//       source={image}
//       resizeMode="cover"
//       style={styles.BackGrounimage}>
//       <SafeAreaView style={styles.SafeAreaView}>
//         <View style={[styles.main]}>
//           <ScrollView horizontal={true} style={styles.scrollContainer}>
//             <View style={[styles.container1]}>
//               <View style={[styles.inside]}></View>
//             </View>
//             <View style={[styles.container2]}>
//               <View style={[styles.inside]}></View>
//             </View>
//             <View style={[styles.container3]}>
//               <View style={[styles.inside]}></View>
//             </View>
//           </ScrollView>
//         </View>
//         <View style = {[styles.btn]}>
//         <Button
//           title="Go to Jane's profile"
//           onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
//         />
//         </View>
//       </SafeAreaView>
//     </ImageBackground>
//   );
// };

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  btn: {
    // backgroundColor: 'purple',
    flex: 1,
  },
  inside: {
    width: '80%',
    backgroundColor: 'gray',
    flex: 1,
    // height: 80,
  },
  main: {
    // backgroundColor: 'gray',
    // height: '50%',
    flex: 1,
  },
  container2: {
    flex: 1,
    // flexDirection: 'row',
    width: windowWidth,
    // height: 80,
    padding: 10,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  container1: {
    flex: 1,
    width: windowWidth,
    // height: 80,
    padding: 10,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',

    // backgroundColor: 'blue',
  },
  container3: {
    flex: 1,
    width: windowWidth,
    // height: 80,
    padding: 10,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
  },
  scrollContainer: {
    flex: 1,
    // flexDirection: 'row',
    // backgroundColor: 'gray',
    height: '50%',
  },
  // top most parent
  BackGrounimage: {
    flex: 1,
  },
});

export default App;
