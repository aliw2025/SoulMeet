import React, {useState,useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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

const card = require('../assets/card.png');

var indeicator = require('../assets/indicator.png');

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const arrow = require('../assets/arrow.png');
const attachment = require('../assets/attachment.png');
const photo = require('../assets/girl.png');
const mainProfile = require('../assets/mainProfile.png');
const cross = require('../assets/cross.png');
const star = require('../assets/star.png');
const heart = require('../assets/heart.png');
const roundContainer = require('../assets/roundContainer.png');
const WhiteContainer = require('../assets/whiteContainer.png');
const message = require('../assets/message.png');
const match = require('../assets/match.png');
const grayHeart = require('../assets/grayHeart.png');
const dot = require('../assets/dot.png');
const people = require('../assets/people.png');
const pin = require('../assets/pin.png');
const dbtick = require('../assets/dbtick.png')

var text = [];
for (var i = 0; i < 100; i++) {
  var c = 'this is text';
  c = c.concat(': ', i.toString());
  text.push(c);
}
const TableCell = props => {
  var bottomLeft = 0;
  var bottomRight = 0;
  var rad = 0;
  var height = 0;
  if (props.last == true) {
    bottomLeft = 20;
    bottomRight = 20;
    rad = 1;
   
  }
 
  return (
    <View
      style={[
        styles.tableCell,
        {
          borderBottomRightRadius: bottomRight,
          borderBottomLeftRadius: bottomLeft,
          borderWidth: rad,
        },
      ]}>
      <Text adjustsFontSizeToFit style={styles.headingText}>
        7 Heart’s Desire
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '80%',
          backgroundColor: '#E8E6EA',
          // backgroundColor:'pink',
          height: 1,

          // borderWidth:1
        }}></View>
    </View>
  );
};

