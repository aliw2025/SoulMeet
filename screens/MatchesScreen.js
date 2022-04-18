import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';

// import {Modal} from '../components/Modal';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  Image,
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
const photo = require('../assets/girl.png');
const love = require('../assets/love.png');
const attachment = require('../assets/attachment.png');


const mainProfile = require('../assets/mainProfile.png');
var images = []
    for(var i=0; i<10;i++){
        images.push(photo)
    }
    console.log("images: "+images);
//  the screen component
const MatchesScreen = props => {
  //   const [shadowOffsetWidth, setShadowOffsetWidth] = useState(0);
  //   const [shadowOffsetHeight, setShadowOffsetHeight] = useState(0);
  //   const [shadowRadius, setShadowRadius] = useState(0);
  //   const [shadowOpacity, setShadowOpacity] = useState(2);
  const navigationAction = params => {
    props.navigation.navigate('MatchProfileScreen', {name: 'avvv'});
    
    //navigation.navigate("ChartScreen", {name: 'Jane'});
  };
  return (
    <SafeAreaView style={[{flex: 1, backgroundColor: 'white'}]}>
      <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 40,
              marginRight: 40,
              alignItems:'center',
            }}>
            <View>
              <Text style={styles.nameHeading}>Matches</Text>
            </View>
            <TouchableOpacity>
              <View style={[styles.backBtn]}>
                <Image source={attachment}></Image>
              </View>
            </TouchableOpacity>
          </View>
      {/* iis a match text */}
     
      <Text style={[styles.matchSubHeading]}>
      This is a list of people who have liked you and your matches.
      </Text>
      <View style = {{marginLeft:40,marginRight:40,marginTop:20,}}>
      <ButtonWithBg
        path="ProfileDetails1"
        active="true"
        text="Say hello"
        btnAction={navigationAction}
        ></ButtonWithBg>
        
      </View>
      <View style = {{marginLeft:40,marginRight:40,marginTop:20,}}>
      <ButtonWithBg
        path="ProfileDetails1"
        active="true"
        text="Keep swiping"
        btnAction={navigationAction}
        ></ButtonWithBg>
      </View>
      {/* image galery */}
      <ScrollView>
      <View style = {{width:windowWidth-80,alignSelf:'center'}}>
         {

             images.map((val,index)=>{
                if(index%2==0){
                    return(
                        <View style ={{flexDirection:'row'}}>

                        <Image source = {val} style={{width:'50%',height:100}} ></Image>

                        </View>
                    );
                    
                }
                else{
                    return(
                        <Image source = {val} style={{height:100,width:'50%',alignSelf:'flex-end'}} ></Image>
                    )
                    
                }

             })
         }
          

      </View>
      </ScrollView>
      

      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  matchHeading: {
    marginTop: 40,
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    fontSize: 50,
    color: '#FFC700',
    fontWeight: 'bold',
  },
  matchSubHeading: {
    marginTop: 10,
    // textAlign: 'center',
    marginLeft: 40,
    marginRight: 40,
    fontSize: 16,
    color: 'black',
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
});

export default MatchesScreen;
