import React, {useState, useEffect, useRef} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import MessageRow from '../components/MessageRow';
import MessageCard from '../components/MessageCard'

import {
  Dimensions,
  TouchableHighlightBase,
  Alert,
  Keyboard,
} from 'react-native';

import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import {BlurView} from '@react-native-community/blur';

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


var images = [];
var message = [];
var j = 0;
for (var i = 0; i < 10; i++) {
  var type = 0;
  if (i == 3) {
    images.push({id: i, image: mainProfile2});
  } else if (i % 2 == 0) {
    images.push({id: i, image: mainProfile});
    type = 1;
  } else {
    images.push({id: i, image: photo});
    type = 2;
  }
}

//  the screen component
const MessagesScreen = props => {


  var route = props.route;
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [imageList, setImageList] = useState(images);
  const [threadList, setThreadList] = useState(undefined); 
  const [refresh, setRefresh] = useState(false);
  const [otherUser, setOtherUser] = useState(undefined);

  
  function messageClicked(params) {
  
    setModalVisible(true);
    setOtherUser(params);
    
  }

  function getMessagesCount(id){
    

  }

  /** function to get Messages threads from firebase **/
  useEffect(() => {
    const subscriber = firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .orderBy('updatedAt', 'desc')
      .onSnapshot((querySnapshot)=>{
        var threadArr = [];
        var i = 0;
        querySnapshot.forEach(documentSnapshot => {
          // console.log(documentSnapshot.data());
          var data = documentSnapshot.data();
          threadArr.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
          i++;
        });
        setThreadList(threadArr);
      })  
    return () => {
      subscriber();
    };
  }, [refresh]);

  useEffect(() => {
    if (route.params) {
      if (route.params.reciver) {
        
        setModalVisible(true);
        setOtherUser(route.params.reciver);
      }
    }
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
          <Text style={styles.nameHeading}>Messages</Text>
        </View>
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Image source={attachment}></Image>
          </View>
        </TouchableOpacity>
      </View>
  
      <View style={[styles.searchBox]}>
        <Image style={[styles.serachIcon]} source={search}></Image>
        <TextInput
          placeholder="Search"
          placeholderTextColor="#00000066"
          onChangeText={onChangeText}
          value={text}
          style={[styles.feildValue]}></TextInput>
      </View>
      <Text style={[styles.nameHeading, {marginLeft: 40, fontSize: 20}]}>
        Activities
      </Text>

      <View style={styles.statusView}>
        <FlatList
          data={imageList}
          numColumns={1}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <View style={[styles.messageDp, {width: 60}]}>
                <Image style={styles.dpImage} source={item.image}></Image>
              </View>
            );
          }}
        />
      </View>
      <Text style={[styles.nameHeading, {marginLeft: 40, fontSize: 20}]}>
        Messages
      </Text>
      <View
        style={{marginTop: 10, width: windowWidth - 80, alignSelf: 'center'}}>
        <FlatList
          data={threadList}
          numColumns={1}
          extraData={refresh}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <MessageRow messageClicked={messageClicked} {...item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <MessageCard setOtherUser = {setOtherUser} otherUser = {otherUser} modalVisible = {modalVisible} setModalVisible={setModalVisible} ></MessageCard>
      {modalVisible && <View style={styles.blackView}></View>}
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  messageBubble: {
    backgroundColor: '#F3F3F3',
    width: '80%',
    padding: 15,
    borderRadius: 10,
  },
  messagesView: {
    marginLeft: 40,
    marginRight: 40,
  },
  indicator: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: -5,
  },
  blackView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'black',
    opacity: 0.8,
  },
  feildValue: {
    marginLeft: 5,
    width: '80%',
    color: 'black',
  },
  serachIcon: {
    marginLeft: 20,
  },
  serachText: {
    marginLeft: 5,
    color: '#00000066',
  },
  searchBox: {
    width: windowWidth - 80,
    marginTop: 10,
    alignSelf: 'center',
    marginBottom: 10,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#E8E6EA',
    flexDirection: 'row',
    alignItems: 'center',
  },

  statusView: {
    marginTop: 10,
    marginLeft: 40,
    width: windowWidth - 40,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },

  borderLine: {
    width: '75%',
    height: 1,
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#E8E6EA',
  },
  bubbleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  yellowBubble: {
    width: '30%',
    height: '30%',
    backgroundColor: '#FFC700',
    borderRadius: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailSection: {
    alignItems: 'center',
    width: '20%',
  },
  messageHeading: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageSection: {
    marginLeft: '5%',
    flex: 1,
  },
  dpImage: {
    width: '95%',
    height: '95%',
    borderRadius: 360,
  },
  messageDp: {
    width: '100%',
    height: 60,
    overflow: 'hidden',
    borderRadius: 360,
    marginLeft: 5,
    backgroundColor: 'white',
    borderLeftColor: '#F27121',
    borderRightColor: '#E94057',
    borderTopColor: '#E94057',
    borderBottomColor: '#F27121',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  MessageRow: {
    height: 70,
    width: '100%',
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
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
  centeredView: {
    flex: 1,
    width: windowWidth,
  },
  modalView: {
    marginTop: 150,
    alignSelf: 'flex-end',
    width: '100%',
    height: '82%',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    height: windowHeight,
    width: '100%',
  },
});

export default MessagesScreen;
