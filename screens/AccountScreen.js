import React, {useState,useEffect} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import {BlurView} from '@react-native-community/blur';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  FlatList,
  Image,
  TextInput,
  useColorScheme,
  TouchableOpacity,
  Pressable,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  Button,
  ImageBackground,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const photo = require('../assets/girl.png');
const love = require('../assets/love.png');
const black = require('../assets/black.png');
const attachment = require('../assets/setting.png');
const whiteCross = require('../assets/whiteCross.png');
const whiteheart = require('../assets/whiteHeart.png');
const card = require('../assets/card.png');
const indicator = require('../assets/indicator.png');

const mainProfile = require('../assets/mainProfile.png');
const mainProfile2 = require('../assets/redhaird.png');
const search = require('../assets/search.png');
const arrow = require('../assets/arrrow.png');

var images = [];
const ListItem = props => {
  var name = '';
  if (props.name) {
    name = props.name;
  }
  const navigationAction = params => {
    if (props.navigation && props.screen) {
      props.navigation.navigate(props.screen, {name: 'avvv'});
    }
  };
  return (
    <TouchableOpacity
      onPress={() => {
        navigationAction();
      }}
      style={{
        height: '7%',
        marginLeft: 40,
        marginRight: 40,
        justifyContent: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>{name}</Text>
        <Image source={arrow}></Image>
      </View>
      <View
        style={{
          bottom: 0,
          position: 'absolute',
          backgroundColor: '#E8E6EA',
          width: '100%',
          height: 1,
        }}></View>
    </TouchableOpacity>
  );
};
const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        // unmountOnBlur: true
      }}>
      <Stack.Screen name="AccountScreen" component={AccountScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

//  the screen component
const AccountScreen = props => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [usrData,setUsrData] = useState(undefined);
  const [fname,setFname] = useState(undefined);
  const [dp,setDp] = useState(undefined);
  function check(params) {
    setText('searching');
  }
  function updateData(data) {
    console.log('updating data ');
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setDp(data.dp);
     
    } else {
      console.log('error');
    }
  }

  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        var data;
        if(documentSnapshot){
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        }else{
          console.log('error in reciving data');
        }
      
      });
    return () => subscriber();
  }, []);
  const navigationAction = params => {
    props.navigation.navigate('MatchProfileScreen', {name: 'avvv'});
  };

  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 40,
          marginRight: 40,
          marginTop: 40,
          alignItems: 'center',
        }}>
        <View>
          <Text style={styles.nameHeading}>Profile</Text>
        </View>
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Image source={attachment}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.messageDp}>
        <Image style={styles.dpImage} source={{uri:dp}}></Image>
      </View>
      <View
        style={{
          marginTop: 10,
          fontWeight: 'bold',
          fontSize: 16,
          alignSelf: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, color: 'black'}}>
          {' '}
          {fname}
        </Text>
      </View>
      <ListItem name={'Add Other Profile'} navigation={props.navigation}>
      </ListItem>
      <ListItem name={'Store'} navigation={props.navigation}></ListItem>
      <ListItem name={'Rate This App'} navigation={props.navigation}></ListItem>
      <ListItem name={'Share App'} navigation={props.navigation}></ListItem>
      <ListItem name={'Feedback/Comments'} navigation={props.navigation}></ListItem>
      <ListItem
        name={'Settings'}
        navigation={props.navigation}
        screen={'SettingsScreen'}></ListItem>
      <ListItem name={'Term & Policy'} navigation={props.navigation}></ListItem>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  borderLine: {
    width: '75%',
    height: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E8E6EA',
  },

  dpImage: {
    width: 120,
    height: 120,
    borderRadius: 360,
  },
  messageDp: {
    width: 120,
    height: 120,
    overflow: 'hidden',
    borderRadius: 360,
    marginLeft: 5,
    marginTop: '10%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#E8E6EA',
    borderWidth: 1,
  },

  nameHeading: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
});

// export default AccountScreen;
export default AccountStack;
