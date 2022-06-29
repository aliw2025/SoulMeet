// import React from 'react';
import {Dimensions} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const MessageRow = item => {
  const [n1, setN1] = useState('');
  const [dp,setDp] = useState(undefined);
  var name1 = 'dd';
  const subscriber = firestore()
    .collection('users')
    .doc(item.id)
    .onSnapshot(documentSnapshot => {
      if (documentSnapshot) {
        var doc = documentSnapshot.data();
          setN1(doc.fname);
          setDp(doc.dp);
        name1 = doc.fname;
      } else {
        console.log('error in reciving data');
      }
    });
  return (
    <TouchableHighlight
      underlayColor="#F3F3F3"
      onPress={() => {
       item.messageClicked(item.id);
        
      }}>
      <View style={[styles.MessageRow]}>
        <TouchableHighlight
          style={{width: '20%'}}
          underlayColor="clear"
          onPress={() => {
            console.log('sing is bling');
          }}>
          <View style={styles.messageDp}>
            <Image style={styles.dpImage} source={{uri:dp}}></Image>
          </View>
        </TouchableHighlight>
        <View style={styles.messageSection}>
          <Text style={styles.messageHeading}>{n1}</Text>
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
  
  

export default MessageRow;