const TableRow = props => {
  var x = 40;
  if (props.last == true) {
    x = 50;
   
  }
  return (
    <View style={[styles.tableRow, {height: x}]}>
      <View style={styles.matchedView}></View>
      <TableCell></TableCell>
      <TableCell last={props.last}></TableCell>
      <TableCell></TableCell>
    </View>
  );
};
//  the screen component
const MatchProfileScreen = (props) => {
  const [fname, setFname] = useState(undefined);
  const [mname, setMname] = useState(undefined);
  const [lname, setLname] = useState(undefined);
  const [age,setAge] = useState(undefined);
  const [usrData, setUsrData] = useState(undefined);
  const [profileImg, setProfileImg] = useState(undefined);
  const [dp, setDp] = useState(undefined);
  console.log("reccv props");
  console.log(props.route.params);
  const [otherUser ,setOtherUser] = useState(props.route.params.otherUser);
  console.log("logging other user");
  console.log(otherUser);
  function updateData(data) {
    console.log('updating data ');
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
      setAge(data.age);
      setDp(data.dp);
     
    } else {
      console.log('error');
    }
  }
  var data;
  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        
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
    console.log('i am nav');
    // props.navigation.navigate('MatchProfileScreen', {name: 'avvv'});
    props.navigation.navigate("ItsAMatchScreen", {name: 'Jane'});

  };
  function renderImage(){
    
    console.log(dp);
    var source;
    if(dp){
      source = {uri:dp};
    }else{
      source = photo;
    }
    return(
        <Image style={{width: '100%'}} source={source}></Image>
    );
  }
  return (
    <View style={[{flex: 1, backgroundColor: 'white'}]}>
      {/* image container */}
      <View style={{alignItems: 'center',height:'55%', marginTop: 0}}>
        {/* image of person */}
        {/* {renderImage()} */}
        <Image style={{width: "100%",height:"100%"}} source={{uri:otherUser.data.dp}}></Image>
      </View>
      {/* background white card */}
      <ImageBackground source={card} resizeMode="stretch" style={[styles.card]}>
        <View style={[styles.selectionRow]}>
          {/* cross */}
          <TouchableOpacity>
            <View style={[styles.roundBtn]}>
              <Image source={cross} />
            </View>
          </TouchableOpacity>
          {/* love */}
          <TouchableOpacity>
            <View style={{marginTop: 15}}>
              <Image source={roundContainer}></Image>
              <Image
                style={{position: 'absolute', alignSelf: 'center', top: '25%'}}
                source={heart}
              />
            </View>
          </TouchableOpacity>
          {/* star */}
          <TouchableOpacity>
            <View style={[styles.roundBtn]}>
              <Image source={star} />
            </View>
          </TouchableOpacity>
        </View>
        <ScrollView style={[{flex: 1, marginTop: 20}]}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginLeft: 40,
              marginRight: 40,
            }}>
            <View>
              <Text style={styles.nameHeading}>{otherUser.data.fname}  {otherUser.data.lname}, {otherUser.data.age}</Text>
              <Text
                style={[
                  styles.nameHeading,
                  {fontSize: 15, marginTop: 5, fontWeight: 'normal'},
                ]}>
                {/* Professional model */}
              </Text>
            </View>
            <TouchableOpacity>
              <View style={[styles.backBtn]}>
                <Image source={attachment}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.tableCard}>
            {/* heading area */}
            <View style={styles.orangeStrip}>
              <View style={[styles.heading2]}>
                <Text style={styles.headingText}>Mariah Carey</Text>
                <Text style={styles.headingText}>27-Mar-1970</Text>
              </View>
              <View style={[styles.heading2, {backgroundColor: '#F27121'}]}>
                <Text style={styles.headingText}>Mariah Carey</Text>
                <Text style={styles.headingText}>27-Mar-1970</Text>
              </View>
              <View style={[styles.heading2]}>
                <Text style={styles.headingText}>Compatibility</Text>
              </View>
            </View>
            {/* body area */}
            {/* row 1 */}
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow></TableRow>
            <TableRow last={true}></TableRow>
          </View>
          {/* match area */}
          <View
            style={{
              marginTop: 25,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Overall Match:
            </Text>
            <Text style={{color: 'green', fontSize: 16, fontWeight: 'bold'}}>
              {' '}
              85%
            </Text>
          </View>
          {/* location area*/}
          <View style={styles.locationView}>
            <View>
              <Text style={styles.locationHeading}>Location</Text>
              <Text style={styles.locationName}>chicago, IL United States</Text>
            </View>
            <View style={styles.pinView}>
              <Image source={pin}></Image>
              <Text style={styles.distanceText}>1 Km</Text>
            </View>
          </View>
          {/* about view */}
          <View style = {{marginTop:30,marginLeft:40,marginRight:40,}}>
            <Text style={styles.locationHeading}>About</Text>
            <Text>
              My name is Jessica Parker and I enjoy meeting new people and
              finding ways to help them have an uplifting experience. I enjoy
              reading..
            </Text>
          </View>
          {/* intrests */}
          <View style = {{marginTop:30,marginLeft:40,marginRight:40,}}>
            <Text style={styles.locationHeading}>Interests</Text>
            <View style = {{marginTop:10,flexDirection:'row'}}>
              <TouchableOpacity style = {{width:'33%'}}onPress={()=>{
                  navigationAction();
              }} >
                <View style = {styles.intrestView}>
                  <Image source = {dbtick}></Image>
                  <Text>Travelling</Text>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity style = {{width:'33%'}}>
                <View style = {styles.intrestView}>
                  <Image source = {dbtick}></Image>
                  <Text>Travelling</Text>
                  </View>
              </TouchableOpacity>
                
            </View>
            
          </View>
          {renderImage()}
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  intrestView:{
    marginLeft:1,
    // width:'33%',
    justifyContent:'center',
    paddingTop:5,
    paddingBottom:5,
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
    borderColor:'#FFC700',
    borderWidth:1,
  },
  locationHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  pinView: {
    flexDirection: 'row',
    // height:'50%',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    // backgroundColor: 'pink',
    padding: 5,
    // backgroundColor:'#FFC700',
    // opacity:0.5
  },
  distanceText: {
    marginLeft: 5,
  },
  locationView: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tableCell: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    borderRightWidth: 1,
    borderColor: '#E8E6EA',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
    alignItems: 'center',
    //  backgroundColor:'#FFC70033'
    // backgroundColor:'pink',
  },
  matchedView: {
    width: '100%',
    height: 30,
    position: 'absolute',
    backgroundColor: '#FFC70033',
  },
  headingText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 10,
  },
  heading2: {
    width: '33%',
    height: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // borderWidth:2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tableCard: {
    width: windowWidth - 80,
    marginLeft: 40,
    // height: 150,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    marginTop: 20,
  },
  orangeStrip: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems:'center',
    backgroundColor: '#FFC700',
    borderRadius: 15,
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    // position: 'absolute',
  },
  nameHeading: {
    fontSize: 24,
    // marginLeft: 40,
    color: 'black',
    fontWeight: 'bold',
  },
  selectionRow: {
    // backgroundColor:"pink",
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: -60,
    marginLeft: 40,
    marginRight: 40,
  },
  roundBtn: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 360,
    width: 80,
    height: 80,
    elevation: 1,
    shadowOffset: {width: 0.5, height: -0.5},
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  card: {
    top: -50,
    flex: 1,
    marginTop: 20,
    height: windowHeight,
    width: '100%',
  },
  topRow: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
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
  BackGrounimage: {
    alignItems: 'center',
    backgroundColor: 'pink',
    alignSelf: 'center',
    width: '80%',
  },
});

export default MatchProfileScreen;
