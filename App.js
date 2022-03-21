/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// libs
import React from 'react';
import type {Node} from 'react';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// importign screens
import  HomeScreen from './screens/HomePage'
import SelectLanguage from './screens/languageScreen'
import  AreYouHere from './screens/AreYouHere'
import BirthDayScreen from './screens/BirthdayScreen'
import ProfileScreen from './screens/ProfileScreen';

// creating variables
const Stack = createNativeStackNavigator();
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
<<<<<<< HEAD
//
=======
// importing react-native 
>>>>>>> 72784a9 (worked on the scrollView)
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
        headerShown: false
      }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // options={{title: (props)=> <EmptyHeader/>}}
        />
        <Stack.Screen
          name="Profile"
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
          name="ProfileScreen"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


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
