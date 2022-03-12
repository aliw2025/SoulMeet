/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Kuni from './Card';
import {Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EmptyHeader  from './EmptyHeader';

const Stack = createNativeStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
const image = require('./grad.png');
const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: (props)=> <EmptyHeader></EmptyHeader>}
        />
        <Stack.Screen
          name="Profile"
          options={{title: 'Welcomedfdf'}}
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={[styles.main]}>
          <ScrollView horizontal={true} style={styles.scrollContainer}>
            <View style={[styles.container1]}>
              <View style={[styles.inside]}></View>
            </View>
            <View style={[styles.container2]}>
              <View style={[styles.inside]}></View>
            </View>
            <View style={[styles.container3]}>
              <View style={[styles.inside]}></View>
            </View>
          </ScrollView>
        </View>
        <View style = {[styles.btn]}>
        <Button 
          title="Go to Jane's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Jane'})}
        />
        </View>
       
      </SafeAreaView>
    </ImageBackground>
  );
};
const ProfileScreen = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};
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
