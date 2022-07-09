import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
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
import MatchProfileScreen from '../screens/MatchProfileScreen';
import ItsAMatchScreen from '../screens/ItsAMatchScreen';
import MatchesScreen from '../screens/MatchesScreen';
import MessagesScreen from '../screens/MessagesScreen';
import Description from '../screens/Description';
import AccountScreen from '../screens/AccountScreen';
import TabsScreen from '../screens/TabsScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {/* // options={{title:  (props)=> <EmptyHeader/>}}   */}
      {/* <Stack.Screen name="SelectLanguage" component={SelectLanguage} /> */}
      <Stack.Screen name="AreYouHere" component={AreYouHere} />
      {/* <Stack.Screen name="BirthDay" component={BirthDayScreen} />
      <Stack.Screen name="ProfileDetails1" component={ProfileDetails1} />
      <Stack.Screen name="ProfileDetails2" component={ProfileDetails2} />
      <Stack.Screen name="WhoAm" component={WhoAm} /> */}
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
      <Stack.Screen name="SummaryScreen" component={SummaryScreen} />
      <Stack.Screen name="MatchProfileScreen" component={MatchProfileScreen} />
      <Stack.Screen name="ItsAMatchScreen" component={ItsAMatchScreen} />
      <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
      <Stack.Screen name="Description" component={Description} />
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="TabsScreen" component={TabsScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
