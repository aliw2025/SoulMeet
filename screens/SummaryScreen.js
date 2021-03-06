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

const image = require('../assets/grad.png');
const flame = require('../assets/flame.png');
const couple = require('../assets/couple.png');
const network = require('../assets/network.png');
const card = require('../assets/card.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//  the screen component
const SummaryScreen = props => {

  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  var fname = props.route.params.fname;
  var mname = props.route.params.mname;
  var lname = props.route.params.lname;
  var navigation = props.navigation;
  const [usrData,setUsrData] = useState(undefined);
  const [percentagesNumbers,setPercenatagesNumber] = useState(undefined); 
  if(mname == ''){
    mname = lname;
  }else if(lname == ''){
    lname = mname;
  }
  function backAction(params) {
    navigation.goBack()
  }
  function singleDigit(val1) {
    console.log('val: '+val1);
    val1 = val1.split('/').map(Number)[0];
    val1 = String(val1)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    
      return val1;
   }

function calculatePercentage(i,data) {

  // calculating percentages
  var total = 0;
  if(singleDigit(data.numbers.lifePathNumber )== i){
    total += 12;
  }
  if(singleDigit(data.numbers.birthDayNumber )== i){
    total += 10;
  }
  if(singleDigit(data.numbers.expressionDestiny )== i){
    total += 10;
  }
  if(singleDigit(data.numbers.soulUrge )== i){
    total += 10;
  }
  if(singleDigit(data.numbers.personality )== i){
    total += 10;
  }
  if(singleDigit(data.numbers.minorExpression )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.minorSoulUrger )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.minorPersonality )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.attitude )== i){
    total += 5;
  }
  if(singleDigit(data.numbers.maturity )== i){
    total += 5;
  }
  if(singleDigit(data.numbers.maturity )== i){
    total += 5;
  }
  if(singleDigit(data.numbers.lifePathExpBrdige )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.heartDesirePersonaliyBriger )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.lifePathExpBrdige )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.rationalThaughtNumber )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.balanceNumber )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.subConNumber )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.kermicLesson )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.hiddenPassion )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.physicalPlane )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.mentalPlane)== i){
    total += 2;
  }
  if(singleDigit(data.numbers.intiuativePlane )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.emotionalPlane )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.corenerStong )== i){
    total += 2;
  }
  if(singleDigit(data.numbers.firstPeriodCycle )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.firstPeriodCycle )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.secPeriodCycle )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.thirdPeriodCycle)== i){
    total += 1;
  }
  if(singleDigit(data.numbers.pinnacle1 )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.pinnacle2 )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.pinnacle3 )== i){
    total += 1;
  }
  if(singleDigit(data.numbers.pinnacle4)== i){
    total += 1;
  }
  if(singleDigit(data.numbers.challenge1)== i){
    total += 1;
  }
  if(singleDigit(data.numbers.challenge2)== i){
    total += 1;
  }
  if(singleDigit(data.numbers.challenge3)== i){
    total += 1;
  }
  if(singleDigit(data.numbers.challenge4)== i){
    total += 1;
  }

return total;
    
}
function percetageOfNumberCalculator(data){
  var percentages = [];
  for(var i = 1 ; i <= 9; i++){

    percentages[i-1] = calculatePercentage(i,data);

  }
  return percentages;
}

  //  map of life path numbers matching
