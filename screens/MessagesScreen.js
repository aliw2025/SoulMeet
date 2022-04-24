import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import {BlurView} from '@react-native-community/blur';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

// import {Modal} from '../components/Modal';
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
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;
// const arrow = require('../assets/arrow.png');
// const setting = require('../assets/setting.png');
// const photo = require('../assets/photo.png');
// const mainProfile = require('../assets/mainProfile.png');
// const cross = require('../assets/cross.png');
// const star = require('../assets/star.png');
// const heart = require('../assets/heart.png');
// const roundContainer = require('../assets/roundContainer.png');
// const WhiteContainer = require('../assets/whiteContainer.png');
// const message = require('../assets/message.png');
// const match = require('../assets/match.png');
// const grayHeart = require('../assets/grayHeart.png');
// const dot = require('../assets/dot.png');
// const people = require('../assets/people.png');
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
  message.push({
    id: i,
    type: type,
    message:
      'Hi Jake, how are you? I saw on the app that we’ve crossed paths several times this week 😄',
  });
}

//  the screen component
const MessagesScreen = props => {
  const [text, onChangeText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  // console.log('text: '+text);
  const flatListRef = React.useRef();

  const [imageList, setImageList] = useState(images);

  const [messageList, setMessageList] = useState(message);

  function check(params) {
    setText('searching');
  }

  const navigationAction = params => {
    props.navigation.navigate('MatchProfileScreen', {name: 'avvv'});
    //navigation.navigate("ChartScreen", {name: 'Jane'});
  };
  // check();
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
            console.log('item:' + item.id);
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
          data={imageList}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            console.log('item:' + item.id);
            return (
              <TouchableHighlight
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
                      <Image style={styles.dpImage} source={item.image}></Image>
                    </View>
                  </TouchableHighlight>
                  <View style={styles.messageSection}>
                    <Text style={styles.messageHeading}>Name</Text>
                    <Text>text</Text>
                  </View>
                  <View style={styles.detailSection}>
                    <Text>23min</Text>
                    <View style={styles.yellowBubble}>
                      <Text style={styles.bubbleText}>1</Text>
                    </View>
                  </View>
                  <View style={styles.borderLine}></View>
                </View>
              </TouchableHighlight>
            );
          }}
          //  keyExtractor={(item, index) => index.toString()}
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
            Alert.alert('Modal has been closed.');
            this.setModalVisible(!modalVisible);
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
                          source={imageList[0].image}></Image>
                      </View>
                    </TouchableHighlight>
                    <View style={styles.messageSection}>
                      <Text style={[styles.messageHeading, {fontSize: 30}]}>
                        Name
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
                <View style={styles.messagesView}>
                  <FlatList
                    data={messageList}
                    numColumns={1}
                    ref={flatListRef}
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
                      if (item.type == 1) {
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
                                borderBottomRightRadius:borderBottomRightRadius,
                                borderBottomLeftRadius: borderBottomLeftRadius,
                              },
                            ]}>
                            <Text>{item.message}</Text>
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
                    marginTop:10,
                    width: '100%',
                    flexDirection:'row',
                    alignItems:'center',
                    // height: '10%',
                    // backgroundColor: 'red',
                    // position: 'absolute',
                    // bottom: 0,
                  }}>
                  <View style={[styles.searchBox,{marginLeft:40,alignSelf:'flex-start',width:'60%',marginTop:0,marginBottom:0}]}>
                    
                    
                    <TextInput
                      placeholder="your message"
                      placeholderTextColor="#00000066"
                     // important
                      // value={'your message'}
                      style={[styles.feildValue,{marginLeft:15,}]}></TextInput>
                     
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
    height: '70%',
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
    height: 60,
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
