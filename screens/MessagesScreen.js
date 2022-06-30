import React, {useState, useEffect, useRef} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import MessageRow from '../components/MessageRow';
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
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

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
  // console.log('messages screen props');
  // console.log(props);
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const flatListRef = React.useRef();
  const [imageList, setImageList] = useState(images);
  const [threadList, setThreadList] = useState(undefined);
  const [messageList, setMessageList] = useState(message);
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const [sndHeight, setSndHeight] = useState(0);
  const [msg, setMsg] = useState('');
  const [refresh, setRefresh] = useState(false);
  const [refresh2, setRefresh2] = useState(false);
  const [otherUser, setOtherUser] = useState(undefined);
  const [fname2, setFname2] = useState(undefined);
  const [mname2, setMname2] = useState(undefined);
  const [lname2, setLname2] = useState(undefined);
  const [age2, setAge2] = useState(undefined);
  const [dp2, setDp2] = useState(undefined);

  function messageClicked(params) {
    setOtherUser(params);
    setModalVisible(true);
    
  }

  function getMessagesCount(id){

  }

/** function to get Messages from firebase **/
  useEffect(() => {
    var msgs = []
    const subscriber = firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .doc(otherUser)
      .collection('messages')
      .orderBy('createdAt')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(documentSnapshot => {
          console.log('message #');
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          var msg = {id:documentSnapshot.id,data:documentSnapshot.data()};
           msgs.push(msg); 
        });
        
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        // ADD THIS THROW error
        throw error;
      });
      setMessageList(msgs);
    return () => {
      subscriber;
    };
  }, [otherUser,refresh2]);

  /** function to get Messages threads from firebase **/
  useEffect(() => {
    var threadArr = [];
    var subs;
    const subscriber = firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .onSnapshot(subs);
    
    firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .orderBy('updatedAt', 'desc')
      .get()
      .then(querySnapshot => {
        var i = 0;
        console.log('query snapshot done ');
        console.log(querySnapshot);
        querySnapshot.forEach(documentSnapshot => {
          console.log('threads');
          console.log(
            'User ID: ',
            documentSnapshot.id,
            documentSnapshot.data(),
          );
          var data = documentSnapshot.data();
          threadArr.push({
            id: documentSnapshot.id,
            data: documentSnapshot.data(),
          });
          i++;
        });
        setThreadList(threadArr);
      })
      .catch(function (error) {
        console.log(
          'There has been a problem with your fetch operation: ' +
            error.message,
        );
        throw error;
      });

    return () => {
      subscriber;
    };
  }, [refresh]);

  /*** geting user data to be used in mesaage card ****/
  useEffect(() => {
    var data2;
    const subscriber = firestore()
      .collection('users')
      .doc(otherUser)
      .onSnapshot(documentSnapshot => {
        if (documentSnapshot) {
          data2 = documentSnapshot.data();
          console.log('Other user data recived ');
          updateOtherUserData(data2);
        } else {
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, [otherUser]);

  function sendMsg() {
    /******* sender side *****/
    var createdAt = firestore.Timestamp.fromDate(new Date());
    firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .doc(otherUser)
      .collection('messages')
      .add({
        snd: auth().currentUser.uid,
        rsv: otherUser,
        text: msg,
        createdAt: createdAt,
      })
      .catch(error => {
        console.log(
          'Something went wrong with added user1 to firestore: ',
          error,
        );

      });
    firestore()
      .collection('messagesThreads')
      .doc(auth().currentUser.uid)
      .collection('threads')
      .doc(otherUser)
      .set({
        updatedAt: firestore.Timestamp.fromDate(new Date()),
      })
      .catch(error => {
        console.log(
          'Something went wrong with update1 user to firestore: ',
          error,
        );
       
      });
    
     /******* sender side *****/
    firestore()
      .collection('messagesThreads')
      .doc(otherUser)
      .collection('threads')
      .doc(auth().currentUser.uid)
      .collection('messages')
      .add({
        snd: auth().currentUser.uid,
        rsv: otherUser,
        text: msg,
        createdAt: createdAt,
      })
      .catch(error => {
        console.log(
          'Something went wrong with added user2 to firestore: ',
          error,
        );

      });
    firestore()
      .collection('messagesThreads')
      .doc(otherUser)
      .collection('threads')
      .doc(auth().currentUser.uid)
      .set({
        updatedAt: firestore.Timestamp.fromDate(new Date()),
      })
      .catch(error => {
        console.log(
          'Something went wrong with update2 user to firestore: ',
          error,
        );
        
      });
    setRefresh(!refresh);
    setRefresh(!refresh2);
    flatListRef.current.scrollToEnd({animated: true})

  }

  function updateOtherUserData(data) {
    if (data) {
      setFname2(data.fname);
      setMname2(data.mname);
      setLname2(data.lname);
      setDp2(data.dp);
    } else {
      console.log('error');
    }
  }

  

 /*** responseive keyboard ****/
  const onKeyboardShow = event => {
    setKeyboardOffset(event.endCoordinates.height);
  };
  const onKeyboardHide = () => {
    setKeyboardOffset(0);
  };
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();
  useEffect(() => {
    keyboardDidShowListener.current = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    );
    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);



  useEffect(() => {
    if (route.params) {
      if (route.params.reciver) {
        setOtherUser(route.params.reciver);
        setModalVisible(true);
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
          <Text style={styles.nameHeading}>Massages</Text>
        </View>
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Image source={attachment}></Image>
          </View>
        </TouchableOpacity>
      </View>
      {/* iis a match text */}

      <View style={[styles.searchBox]}>
        <Image style={[styles.serachIcon]} source={search}></Image>
        {/* <Text style = {[styles.serachText]}>search</Text> */}
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
          //  keyExtractor={(item, index) => index.toString()}
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

      <GestureRecognizer
        onSwipeDown={state => {
          setModalVisible(false);
        }}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            // Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.indicator}>
                <Image source={indicator}></Image>
              </View>
              {/* <GestureRecognizer
                style={{backgroundColor: 'gray',width:100,height:100}}
                onSwipeDown={() => {
                  console.log('bas kar bhai');
                  setModalVisible(false);
                }}>
                
                <Text> fdfdfd</Text>
              </GestureRecognizer>     */}
              <ImageBackground
                source={card}
                resizeMode="stretch"
                style={[styles.card]}>
                <View
                  style={{marginTop: 40, marginLeft: 40, marginRight: 40}}
                  underlayColor="#F3F3F3"
                  onPress={() => {
                    console.log('sing is king');
                    setModalVisible(true);
                  }}>
                  <View style={[styles.MessageRow]}>
                    <TouchableHighlight
                      style={{width: '20%'}}
                      underlayColor="clear"
                      onPress={() => {
                        console.log('sing is bling');
                      }}>
                      <View style={styles.messageDp}>
                        <Image
                          style={styles.dpImage}
                          source={{uri: dp2}}></Image>
                      </View>
                    </TouchableHighlight>
                    <View style={styles.messageSection}>
                      <Text style={[styles.messageHeading, {fontSize: 30}]}>
                        {fname2}
                      </Text>
                      <View
                        style={{alignItems: 'center', flexDirection: 'row'}}>
                        <View
                          style={{
                            backgroundColor: '#FFC700',
                            height: 10,
                            width: 10,
                            borderRadius: 360,
                            marginRight: 5,
                          }}></View>
                        <Text>online</Text>
                      </View>
                    </View>
                    <View style={styles.detailSection}>
                      <TouchableOpacity>
                        <View style={[styles.backBtn]}>
                          <Text>:</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View
                  style={[
                    styles.messagesView,
                    {height: windowHeight * 0.55 - keyboardOffset},
                  ]}>
                  <FlatList
                    data={messageList}
                    numColumns={1}
                    ref={flatListRef}
                    extraData = {refresh2}
                    // horizontal={true}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    onLayout={() =>
                      flatListRef.current.scrollToEnd({animated: true})
                    }
                    renderItem={({item}) => {
                      var backgroundColor = '#F3F3F3';
                      var marginLeft = '0%';
                      var borderBottomLeftRadius = 10;
                      var borderBottomRightRadius = 10;
                      if (item.snd == auth().currentUser.uid) {
                        marginLeft = '20%';
                        backgroundColor = '#F3F3F3';
                        // borderBottomLeftRadius = 0;
                        borderBottomRightRadius = 0;
                      } else {
                        marginLeft = '0%';
                        backgroundColor = '#fff9e6';
                        // borderBottomRightRadius = 0;
                        borderBottomLeftRadius = 0;
                      }
                      return (
                        <View style={{marginTop: 10}}>
                          <View
                            style={[
                              styles.messageBubble,
                              {
                                marginLeft: marginLeft,
                                backgroundColor: backgroundColor,
                                borderBottomRightRadius:
                                  borderBottomRightRadius,
                                borderBottomLeftRadius: borderBottomLeftRadius,
                              },
                            ]}>
                            <Text>{item.data.text}</Text>
                          </View>
                        </View>
                      );
                    }}
                    //  keyExtractor={(item, index) => index.toString()}
                  />
                </View>
                <View
                  style={{
                    // backgroundColor: 'red',
                    marginTop: 10,
                    // width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    // backgroundColor:'pink',
                    justifyContent: 'space-between',
                    marginLeft: 40,
                    marginRight: 40,

                    // height: '10%',
                    // backgroundColor: 'red',
                    // position: 'absolute',
                    // bottom: 0,
                  }}>
                  <View
                    style={[
                      styles.searchBox,
                      {
                        // marginLeft: 40,
                        // alignSelf: 'flex-end',
                        width: '80%',
                        marginTop: 0,
                        marginBottom: 0,
                      },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        var m = {
                          id: j,
                          type: 1,
                          message: msg,
                        };
                        // messageList.push(m);
                        // j++;
                        setRefresh(!refresh);
                        flatListRef.current.scrollToEnd({animated: true});
                        sendMsg();
                        setMsg('');
                      }}
                      style={[
                        {
                          position: 'absolute',
                          height: sndHeight,
                          alignItems: 'center',
                          justifyContent: 'center',
                          top: 0,
                          right: 0,
                        },
                      ]}>
                      <View
                        style={[
                          styles.backBtn,
                          {borderWidth: 0, height: sndHeight, width: 40},
                        ]}>
                        <Text
                          style={{
                            color: 'blue',
                            fontSize: 16,
                            fontWeight: 'bold',
                          }}>
                          >>
                        </Text>
                      </View>
                    </TouchableOpacity>

                    <TextInput
                      onBlur={() => {
                        setSndHeight(0);
                      }}
                      onFocus={() => {
                        setSndHeight(40);
                      }}
                      placeholder="your message"
                      placeholderTextColor="#00000066"
                      onChangeText={setMsg}
                      // important
                      value={msg}
                      style={[styles.feildValue, {marginLeft: 15}]}></TextInput>
                  </View>
                  <TouchableOpacity>
                    <View style={[styles.backBtn]}>
                      <Text>:</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </View>
          </View>
        </Modal>
      </GestureRecognizer>
      {modalVisible && <View style={styles.blackView}></View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  messageBubble: {
    backgroundColor: '#F3F3F3',
    // borderWidth: 1,
    width: '80%',
    padding: 15,
    borderRadius: 10,
  },
  messagesView: {
    marginLeft: 40,
    marginRight: 40,
    // height: '65%',
    // backgroundColor: 'pink',
  },
  indicator: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'pink',
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
    // backgroundColor:'pink',
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
    // backgroundColor:'pink',
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
    // borderBottomWidth:1,
  },
  messageHeading: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  messageSection: {
    marginLeft: '5%',
    flex: 1,
    // borderBottomWidth:1
  },
  dpImage: {
    width: '95%',
    height: '95%',
    borderRadius: 360,
    // resizeMode:'center',
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
    // backgroundColor: 'pink',
    height: 70,
    width: '100%',
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: 'purple',
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
    // position: 'absolute',
  },
  nameHeading: {
    fontSize: 30,
    // marginLeft: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  // new
  centeredView: {
    flex: 1,
    // height:windowHeight,
    width: windowWidth,
    // backgroundsColor:'black',
    // flexDirection:'row',
  },
  modalView: {
    marginTop: 150,
    alignSelf: 'flex-end',
    // backgroundColor: "gray",
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
    // top: -50,
    flex: 1,
    // marginTop: 20,
    height: windowHeight,
    width: '100%',
  },
});

export default MessagesScreen;
