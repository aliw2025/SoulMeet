import React, {useState,useEffect} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, TouchableHighlightBase} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import ResultBox from '../components/ResultBox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

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
      <Text adjustsFontSizeToFit style={[styles.headingText,{marginLeft:10,color:props.txtColor}]}>
       {props.val}{'  '}{props.text}
      </Text>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          width: '80%',
          backgroundColor: '#E8E6EA',
          height: 1,
        }}></View>
    </View>
  );
};

const TableRow = props => {
  var x = 40;
  var bgColor = "white";
  var txtColor = "red";
  if (props.last == true) {
    x = 50;
  }
  if(props.status=="Challenge"){
    bgColor = "white";
    txtColor = "red";

  }else{
    bgColor  = '#FFC70033';
    txtColor = "green";
  }
  return (
    <View style={[styles.tableRow, {height: x,backgroundColor:bgColor}]}>
      <View style={styles.matchedView}></View>
      <TableCell val = {props.val1} text = {props.text}></TableCell>
      <TableCell val = {props.val2} last={props.last} text = {props.text}></TableCell>
      <TableCell val = {props.status} txtColor={txtColor}></TableCell>
    </View>
  );
};
//  the screen component
const MatchProfileScreen = (props) => {
  var items = [
    [3, 2 , 3 , 1 , 3 , 2 , 3, 1 , 3 ],
    [2, 3 , 2  , 3 , 1 , 3 , 1, 3 , 2 ],
    [2, 2 , 3 , 1 , 2 , 3 , 1, 1 , 3 ],
    [1, 3 , 1 , 3 , 1 , 3 , 2, 3 , 1 ],
    [3, 1 , 2 , 1 , 3 , 1 , 3, 2 , 2 ],
    [2, 3 , 3 , 3 , 1 , 3 , 1, 2 , 3 ],
    [3, 1 , 1 , 2 , 3 , 1 , 3, 2 , 2 ],
    [1, 3 , 1 , 3 , 2 , 2 , 2, 3 , 1 ],
    [2, 1 , 3 , 1 , 2 , 3 , 2, 1, 3 ],
  ];
  // logged in user Data
  function singleDigit(val1) {
    val1 = val1.split('/').map(Number)[0];
    val1 = String(val1)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
      return val1;
   }
  const [fname, setFname] = useState(undefined);
  const [mname, setMname] = useState(undefined);
  const [lname, setLname] = useState(undefined);
  const [age,setAge] = useState(undefined);
  const [usrData, setUsrData] = useState(undefined);
  const [profileImg, setProfileImg] = useState(undefined);
  const [dp, setDp] = useState(undefined);
// life path
const [lp,setLp ] = useState(undefined);
// birth day number
const [bn,setBn ] = useState(undefined);
// expression  number
const [exp,setExp ] = useState(undefined);
// birth day number
const [hd,setHd ] = useState(undefined);
// personality day number
const [per,setPer ] = useState(undefined);
// maturity day number
const [mat,setMat ] = useState(undefined);

const [lpStatus,setLpStatus ] = useState(undefined);
// birth day number
const [bnStatus,setBnStatus ] = useState(undefined);
// expression  number
const [expStatus,setExpStatus ] = useState(undefined);
// birth day number
const [hdStatus,setHdStatus ] = useState(undefined);
// personality day number
const [perStatus,setPerStatus ] = useState(undefined);
// maturity day number
const [matStatus,setMatStatus ] = useState(undefined);



var navigation = props.navigation;
  // other usre Data
  const [otherUser ,setOtherUser] = useState(props.route.params.otherUser);
  const [fname2, setFname2] = useState(undefined);
  const [mname2, setMname2] = useState(undefined);
  const [lname2, setLname2] = useState(undefined);
  const [age2,setAge2] = useState(undefined);
  const [dp2, setDp2] = useState(undefined);
  const [d1, setD1] = useState(undefined);
  const [d2, setD2] = useState(undefined);
  // life path
  const [lp2,setLp2 ] = useState(undefined);
  // birth day number
  const [bn2,setBn2 ] = useState(undefined);
  // expression  number
  const [exp2,setExp2 ] = useState(undefined);
  // birth day number
  const [hd2,setHd2 ] = useState(undefined);
  // personality day number
  const [per2,setPer2 ] = useState(undefined);
  // maturity day number
  const [mat2,setMat2 ] = useState(undefined);


  function updateStatus(params) {

      if(d1 && d2){

      
      if(items[lp-1][lp2-1]==3){
        setLpStatus("Perfect Match");
      }else{
        setLpStatus("Challenge");
      }
      if(items[bn-1][bn2-1]==3){
        setBnStatus("Perfect Match");
      }else{
        setBnStatus("Challenge");
      }
      if(items[exp-1][exp2-1]==3){
        setExpStatus("Perfect Match");
      }else{
        setExpStatus("Challenge");
      }
      if(items[hd-1][hd2-1]==3){
        setHdStatus("Perfect Match");
      }else{
        setHdStatus("Challenge");
      }
      if(items[per-1][per2-1]==3){
        setPerStatus("Perfect Match");
      }else{
        setPerStatus("Challenge");
      }
      if(items[mat-1][mat2-1]==3){
        setMatStatus("Perfect Match");
      }else{
        setMatStatus("Challenge");
      }
    }
  }
  

  function updateOtherUserData (data){
    if (data) {
      setFname2(data.fname);
      setMname2(data.mname);
      setLname2(data.lname);
      setAge2(data.age);
      setDp2(data.dp);

      setLp2(singleDigit(data.numbers.lifePathNumber))
      setBn2(singleDigit(data.numbers.birthDayNumber)) 
      setExp2(singleDigit(data.numbers.expressionDestiny))
      setHd2(singleDigit(data.numbers.soulUrge))
      setPer2(singleDigit(data.numbers.personality))
      setMat2(singleDigit(data.numbers.maturity))
      setD2(data);
     
      
    } else {
      console.log('error');
    }
  }


  function updateData(data) { 
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
      setAge(data.age);
      setDp(data.dp);
      var lp = singleDigit(data.numbers.lifePathNumber)
      setLp(lp);
      setBn(singleDigit(data.numbers.birthDayNumber) )
      setExp(singleDigit(data.numbers.expressionDestiny))
      setHd(singleDigit(data.numbers.soulUrge))
      setPer(singleDigit(data.numbers.personality))
      setMat(singleDigit(data.numbers.maturity))
      setD1(data);
      

    } else {

      console.log('error');
    }
  }
  useEffect(() => {
   updateStatus();

  }, [d1,d2]);

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

  
  

  useEffect(() => {
    var data2;
    const subscriber = firestore()
      .collection('users')
      .doc(otherUser.id)
      .onSnapshot(documentSnapshot => {
        if(documentSnapshot){
          data2= documentSnapshot.data();
          console.log('Other user data recived ');
          updateOtherUserData(data2);
          // updateData(data);
        }else{
          console.log('error in reciving data');
        }
      });
    return () => subscriber();
  }, []);


  const navigationAction = params => {

    props.navigation.navigate("ItsAMatchScreen", {otherUser: otherUser});

  };

  function renderImage(){
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
        <Image style={{width: "100%",height:"100%",}} source={{uri:dp2}}></Image>
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
          <TouchableOpacity onPress = {()=>{
            navigationAction("ItsAMatchScreen");
          }}>
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
              <Text style={styles.nameHeading}>{fname2}  {lname2}, {age2}</Text>
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
            <TableRow val1={lp} val2={lp2} status = {lpStatus} text = {'Life Path'} ></TableRow>
            <TableRow val1={bn} val2={bn2} status = {bnStatus} text = {'Birthday'}></TableRow>
            <TableRow val1={exp} val2={exp2} status = {expStatus} text = {'Expression'}></TableRow>
            <TableRow val1={hd} val2={hd2} status = {hdStatus}  text = {'Heart\'s Desire '}></TableRow>
            <TableRow val1={per} val2={per2}  status = {perStatus} text = {'Personality'}></TableRow>
            <TableRow  val1={mat} val2={mat2} status = {matStatus} text = {'Maturity'} last={true}></TableRow>
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
    width: (windowWidth-80)*0.33,
    alignItems: 'flex-start',
    // marginLeft:7,
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
    // backgroundColor: '#FFC70033',
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