function updateData(data) {
    console.log('updating data ');
    if (data) {
      setUsrData(data);
      getCompatible(data);
      percetageOfNumberCalculator(data);
      setPercenatagesNumber(percetageOfNumberCalculator(data));
       
      // setFname(data.fname);
      // setMname(data.mname);
      // setLname(data.lname);
      // updateImage();
      // console.log('loading img from url:' + data.dp);
      // setDp({uri: data.dp});
      // console.log('done setImg');
      // console.log(dp);
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
  const [compArray,setCompArray] = useState([0,0,0,0,0,0,0,0,0]);
  var coArray = [0,0,0,0,0,0,0,0,0];
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
  function getNum(str){
    var val = 0;
    var arr = str.split('/');
    if(arr.length == 0){
      return arr[0];
    }else{
      return arr[1];
    }
  
  }
  function getCompatible(data){
    var lifePathNumber = 0;
    if(data){
      lifePathNumber = getNum(data.numbers.lifePathNumber);
      console.log(items[lifePathNumber-1]);
      coArray = items[lifePathNumber-1];
      setCompArray(items[lifePathNumber-1]);

    }
    console.log('life from fb:'+lifePathNumber);
  }
 

  // const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(props.route.params);
  // var day = props.route.params.day;
  // var month = props.route.params.month;
  // var year = props.route.params.year;
  // var day = 20;
  // var month = 2;
  // var year = 1996;
  var stval = '';
  const simpleSum = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    if (arr.length == 0) {
      return 0;
    }
    // console.log(arr);
    // console.log("dfdfd: "+ arr.length);
    let total = arr.reduce((acc, val) => acc + val);
    
    // if (total < 10 || total == 11 || total == 22 || total == 33) {
    //   return total;
    // }
    // console.log("dfdfd: "+ arr.length+'  '+total);
    if (total < 10) {
      return total;
    }
    return simpleSum(String(total).split('').map(Number));
  };

  const sum = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    if (arr.length == 0) {
      return 0;
    }
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    return simpleSum(String(total).split('').map(Number));
  };
  // get the transit nnumbers
  const TransitNumber = (mname, age) => {
    console.log('age recv '+age);
    var mArr = [];
    var total = 0;
    // mname = mname.toLowerCase();
    mname = mname.toUpperCase();
    var fval = mname.split('').map(val => {
      // var num = val.charCodeAt(0) - 96;
      var num = val.charCodeAt(0) - 64;
      var x = simpleSum([num]);
      // console.log('x:' +x);
      total = total + x;
      // mArr.push({ch:val,num:x});
      for (var i = 0; i < x; i++) {
        mArr.push(val);
      }
    });
    var mod = age % total;
    if(mArr.length ==0){
      return '';
    }
    // console.log('transit is '+mArr[mod]);
    
    return mArr[mod];
  };
  

  // getting the age 
  function calculateAge(day, month, year) {
    
    var d = '';
    d = d.concat(year, '-', month, '-', day);
    console.log("why " + d);
    var today = new Date();
    var birthDate = new Date(d);
    console.log('birthDate '+birthDate);
    console.log('my yaer'+birthDate.getFullYear());
    var age = today.getFullYear() - year;
    console.log('ageeee'+age);
    if(isNaN(age)){
      return 0;
    }
    // console.log("why " + age);
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    {
        age--;
    }
    // console.log('ages: '+age);
    return age;

  }
  

  function calculateCycle(physicalTransit, mentalTransit, spirtualTransit) {
    var physicalTransitc = physicalTransit.charCodeAt(0) - 64;
    var mentalTransitc = mentalTransit.charCodeAt(0) - 64;
    var spirtualTransitc = spirtualTransit.charCodeAt(0) - 64;
    var cycle = simpleSum([
      simpleSum([physicalTransitc]),
      simpleSum([mentalTransitc]),
      simpleSum([spirtualTransitc]),
    ]);
    console.log('cycle:' + cycle);
    return cycle;
  }

  var currentYear = new Date().getFullYear();
  const personalNumbers = (day, month) => {
    
    var s = new Date();
    var d = sum([s.getDate()]);
    var m = sum([s.getMonth()+1]);
    
    var y = sum([currentYear]);
    var bDay = sum([day]);
    var bMonth = sum([month]);
    var personalYear = sum([bDay, bMonth, y]);
    var personalMonth = sum([m, personalYear]);
    var personalDay = sum([d, personalMonth]);
    return [personalYear, personalMonth, personalDay];
  };
  

  //display the calculated age
  var age = calculateAge(day, month, year);
  var physicalTransit = TransitNumber(fname, age);
  var mentalTransit = TransitNumber(mname, age);
  var spirtualTransit = TransitNumber(lname, age);
  console.log('phy: ' + physicalTransit);
  console.log('men: ' + mentalTransit);
  console.log('spr: ' + spirtualTransit);
  var cycle = calculateCycle(physicalTransit, mentalTransit, spirtualTransit);
  var [personalYear, personalMonth, personalDay] = personalNumbers(day, month);

  personalNumbers(day, month);
  const navigationAction = ({screen,matchType}) => {  
    // setIsModalVisible(true);
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
       age:age,
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
        console.log(
          'Something went wrong with added user to firestore: ',
          error,
        );
      });
    console.log('screen ' +screen);
    console.log('match type '+matchType);
    props.navigation.navigate(screen, {matchType: matchType});
  };
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

  const d = new Date();
  var currentMonth = monthNames[d.getMonth()];
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var currentDay = days[d.getDay()];
  const showModal = () => {
    setModalVisible(true);
  };
  const onClick = () => {
    
    setModalVisible(false);
  };
  var box9 = (windowWidth - 80 - 2 * 9) / 9.0;
  box9 = box9 - 1;
  // console.log(box9);
  var box4 = (windowWidth - 80 - 2 * 4) / 4.0;
  box4 = box4 - 1;
  var box3 = (windowWidth - 80 - 2 * 3) / 3.0;
  box3 = box3 - 1;

  // [lpnText, selpnText] = useState(lpnTextText);
  // [bn, setBn] = useState(bnText);
  var box2 = 40;
  var indeicator = require('../assets/indicator.png');
  console.log(percentagesNumbers);
  if(!percentagesNumbers){
    return null;
  }
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      {/* <TouchableOpacity onPress = {()=>onClick()}> */}
      <SafeAreaView style={[{flex: 1}]}>
        {/* <View> */}
        <TouchableOpacity onPress = {()=>{
          backAction();
        }}>
          <View style={[styles.backBtn]}>
            <Text
              style={[{color: '#FFC700', fontSize: 20, fontWeight: 'bold'}]}>
              {'<'}
            </Text>
          </View>
        </TouchableOpacity>

        <View style={styles.mainPage}>
          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <Image
              style={{alignSelf: 'center', marginTop: -5}}
              source={indeicator}
            />
            <ScrollView>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Percentage of Your Numbers
              </Text>
              <View style={{height: 80, marginTop: 10}}>
                <View
                  style={{
                    // backgroundColor:'purple',
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 40,
                    marginRight: 40,
                  }}>
                  <ResultBox
                    haveHeading={true}
                    heading={1}
                    bodyText={percentagesNumbers[0].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={2}
                    bodyText={percentagesNumbers[1].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={3}
                    bodyText={percentagesNumbers[2].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={4}
                    bodyText={percentagesNumbers[3].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={5}
                    bodyText={percentagesNumbers[4].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={6}
                    bodyText={percentagesNumbers[5].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={7}
                    bodyText={percentagesNumbers[6].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={8}
                    bodyText={percentagesNumbers[7].toString()+"%"}
                    width={box9}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={9}
                    bodyText={percentagesNumbers[8].toString()+"%"}
                    width={box9}></ResultBox>
                </View>
              </View>

              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}>
                Relationship Compatibility 
              </Text>
              <View style={{height: 80, marginTop: 10}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 40,
                    marginRight: 40,
                  }}>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={1}
                    bodyText='1'
                    Compatibility = {compArray[0]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={2}
                    bodyText="2"
                    Compatibility = {compArray[1]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={3}
                    bodyText="3"
                    Compatibility = {compArray[2]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={4}
                    bodyText="4"
                    Compatibility = {compArray[3]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={5}
                    bodyText="5"
                    Compatibility = {compArray[4]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={6}
                    bodyText="6"
                    Compatibility = {compArray[5]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={7}
                    bodyText="7"
                    Compatibility = {compArray[6]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={8}
                    bodyText="8"
                    Compatibility = {compArray[7]}
                    width={box9}></ResultBox>
                  <ResultBox
                    height={box2}
                    haveHeading={false}
                    heading={9}
                    bodyText="9"
                    Compatibility = {compArray[8]}
                    width={box9}></ResultBox>
                </View>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 40,
                  marginRight: 40,
                }}>
                Yearly Forecast Cycles at {age} years of age - {currentYear}
              </Text>
              <View style={{height: 80, marginTop: 15}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 40,
                    marginRight: 40,
                  }}>
                  <ResultBox
                    haveHeading={true}
                    heading="Physical Transit"
                    bodyText={physicalTransit}
                    // height= {50}
                    width={box4}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading="Mental Transit"
                    bodyText={mentalTransit}
                    width={box4}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading="Spirtual Transit"
                    bodyText={spirtualTransit}
                    width={box4}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading="Essence
                  Cycle"
                    bodyText={cycle}
                    width={box4}></ResultBox>
                </View>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  marginLeft: 40,
                  marginRight: 40,
                }}>
                Yearly/Monthly/Daily Personal Cycles
              </Text>
              <View style={{height: 80, marginTop: 15}}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 40,
                    marginRight: 40,
                  }}>
                  <ResultBox
                    haveHeading={true}
                    heading={"Personal Year ".concat(currentYear)}
                    bodyText={personalYear}
                    width={box3}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={"Personal Month ".concat(currentMonth)}
                    bodyText={personalMonth}
                    width={box3}></ResultBox>
                  <ResultBox
                    haveHeading={true}
                    heading={"Personal Day ".concat(currentDay)}
                    bodyText={personalDay}
                    width={box3}></ResultBox>
                </View>
              </View>
              <View style={[{flex: 1, marginTop: 20}]}>
                <View
                  style={[{marginLeft: 40, marginTop: 10, marginBottom: 30}]}>
                  <ButtonWithBg
                    path="ProfileDetails1"
                    active="true"
                    text="Next"
                    btnAction={showModal}></ButtonWithBg>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
        {modalVisible && (
          <View
            style={{
              backgroundColor: 'white',
              width: windowWidth - 80,
              marginLeft: 40,
              marginRight: 40,
              // height: 200,
              borderRadius: 40,
              position: 'absolute',
              top: windowHeight * 0.5 - 200,
              left: 0,
              zIndex: 2,
            }}>
            <Text style={styles.mainHeading}>Select One</Text>
            <View style={[styles.row, {justifyContent: 'space-between'}]}>
              <View style={styles.cardBody}>
                <TouchableHighlight
                  underlayColor="clear"
                  onPress={name =>{
                    onClick();
                    navigationAction({screen: 'TabsScreen',matchType:'twin'});
                  }
                    
                  }>
                  <View style={{alignItems: 'center'}}>
                    <Image style={styles.tinyLogo} source={flame} />
                    <Text style={styles.name}>Twin flame match</Text>
                  </View>
                </TouchableHighlight>
              </View>
              <View style={styles.cardBody}>
                <TouchableHighlight
                  underlayColor="clear"
                  onPress={name =>{
                    onClick();
                    navigationAction({screen: 'TabsScreen',matchType:'couple'})
                  }
                  }>
                  <View style={{alignItems: 'center'}}>
                    <Image style={styles.tinyLogo} source={couple} />
                    <Text style={styles.name}>Couple Match</Text>
                </View>
                </TouchableHighlight>
              </View>
            </View>
            <View
              style={[
                styles.row,
                {marginBottom: 40, justifyContent: 'center'},
              ]}>
              <View style={styles.cardBody}>
                <TouchableHighlight
                  underlayColor="clear"
                  onPress={name => {
                    onClick();
                    navigationAction({screen: 'TabsScreen',matchType:'none'})
                  }
                    
                  }>
                  <View style={{alignItems: 'center'}}>
                    <Image style={styles.tinyLogo} source={network} />
                    <Text adjustsFontSizeToFit style={styles.name}>Connect with Other Users</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>
        )}
        {modalVisible && (
          <View
            style={{
              position: 'absolute',
              opacity: 0.7,
              width: '100%',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1,
            }}>
            {/* <Modal
              animationType="slide"
              transparent={true}
              visible={false}
              onRequestClose={() => {
                // Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
              }}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <Text style={styles.modalText}>
                    Hello WorldHello WorldHello WorldHello WorldHello World!
                  </Text>
                  <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>Hide Modal</Text>
                  </Pressable>
                </View>
              </View>
            </Modal> */}

            <TouchableHighlight onPress={() => onClick()}>
              <View
                style={{
                  backgroundColor: 'black',
                  width: '100%',
                  height: '100%',
                }}></View>
            </TouchableHighlight>
          </View>
        )}
        {/* </View> */}
        {/* </TouchableOpacity> */}
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  row: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    // height: '40%',
    flex: 1,
    flexDirection: 'row',
    // backgroundColor: 'pink',
  },
  mainHeading: {
    marginTop: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 34,
    color: 'black',
  },
  cardBody: {
    // marginTop: 20,
    // marginLeft: 20,
    // backgroundColor: 'purple',
    borderRadius: 10,
    borderColor: '#E8E6EA',
    borderWidth: 1,
    padding: 10,
    width: '45%',
    // height: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    // width:'80%',
    // height:'80%',
  },
  name: {
    marginTop: 20,
    color: 'black',
    width: '80%',
    textAlign: 'center',
  },
  backBtn: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    position: 'absolute',
    top: 40,
    left: 40,
  },
  scrollViewHeading: {
    marginLeft: 40,
    fontSize: 14,
    fontWeight: '700',
  },
  card: {
    flex: 1,
    marginTop: 20,
    // height:windowHeight,
    width: '100%',
  },
  BackGrounimage: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: windowWidth - 80,
    marginLeft: 40,
    marginRight: 40,
  },
  mainPage: {
    marginTop: 120,
    flex: 1,
  },
  heading: {
    marginTop: windowHeight * 0.12,
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor:'red',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
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
});

export default SummaryScreen;

// <Modal isVisible={isModalVisible}>
// <View style = {{backgroundColor:'red'}}>
// <TouchableOpacity
//     activeOpacity={1}
//     onPress= {()=>onClick()}
//   >
//   <TouchableWithoutFeedback>
//   <Modal.Container>
//     <View style={styles.modal}>
//       <Modal.Header title="You're just one step away!" />
//       <Modal.Body>
//         <Text style={styles.text}>
//           Want access? We just need your email address
//         </Text>
//       </Modal.Body>
{
  /* <Modal.Footer>
      <View style={styles.button}>
        <Button title="No thanks" onPress={handleDecline} />
        <Button title="Sign me up!" onPress={handleSignUp} />
      </View>
    </Modal.Footer> */
}
//     </View>
//   </Modal.Container>
//   </TouchableWithoutFeedback>
//   </TouchableOpacity>
//   </View>
// </Modal>
