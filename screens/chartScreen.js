import React, {useState,useEffect} from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TouchableOpacity,
  View,
  Button,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';

const image = require('../assets/grad.png');
const card = require('../assets/card.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//  the screen component
const ChartScreen = props => {
  // console.log(props.route.params);
  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  var fname = props.route.params.fname;
  var mname = props.route.params.mname;
  var lname = props.route.params.lname;
  var navigation = props.navigation;
   // authentication variables
   const [initializing, setInitializing] = useState(true);
   const [user, setUser] = useState();
   // firestore refrence
   let db = firestore();
   // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (user) {
      // console.log(user);
      // navigation.navigate('SelectLanguage', {name: 'Jane'});
    }

    if (initializing) setInitializing(false);
  }
  // keep track of changes in authetication
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  

  function saveData(params) {
    db.collection('users').doc(user.uid).update({
      numbers:{
        lifePathNumber:lpnText,
        birthDayNumber:bnText,
        expressionDestiny:exp,
        minorExpression:mExp,
        soulUrge:desireText,
      },
    }).then().catch((err) => console.log(err));
  }
 
  // var day = 20;
  // var month = 2;
  // var year = 1996;
  var stval = '';


  stval = stval.concat(
    year.toString(),
    '-',
    day.toString(),
    '-',
    month.toString(),
  );
  console.log('i am :'+fname+' '+mname+' '+lname+' '+stval);
  var stack = [];
  /**
   * function to calculate sum recursivley and reduce sum to single
   * digit exvept the master number
   */
  const sum = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    if(arr.length == 0){
      return 0;
    }
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    return sum(String(total).split('').map(Number));
  };
  /**
   * functio to add only last resutls to get 
   * single digit and the orignal full number
   */
  const sumAll = (arr = []) => {
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10) {
      return {reduced: total, total: total};
    } else {
      let reduced = String(total)
        .split('')
        .map(Number)
        .reduce((acc, val) => acc + val);
      return {reduced: reduced, total: total};
    }
  };
  const sumFinal = (arr = []) => {
    // if (arr.length === 1) {
    //   return +arr[0];
    // }
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    // console.log("pushin :"+total);
    stack.push(total);
    return sumFinal(String(total).split('').map(Number));
  };

  function convetToText(total) {
    var text = '';
    if (stack.length == 0 || total == 11 || total == 22 || total == 33) {
      text = text.concat(total.toString());
    } else {
      text = text.concat(
        stack[stack.length - 1].toString(),
        '/',
        total.toString(),
      );
    }
    return text;
  }
  /**
   * function to calculate the lipe path number
   */
  // const CalLifePathNumber = (date = '') => {

  //   let [year, month, day] = date.split('-');
  //   year = sum(String(year).split('').map(Number));
  //   month = sum(String(month).split('').map(Number));
  //   day = sum(String(day).split('').map(Number));

  //   return sumAll([year, month, day]);

  // };

  // let lpnObj = CalLifePathNumber(stval);
  // var lpnText = '';
  // lpnText = lpnText.concat(lpnObj.total, '/', lpnObj.reduced);
  
  // new
  const CalLifePathNumber = (date = '') => {

    let [year, month, day] = date.split('-');
    year = sum(String(year).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    day = sum(String(day).split('').map(Number));

    var total = simpleSum([year, month, day]);
    var text = convetToText(total);
    return text;
  };


  function calBirhtDayNumber(day) {
    if (day < 10) {
      return {reduced: day, total: day};
    } else {
      let reduced = String(day)
        .split('')
        .map(Number)
        .reduce((acc, val) => acc + val);
      return {reduced: reduced, total: day};
    }
  }

  let bnObj = calBirhtDayNumber(day);
  var bnText = '';
  bnText = bnText.concat(bnObj.total, '/', bnObj.reduced);
  
  
  function calExpressionNumber(fname, mname, lname) {
    let c = 'c';
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();

    var fval = sum(fname.split('').map(val => val.charCodeAt(0) - 96));
    var mval = sum(mname.split('').map(val => val.charCodeAt(0) - 96));
    var lval = sum(lname.split('').map(val => val.charCodeAt(0) - 96));

    var total = sumFinal([fval, mval, lval]);
    var text = convetToText(total);
    return text;
  }
  stack = [];
  let expText = calExpressionNumber(fname, mname, lname);

 
  function calMinorExpressionNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    var fval = sum(fname.split('').map(val => val.charCodeAt(0) - 96));
    // console.log(fval);
    var lval = sum(lname.split('').map(val => val.charCodeAt(0) - 96));
    // console.log(lval);
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;
  }

  

  
  function calDesireNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    
    
    var fval = 0;
    let arr = fname.match(/[aeiou]/gi);
    if(arr!=null){
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    var mval = 0;
    let arr2 = mname.match(/[aeiou]/gi);
    if(arr2!=null){
      mval = sum(arr2.map(val => val.charCodeAt(0) - 96));
    }
    var lval = 0;
    let arr3 = lname.match(/[aeiou]/gi);
    if(arr3!=null){
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
    
    var total = sumFinal([fval, mval, lval]);
    var text = convetToText(total);
    return text;
  }
  

  function calMinorDesireNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    var fval = 0;
    let arr = fname.match(/[aeiou]/gi);
    if(arr!=null){
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    var lval = 0;
    let arr3 = lname.match(/[aeiou]/gi);
    if(arr3!=null){
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
   
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;
  }

  

  

  function calPersonNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    let arr = fname.match(/[^aeiou]/gi);
    var fval = 0;
    if(arr!=null){
      fval =  sum(
        arr.map(val => val.charCodeAt(0) - 96),
      );
    }
   
    let arr2 =  mname.match(/[^aeiou]/gi);
    var mval = 0;
    if(arr2!=null){
      mval =  sum(
        arr2.map(val => val.charCodeAt(0) - 96),
       );
    }
   let arr3 = lname.match(/[^aeiou]/gi);
   var lval = 0;
   if(arr3!=null){
    lval = sum(
      arr3.map(val => val.charCodeAt(0) - 96),
    );
   }
   
    var total = sumFinal([fval, mval, lval]);
    var text = convetToText(total);
    return text;
  }

 

  function calMpersonNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    let arr = fname.match(/[^aeiou]/gi);
    var fval = 0;
    if(arr!=null){
      fval =  sum(
        arr.map(val => val.charCodeAt(0) - 96),
      );
    }
    
   let arr3 = lname.match(/[^aeiou]/gi);
   var lval = 0;
   if(arr3!=null){
    lval = sum(
      arr3.map(val => val.charCodeAt(0) - 96),
    );
   }
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;
  }
  

  function calBridgeNumber(val1, val2) {
    //console.log('IAML '+val1.split('/').map(Number)[0]);
    val1 = val1.split('/').map(Number)[0];
    val1 = String(val1)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    val2 = val2.split('/').map(Number)[0];
    val2 = String(val2)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    var res = parseInt(val2) - parseInt(val1);
    return res.toString();
  }

  const simpleSum = (arr = []) => {
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10) {
      return total;
    }
    stack.push(total);
    return sum(String(total).split('').map(Number));
  };

  function calMaturityNumber(val1, val2) {
    val1 = val1.split('/').map(Number)[0];
    val1 = String(val1)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    val2 = val2.split('/').map(Number)[0];
    val2 = String(val2)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    var res = simpleSum([val1, val2]);
    return res.toString();
  }

  // function to calculate life path number
  const CalAttitudeNumber = (date = '') => {
    let [month, day] = date.split('-');
    var res = simpleSum([parseInt(month), parseInt(day)]);
    return res.toString();
  };

  function calRtn(birthDay, fname) {

    fname = fname.toLowerCase();
    let arr = fname.match(/[a-z]/gi);
    var fval = 0;
    if(arr!=null){
      fval = simpleSum(arr.map(val => val.charCodeAt(0) - 96));
    }
    console.log("ffval: "+fval);
    let birthDayNo = birthDay.split('/').map(Number)[0];
    birthDayNo = String(birthDayNo)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    var res = simpleSum([parseInt(fval), parseInt(birthDayNo)]);
    return res.toString();
  }

  function calBalanceNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();

    var fval = 0;
    if(fname.length!=0){
       fval = fname[0].charCodeAt(0) - 96;
    }
    var mval = 0;
    if(mname.length!=0){
       mval = mname[0].charCodeAt(0) - 96;
    }

    var lval = 0;
    if(lname.length!=0){
       lval = lname[0].charCodeAt(0) - 96;
    }
   
    // console.log(fval);
    // console.log(mval);
    // console.log(lval);
    var res = simpleSum([fval, mval, lval]);
    return res.toString();
  }

  var flags = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function calkeramicNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    var text = '';
    var fullname = '';
    fullname = fullname.concat(fname, mname, lname);
    // console.log("my full name is :"+fullname);
    // console.log(fullname.split('').map((val)=>simpleSum(String(val.charCodeAt(0)-96).split('').map(Number))))
    fullname.split('').map(
      val =>
        (flags[
          simpleSum(
            String(val.charCodeAt(0) - 96)
              .split('')
              .map(Number),
          )
        ] = 1),
    );
    // console.log(flags);
    var first = 0;
    flags.map((val, index) => {
      if (val == 0 && index != 0) {
        if (first == 0) {
          text = text.concat(index);
          first = 1;
        } else {
          text = text.concat(',', index);
        }
      }
    });
    return text;
  }
  function calSubConSelfNumber(karamicText) {
    var len = keramicText.split(',').length;
    // console.log(len);
    return (9 - len).toString();
  }

  flags = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  function calHiddenPassionNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    var text = '';
    var fullname = '';
    fullname = fullname.concat(fname, mname, lname);
    fullname.split('').map(
      val =>
        (flags[
          simpleSum(
            String(val.charCodeAt(0) - 96)
              .split('')
              .map(Number),
          )
        ] += 1),
    );
    var maxValue = Math.max(...flags);
    console.log(Math.max(...flags));
    var indices = [];
    var text = '';
    var first = 0;
    for (var i = 0; i < flags.length; i++) {
      if (flags[i] == maxValue) {
        if (first == 0) {
          text = text.concat(i.toString());
          first = 1;
        } else {
          text = text.concat(',', i.toString());
        }
      }
    }
    const index = flags.indexOf(maxValue);
    return text;
    // console.log(flags)
  }

  function calPlanes(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    var physicalPlane = '';
    var mentalPlane = '';
    var intiuativePlane = '';
    var emotionalPlane = '';

    var fullname = '';
    fullname = fullname.concat(fname, mname, lname);
    stack = [];
    let arr1 =  fullname.match(/[ewdm]/gi);
    var ans = 0;
    if(arr1!=null){
      ans = sumFinal(
        arr1.map(val => {
           var x = val.charCodeAt(0) - 96;
           x = sum(String(x).split('').map(Number));
           console.log(val + ' : ' + x);
           return x;
         }),
       );
    }
    var physicalPlane = convetToText(ans);
    console.log('ans 1: ' + physicalPlane);
    stack = [];
    ans = 0;
    let arr2 = fullname.match(/[ahjnpgl]/gi);
    if(arr2 != null){
      ans = sumFinal(
        arr2.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          console.log(val + ' : ' + x);
          return x;
        }),
      );
    }
    var mentalPlane = convetToText(ans);
    console.log('ans 2: ' + mentalPlane);
    stack = [];
    ans = 0;
    let arr3 = fullname.match(/[iorzbstx]/gi);
    if(arr3 !=null){
      ans = sumFinal(
        arr3.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          console.log(val + ' : ' + x);
          return x;
        }),
      );
    }
    var emotionalPlane = convetToText(ans);
    console.log('ans 3s: ' + emotionalPlane);
    stack = [];
    ans = 0;
    let arr4 = fullname.match(/[kfquycv]/gi);
    if(arr4!=null){
      ans = sumFinal(
        arr4.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          console.log(val + ' : ' + x);
          return x;
        }),
      );
    }
    stack = [];
    var intiuativePlane = convetToText(ans);
    console.log('ans 4: ' + intiuativePlane);
    return [physicalPlane, mentalPlane, emotionalPlane, intiuativePlane];
  }

  function calCornerStone(fname) {
    fname = fname.toLowerCase();
    var stone = fname[0];
    return stone;
  }

  function calPeriodCycles(day, month, year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    return [month.toString(), day.toString(), year.toString()];
  }
  function calPinnacleCycles(day,month,year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    let pinnacle1  = sum([day,month]);
    let pinnacle2 = sum([day,year]);
    let pinnacle3 = sum([pinnacle1,pinnacle2]);
    let pinnacle4 = sum([month,year]);
    return [pinnacle1.toString(),pinnacle2.toString(),pinnacle3.toString(),pinnacle4.toString()];
    
  }
  function calChallengeNumber(day,month,year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    let challenge1  = day - month;
    if(challenge1<0){
      challenge1 = challenge1*-1;
    }
    let challenge2 = year - day;
    if(challenge2<0){
      challenge2 = challenge2*-1;
    }
    let challenge3 = challenge1 - challenge2;
    if(challenge3<0){
      challenge3 = challenge3*-1;
    }
    let challenge4 = year - month;
    if(challenge4<0){
      challenge4 = challenge4*-1;
    }
    return [challenge1.toString(),challenge2.toString(),challenge3.toString(),challenge4.toString()];
  }

  stack = [];
  var lpnText  = CalLifePathNumber(stval);
  stack = [];
  console.log('i am 2:'+fname+' '+mname+' '+lname+' '+stval);
  let desireText = calDesireNumber(fname, mname, lname);
  stack = [];
  let mExpText = calMinorExpressionNumber(fname, mname);
  stack = [];
  let mDesireText = calMinorDesireNumber(fname, mname);
  stack = [];
  let personText = calPersonNumber(fname, mname, lname);
  stack = [];
  let mPersonText = calMpersonNumber(fname, mname);

  // [lpnText, selpnText] = useState(lpnTextText);
  // [bn, setBn] = useState(bnText);
  
  [exp, setExp] = useState(expText);
  [mExp, setMexp] = useState(mExpText);

  let lpExpBrText = calBridgeNumber(lpnText, exp);
  let hdPerBrText = calBridgeNumber(desireText, personText);
  let maturityText = calMaturityNumber(lpnText, exp);
  let attitudeText = CalAttitudeNumber(stval);
  let rtnText = calRtn(bnText, fname);
  let balanceText = calBalanceNumber(fname, mname, lname);
  let keramicText = calkeramicNumber(fname, mname, lname);
  let subConText = calSubConSelfNumber(keramicText);
  let hiddenPassionText = calHiddenPassionNumber(fname, mname, lname);
  let [phyPlaneText, menPlaneText, emotPlaneText, intPlaneText] = calPlanes(
    fname,
    mname,
    lname,
  );
  let cornetStoneText = calCornerStone(fname);
  let [periodCyleText1, periodCyleText2, periodCyleText3] = calPeriodCycles(
    day,
    month,
    year,
  );
  let [pinnalceCyleText1, pinnalceCyleText2, pinnalceCyleText3,pinnalceCyleText4] = calPinnacleCycles(
    day,
    month,
    year,
  );
  let [challengeText1, challengeText2, challengeText3,challengeText4] = calChallengeNumber(
    day,
    month,
    year,
  );

  const navigationAction = params => {
    if (user) {
      saveData();
    }
    console.log('nav'+year);
    navigation.navigate("SummaryScreen",{
      day: day,
      month: month,
      year: year,
      fname: fname,
      mname: mname,
      lname: lname,
    });
  }
  var indeicator  = require('../assets/indicator.png')
  var fullName = '';
  fullName = fullName.concat(fname,' ',mname,' ',lname);
  var nickName = '';
  nickName = nickName.concat(fname,' ',mname);
  if (initializing) {
    console.log('null');
    return null;
  }
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={[{flex: 1}]}>
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Text
              style={[{color: '#FFC700', fontSize: 20, fontWeight: 'bold'}]}>
              {'<'}
            </Text>
          </View>
        </TouchableOpacity>
        <View style={styles.mainPage}>
          <View style={[styles.container]}>
            <Text style={[styles.heading]}>Chart Calculator</Text>
          </View>
         
          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
          <Image
          style={{alignSelf:'center',marginTop:-5}}
          source={indeicator}
          />
          <ScrollView style={[{flex: 1, marginTop: 20}]}>
              <InfoBox heading="Current Name" bodyText={nickName}></InfoBox>
              <InfoBox
                heading="Full Name at Birth"
                bodyText = {fullName}></InfoBox>
              <InfoBox
                heading="Date of Birth"
                bodyText={stval}></InfoBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Life Path Number"
                value={lpnText}></ValueBox>
               
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Birthday Number"
                value={bnText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Expression / Destiny"
                value={exp}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Expression / Destiny"
                value={mExp}></ValueBox>
                 
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Soul Urge / Heart’s Desire"
                value={desireText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Soul Urge / Heart’s Desire"
                value={mDesireText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                heading="Personality"
                value={personText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                heading="Minor Personality"
                value={mPersonText}></ValueBox>
              <View
                style={[
                  {backgroundColor: '#00000033', width: '60%', height: 1},
                ]}></View>
                 
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Maturity"
                value={maturityText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Attitude"
                value={attitudeText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Life Path/Expression
                Bridge Number"
                value={lpExpBrText}></ValueBox>
                
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Heart’s Desire/ Personality
                Bridge, Planes of Expression"
                value={hdPerBrText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Rational Thought Number"
                value={rtnText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Balance Number"
                value={balanceText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Subconcious Self Number"
                value={subConText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Karmic Lesson"
                value={keramicText}></ValueBox>
                
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Hidden Passion"
                value={hiddenPassionText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Hereditary Name"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Physical Plane of Expression"
                value={phyPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Mental Plane of Expression"
                value={menPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Intutive Plane of Expression"
                value={intPlaneText}></ValueBox>
                {/* numners:{
                  lifePathNumber:lpnText,
                  birthDayNumber:bnText,
                  expressionDestiny:exp,
                  minorExpression:mExp,
                  soulUrge:desireText,
                  minorSoulUrger:mDesireText,
                  personality:personText,
                  minorPersonality:mPersonText,
                  maturity:maturityText,
                  attitude:attitudeText,
                  lifePathExpBrdige:lpExpBrText,
                  heartDesirePersonaliyBriger:hdPerBrText,
                  rationalThaughtNumber:rtnText,
                  balanceNumber:balanceText,
                  subConNumber:subConText,
                  kermicLesson:keramicText,
                  hiddenPassion:hiddenPassionText,
                  physicalPlane:phyPlaneText,
                  mentalPlane:menPlaneText,
                  intiuativePlane:intPlaneText,
                  emotionalPlane:emotPlaneText,
                } */}
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Emotional Plane of Expression"
                value={emotPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Corenerstone"
                value={cornetStoneText}></ValueBox>
              <Text style={styles.scrollViewHeading}>
                Chapters of your LIfe
              </Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Period Cycle
                (From Birth to Age 33)"
                value={periodCyleText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Period Cycle
                (From Age 34 to Age 60)"
                value={periodCyleText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Period Cycle
                (From Age 61 and on)"
                value={periodCyleText3}></ValueBox>
              <Text style={styles.scrollViewHeading}>Seasons of Your Life</Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Pinnacle Number
                (From Birth to age 33)"
                value={pinnalceCyleText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Pinnacle Number
                (From age 34 to age 42)"
                value={pinnalceCyleText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Pinnacle Number
                (From age 43 to age 51)"
                value={pinnalceCyleText3}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Fourth Pinnacle Number
                (From age 53 and on)"
                value={pinnalceCyleText4}></ValueBox>
              <Text style={styles.scrollViewHeading}>
                Your Challenges in Life
              </Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="First Challenge Number
                (From birth to age 33)"
                value={challengeText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Second Challenge Number
                (From age 34 to age 42)"
                value={challengeText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Third Challenge Number
                (From agr 43 to age 51)"
                value={challengeText3}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Fourth Challenge Number
                (From age 52 and on)"
                value={challengeText4}></ValueBox>
              <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"
                  btnAction = {navigationAction}
                  navigation={navigation}></ButtonWithBg>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
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
    width: windowWidth- 80,
    marginLeft:40,
    marginRight:40,
    // backgroundColor:'gray',
    // justifyContent:'center',
    // alignItems:'center',

    
  },
  mainPage: {
    flex: 1,
    // justifyContent:'center',
    // alignItems: 'center',
  },
  heading: {
    // textAlign: 'left',
    marginTop: windowHeight *0.12,
    fontSize: 40,
    fontWeight: 'bold',
    color:'black',
  },
});

export default ChartScreen;
