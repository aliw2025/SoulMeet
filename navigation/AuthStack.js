import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomePage';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    // options={{title: (props)=> <EmptyHeader/>}}
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthStack;

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
