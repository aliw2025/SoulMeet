


import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SelectLanguage from '../screens/languageScreen';
import AreYouHere from '../screens/AreYouHere';
import BirthDayScreen from '../screens/BirthdayScreen';
import ChartScreen from '../screens/chartScreen';
import ProfileDetails1 from '../screens/profileDetails1';
import ProfileDetails2 from '../screens/profileDetails2';
import WhoAm from '../screens/whoAm';
import SummaryScreen from '../screens/SummaryScreen';
import SuggestionScreen from '../screens/SuggestionScreen';
import MatchProfileScreen from '../screens/MatchProfile';
import ItsAMatchScreen from '../screens/ItsAMatchScreen';
import MatchesScreen from '../screens/MatchesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import Description from '../screens/Description'

// import SignupScreen from '../screens/SignupScreen';
// import LoginScreen from '../screens/LoginScreen';
// import OnboardingScreen from '../screens/OnboardingScreen';

// import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
//   const [isFirstLaunch, setIsFirstLaunch] = useState(null);
//   let routeName;

//   useEffect(() => {
//     AsyncStorage.getItem('alreadyLaunched').then((value) => {
//       if (value == null) {
//         AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
//         setIsFirstLaunch(true);
//       } else {
//         setIsFirstLaunch(false);
//       }
//     }); // Add some error handling, also you can simply do setIsFirstLaunch(null)
  
//   }, []);

//   if (isFirstLaunch === null) {
//     return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
//   } else if (isFirstLaunch == true) {
//     routeName = 'Onboarding';
//   } else {
//     routeName = 'Login';
//   }

  return (


<Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        
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
        <Stack.Screen
          name="Description"
          // options={{title:  (props)=> <EmptyHeader/>}}
          component={Description}
        />
        
      </Stack.Navigator>
  );
};

export default AuthStack;



