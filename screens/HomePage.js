/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from 'react';
 import type {Node} from 'react'; 
 import {Dimensions} from 'react-native';

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

 const image = require('../assets/grad.png');


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
    //  backgroundColor: 'brown',
     justifyContent: 'center',
     alignItems: 'center',
     // backgroundColor: 'blue',
   },
   container1: {
     flex: 1,
     width: windowWidth,
     // height: 80,
     padding: 10,
    //  backgroundColor: 'blue',
     justifyContent: 'center',
     alignItems: 'center',
 
     // backgroundColor: 'blue',
   },
   container3: {
     flex: 1,
     width: windowWidth,
     // height: 80,
     padding: 10,
    //  backgroundColor: 'red',
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
 
 export default HomeScreen;
 