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
//  https://play.google.com/store/apps/details?id=com.mirofox.numerologija
//  https://www.paulineedward.com/calculations/#:~:text=The%20Personal%20Month%20Number&text=To%20calculate%20a%20Personal%20Month,12%2C%201%20%2B%202%20%3D%203
//  https://youtu.be/e3oOSQmP_v8

// reference links to the wbstie
// libs
import React ,{ createContext }from 'react';
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
// import MatchProfileScreen from './screens/MatchProfile';
import ItsAMatchScreen from './screens/ItsAMatchScreen';
import MatchesScreen from './screens/MatchesScreen';
import MessagesScreen from './screens/MessagesScreen';
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import {FbUser}  from './Modals/user'
import Providers from './navigation'

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
const FirebaseContext = createContext({})
// main component of the app
const App: () => Node = () => {
  

  global.fbuser  = new FbUser('bmw','2013');
  
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
     <Providers />
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
