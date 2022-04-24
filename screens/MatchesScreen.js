import React, {useState} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Platform,Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import {BlurView} from '@react-native-community/blur';


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
const black = require('../assets/black.png');
const attachment = require('../assets/attachment.png');
const whiteCross = require('../assets/whiteCross.png');
const whiteheart = require('../assets/whiteHeart.png');

const mainProfile = require('../assets/mainProfile.png');
const mainProfile2 = require('../assets/redhaird.png');

var images = [];
for (var i = 0; i < 10; i++) {
  if(i==3){
    images.push({id: i, image: mainProfile2});
  }else if (i % 2 == 0) {
    images.push({id: i, image: mainProfile});
  } else {
    images.push({id: i, image: photo});
  }
}
console.log();
//  the screen component
const MatchesScreen = props => {
  const [imageList, setImageList] = useState(images);
  const navigationAction = params => {
    props.navigation.navigate('MessagesScreen', {name: 'avvv'});
  
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
          marginTop: 40,
          alignItems: 'center',
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
      <View style = {[styles.searchBox]}>
        
      </View>
      <View
        style={{marginTop: 40, width: windowWidth - 80, alignSelf: 'center'}}>
        <FlatList
          data={imageList}
          numColumns={2}
          renderItem={({item}) => {
            var alignment = '';
            if (item.id % 2 == 0) {
              alignment = 'flex-start';
              console.log('item: ' + alignment);
            } else {
              alignment = 'flex-end';
            }
            if(Platform.OS === 'ios'){
              return (
                <View style={[styles.imageContainerStyle]}>
                  <TouchableOpacity
                    key={item.id}
                    style={{flex: 1}}
                    onPress={() => {
                      navigationAction();
                    }}
                  >
                    <Image
                      blurRadius={0}
                      style={[styles.imageStyle, {alignSelf: alignment}]}
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <Text style={styles.name}>Leilani, 19</Text>
                  <View style = {[styles.parentBlur,{alignSelf:alignment}]}>
                 
                  <BlurView
                    // blurType="dark"
                    // blurAmount={10}
                    // reducedTransparencyFallbackColor="white"
                    style={[styles.blurView, {alignSelf: alignment}]}>
                        <View style ={[styles.box,{borderRightWidth:1,borderColor:'white'}]}>
                          <Image  source={whiteCross}></Image>
                        </View>
                        <View style ={styles.box}>
                          <Image source={whiteheart}></Image>
                        </View>
                    </BlurView>
                  </View>
                 
                </View>
              );
            }
            return (
              <View style={[styles.imageContainerStyle]}>
                <TouchableOpacity
                  key={item.id}
                  style={{flex: 1}}
                  onPress={() => {
                    navigationAction();
                  }}
                >
                  <Image
                    blurRadius={0}
                    style={[styles.imageStyle, {alignSelf: alignment}]}
                    source={item.image}
                  />
                </TouchableOpacity>
                <Text style={styles.name}>Leilani, 19</Text>
                <View style = {[styles.parentBlur,{alignSelf:alignment}]}>
               
                <View
                  // blurType="dark"
                  // blurAmount={10}
                  // reducedTransparencyFallbackColor="white"
                  style={[styles.blurView, {alignSelf: alignment,backgroundColor:'black',opacity:0.5}]}>
                      <View style ={[styles.box,{borderRightWidth:1,borderColor:'white'}]}>
                        <Image  source={whiteCross}></Image>
                      </View>
                      <View style ={styles.box}>
                        <Image source={whiteheart}></Image>
                      </View>
                  </View>
                </View>
               
              </View>
            );
          }}
          //  keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box:{
    height:'100%',
    width:'50%',
    alignItems:'center',
    justifyContent:'center',
    // alignSelf:'center',
    // backgroundColor:'red',
  },
  name: {
    color: 'white',
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 60,
    marginLeft: 15,
    fontSize: 16,
  },
  blurImg: {
    width: '100%',
    height: '100%',
  },
  parentBlur:{
    height:50,
    width: '95%',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    //  makes it work
    overflow:'hidden',
    position: 'absolute',
    bottom: 0,
  },
  blurView: {
    
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.8,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  imageContainerStyle: {
    marginTop: 10,
    width: '50%',
    height: 200,
    // backgroundColor: 'pink',
    // height:100,
  },
  imageStyle: {
    width: '95%',
    height: '100%',
    borderRadius: 20,
    resizeMode: 'cover',
    // resizeMode:'contain',
    // resizeMode:'center',
    // resizeMode:'stretch',
  },
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
