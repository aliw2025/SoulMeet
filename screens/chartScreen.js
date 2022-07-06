import React, {useState, useEffect} from 'react';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions} from 'react-native';
import InfoBox from '../components/InfoBox';
import ValueBox from '../components/valueBox';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

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
  
  var navigation = props.navigation;
  const [initializing, setInitializing] = useState(true);
  let db = firestore();

  // const [lifePathNumber, setlifePathNumber] = useState(undefined);
  var lifePathNumber = 0;
  function setlifePathNumber(param) {
    lifePathNumber = param;
  }
  
  const [fname, setFname] = useState(undefined);
  const [mname, setMname] = useState(undefined);
  const [lname, setLname] = useState(undefined);
  const [day, setDay] = useState();
  const [month, setMonth] = useState(undefined);
  const [year, setYear] = useState(undefined);
  // // pinnacle ages
  // const [pinnacleAge1,setpinnacleAge1] = useState(undefined);
  // const [pinnacleAge2,setpinnacleAge2] = useState(undefined);
  // const [pinnacleAge3,setpinnacleAge3] = useState(undefined);
  // //  period ages
  // const [periodAge1,setperiodAge1] = useState(undefined);
  // const [periodAge2,setperiodAge2] = useState(undefined);

  var pinnacleAge1 = 0;
  var pinnacleAge2 = 0;
  var pinnacleAge3 = 0;

  function setpinnacleAge1(param){
    console.log('param is ' );
    pinnacleAge1 = param;
  }
  function setpinnacleAge2(param){
    pinnacleAge2 = param;
  }
  function setpinnacleAge3(param){
    pinnacleAge3 = param;
  }
  
  
  var periodAge1 = 0;
  var periodAge2= 0;
  function setperiodAge1(param){
    console.log('parasm is '+param);
    periodAge1 = param;
  }
  function setperiodAge2(param){
    periodAge2 = param;
  }


  /** function to calcuate ages **/
  function calculateCylesAges() {
    console.log('outside');
    if(lifePathNumber){
      console.log('inside '+ lifePathNumber);
      if(lifePathNumber == 1){
        // period ages
        setperiodAge1(26);
        setperiodAge2(53);
        // pinnacle ages
        setpinnacleAge1(35)
        setpinnacleAge2(44)
        setpinnacleAge3(53)

      }else if(lifePathNumber == 2){
        // period ages
        setperiodAge1(34);
        setperiodAge2(61);
        // pinnacle ages
        setpinnacleAge1(34)
        setpinnacleAge2(43)
        setpinnacleAge3(52)

      }
      else if(lifePathNumber == 3){
        // period ages
        setperiodAge1(33);
        setperiodAge2(60);
        // pinnacle ages
        setpinnacleAge1(33)
        setpinnacleAge2(42)
        setpinnacleAge3(51)
      }
      else if(lifePathNumber == 4){
        // period ages
        setperiodAge1(32);
        setperiodAge2(59);
        // pinnacle ages
        setpinnacleAge1(32)
        setpinnacleAge2(41)
        setpinnacleAge3(50)
      }
      else if(lifePathNumber == 5){
        // period ages
        setperiodAge1(31);
        setperiodAge2(58);
        // pinnacle ages
        setpinnacleAge1(31)
        setpinnacleAge2(40)
        setpinnacleAge3(49)
      }
      else if(lifePathNumber == 6){
        // period ages
        setperiodAge1(30);
        setperiodAge2(57);
        // pinnacle ages
        setpinnacleAge1(30)
        setpinnacleAge2(39)
        setpinnacleAge3(48)
      }
      else if(lifePathNumber == 7){
        // period ages
        setperiodAge1(29);
        setperiodAge2(56);
        // pinnacle ages
        setpinnacleAge1(29)
        setpinnacleAge2(38)
        setpinnacleAge3(47)
      }
      else if(lifePathNumber == 8){
        // period ages
        setperiodAge1(28);
        setperiodAge2(55);
        // pinnacle ages
        setpinnacleAge1(28)
        setpinnacleAge2(37)
        setpinnacleAge3(46)    
      }
      else if(lifePathNumber == 9){
        // period ages
        setperiodAge1(27);
        setperiodAge2(54);
        // pinnacle ages
        setpinnacleAge1(27)
        setpinnacleAge2(36)
        setpinnacleAge3(45)
      }
      else if(lifePathNumber == 11){
        // period ages
        setperiodAge1(34);
        setperiodAge2(61);
        // pinnacle ages
        setpinnacleAge1(34)
        setpinnacleAge2(43)
        setpinnacleAge3(52)
      }
      else if(lifePathNumber == 22){
        // period ages
        setperiodAge1(32);
        setperiodAge2(59);
        // pinnacle ages
        setpinnacleAge1(32)
        setpinnacleAge2(41)
        setpinnacleAge3(50)
      }
      else if(lifePathNumber == 33){
        // period ages
        setperiodAge1(30);
        setperiodAge2(57);
        // pinnacle ages
        setpinnacleAge1(30)
        setpinnacleAge2(39)
        setpinnacleAge3(48)
      }
    }
  }
  
 
  function updateData(data) {
    if (data) {
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
      setDay(data.dob.day);
      setMonth(data.dob.month);
      setYear(data.dob.year);
      setInitializing(false);
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
        if (documentSnapshot) {
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        } else {
          console.log('error in reciving data');
        }
      });
    return () => subscriber();  
  }, []);

  function saveData(params) {
    db.collection('users')
      .doc(auth().currentUser.uid)
      .update({
        numbers: {
          lifePathNumber: lpnText,
          birthDayNumber: bnText,
          expressionDestiny: expText,
          minorExpression: mExpText,
          soulUrge: desireText,
          minorSoulUrger: mDesireText,
          personality: personText,
          minorPersonality: mPersonText,
          maturity: maturityText,
          attitude: attitudeText,
          lifePathExpBrdige: lpExpBrText,
          heartDesirePersonaliyBriger: hdPerBrText,
          rationalThaughtNumber: rtnText,
          balanceNumber: balanceText,
          subConNumber: subConText,
          kermicLesson: keramicText,
          hiddenPassion: hiddenPassionText,
          physicalPlane: phyPlaneText,
          mentalPlane: menPlaneText,
          intiuativePlane: intPlaneText,
          emotionalPlane: emotPlaneText,
          corenerStong: cornetStoneText,
          firstPeriodCycle: periodCyleText1,
          secPeriodCycle: periodCyleText2,
          thirdPeriodCycle: periodCyleText3,
          pinnacle1: pinnalceCyleText1,
          pinnacle2: pinnalceCyleText2,
          pinnacle3: pinnalceCyleText3,
          pinnacle4: pinnalceCyleText4,
          challenge1: challengeText1,
          challenge2: challengeText2,
          challenge3: challengeText3,
          challenge4: challengeText4,
        },
      })
      .then()
      .catch(err => console.log(err));
  }
  if(initializing){
    return null;
  }
  

  var stval = '';
  if (day && year && month) {
    stval = stval.concat(
      year.toString(),
      '-',
      day.toString(),
      '-',
      month.toString(),
    );
    console.log('i am :' + fname + ' ' + mname + ' ' + lname + ' ' + stval);
  }

  var stack = [];
  /**
   * function to calculate sum recursivley and reduce sum to single
   * digit exvept the master number
   */
  const sum = (arr = []) => {
    if (arr.length == 0) {
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

  /** function to sum with master numbers and use stack for master **/
  const sumFinal = (arr = []) => {
    let total = arr.reduce((acc, val) => acc + val);
    if (total < 10 || total == 11 || total == 22 || total == 33) {
      return total;
    }
    stack.push(total);
    return sumFinal(String(total).split('').map(Number));
  };

  /** function to connvert total to text **/
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

 /** function to calculate life path number **/
  const CalLifePathNumber = (date = '') => {
    let [year, month, day] = date.split('-');
    year = sum(String(year).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    day = sum(String(day).split('').map(Number));
    var total = simpleSum([year, month, day]);
    var text = convetToText(total);
    setlifePathNumber(total);
    calculateCylesAges();
    return text;
  };

/** function to calculate birth day number **/
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
  if(bnObj.total != bnObj.reduced){
    bnText = bnText.concat(bnObj.total, '/', bnObj.reduced);
  }else{
    bnText = bnObj.total;
  } 


  /** function to calculate expression  number **/
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

  /** function to calculate minor expression  number **/
  function calMinorExpressionNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    var fval = sum(fname.split('').map(val => val.charCodeAt(0) - 96));
    var lval = sum(lname.split('').map(val => val.charCodeAt(0) - 96));
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;
  }

  /** function to calculate desire  number **/
  function calDesireNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    // step 1
    var fval = 0;
    let  arrY = fname.match((/[y]/gi))
    let arr = fname.match(/[aeiouy]/gi);
    if (arr != null) {
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    // step 2
    arrY= [];
    var mval = 0;
    arrY = mname.match((/[y]/gi))
    let arr2 = mname.match(/[aeiouy]/gi);
    if (arr2 != null) {
      mval = sum(arr2.map(val => val.charCodeAt(0) - 96));
    }
    // step 3
    arrY= [];
    var lval = 0;
    arrY = lname.match((/[y]/gi))
    let arr3 = lname.match(/[aeiouy]/gi);
    if (arr3 != null) {
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
    // final step
    var total = sumFinal([fval, mval, lval]);
    var text = convetToText(total);
    return text;
  }

/** function to calculate minor desire  number **/
  function calMinorDesireNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    // step 1
    var fval = 0;
    arrY= []
    arrY = fname.match((/[y]/gi))
    let arr = fname.match(/[aeiouy]/gi);
    if (arr != null) {
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    // step 2
    var lval = 0;
    arrY = [];
    let  arrY = lname.match((/[y]/gi))
    let arr3 = lname.match(/[aeiouy]/gi);
    if (arr3 != null) {
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
    // final step
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;

  }
  /** function to calculate personalalty  number **/
  function calPersonNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();
    // step 1
    let arr = fname.match(/[^aeiou]/gi);
    var fval = 0;
    if (arr != null) {
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    // step 2
    let arr2 = mname.match(/[^aeiou]/gi);
    var mval = 0;
    if (arr2 != null) {
      mval = sum(arr2.map(val => val.charCodeAt(0) - 96));
    }
    // step 3
    let arr3 = lname.match(/[^aeiou]/gi);
    var lval = 0;
    if (arr3 != null) {
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
    // step 4
    var total = sumFinal([fval, mval, lval]);
    var text = convetToText(total);
    return text;
  }

  /** function to calculate minor personlalty  number **/
  function calMpersonNumber(fname, lname) {
    fname = fname.toLowerCase();
    lname = lname.toLowerCase();
    // step 1
    let arr = fname.match(/[^aeiou]/gi);
    var fval = 0;
    if (arr != null) {
      fval = sum(arr.map(val => val.charCodeAt(0) - 96));
    }
    // step 2
    let arr3 = lname.match(/[^aeiou]/gi);
    var lval = 0;
    if (arr3 != null) {
      lval = sum(arr3.map(val => val.charCodeAt(0) - 96));
    }
    // step 3
    var total = sumFinal([fval, lval]);
    var text = convetToText(total);
    return text;
  }

  /** function to calculate both bridge numbers **/
  function calBridgeNumber(val1, val2) {
    // step 1
    val1 = val1.split('/').map(Number)[0];
    val1 = String(val1)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    // step 2
    val2 = val2.split('/').map(Number)[0];
    val2 = String(val2)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    // step 3
    var res = parseInt(val2) - parseInt(val1);
    if(res < 0 ){
      res = res * -1;
    }
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
    var res = sum([val1, val2]);
    return res.toString();
  }

  // function to calculate life path number
  const CalAttitudeNumber = (date = '') => {
    let [year,day,month] = date.split('-');
    var res = sum([parseInt(month), parseInt(day)]);
    return res.toString();
  };

  // funcion to calculate rational taught number
  function calRtn(birthDay, fname) {
    fname = fname.toLowerCase();
    let arr = fname.match(/[a-z]/gi);
    var fval = 0;
    if (arr != null) {
      fval = simpleSum(arr.map(val => val.charCodeAt(0) - 96));
    }

    let birthDayNo = birthDay.split('/').map(Number)[0];
    birthDayNo = String(birthDayNo)
      .split('')
      .map(Number)
      .reduce((acc, val) => acc + val);
    var res = simpleSum([parseInt(fval), parseInt(birthDayNo)]);
    return res.toString();
  }
  /** function to calculate balance  number **/
  function calBalanceNumber(fname, mname, lname) {
    fname = fname.toLowerCase();
    mname = mname.toLowerCase();
    lname = lname.toLowerCase();

    var fval = 0;
    if (fname.length != 0) {
      fval = fname[0].charCodeAt(0) - 96;
    }

    var mval = 0;
    if (mname.length != 0) {
      mval = mname[0].charCodeAt(0) - 96;
    }

    var lval = 0;
    if (lname.length != 0) {
      lval = lname[0].charCodeAt(0) - 96;
    }
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
    let arr1 = fullname.match(/[ewdm]/gi);
    var ans = 0;
    if (arr1 != null) {
      ans = sumFinal(
        arr1.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          return x;
        }),
      );
    }
    var physicalPlane = convetToText(ans);
    stack = [];
    ans = 0;
    let arr2 = fullname.match(/[ahjnpgl]/gi);
    if (arr2 != null) {
      ans = sumFinal(
        arr2.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          return x;
        }),
      );
    }
    var mentalPlane = convetToText(ans);
    
    stack = [];
    ans = 0;
    let arr3 = fullname.match(/[iorzbstx]/gi);
    if (arr3 != null) {
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
    // console.log('ans 3s: ' + emotionalPlane);
    stack = [];
    ans = 0;
    let arr4 = fullname.match(/[kfquycv]/gi);
    if (arr4 != null) {
      ans = sumFinal(
        arr4.map(val => {
          var x = val.charCodeAt(0) - 96;
          x = sum(String(x).split('').map(Number));
          // console.log(val + ' : ' + x);
          return x;
        }),
      );
    }
    stack = [];
    var intiuativePlane = convetToText(ans);
    // console.log('ans 4: ' + intiuativePlane);
    return [physicalPlane, mentalPlane, emotionalPlane, intiuativePlane];
  }

  function calCornerStone(fname) {
    fname = fname.toUpperCase();
    var stone = fname[0];
    return stone;
  }

  function calPeriodCycles(day, month, year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    return [month.toString(), day.toString(), year.toString()];
  }

  function calPinnacleCycles(day, month, year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    let pinnacle1 = sum([day, month]);
    let pinnacle2 = sum([day, year]);
    let pinnacle3 = sum([pinnacle1, pinnacle2]);
    let pinnacle4 = sum([month, year]);
    return [
      pinnacle1.toString(),
      pinnacle2.toString(),
      pinnacle3.toString(),
      pinnacle4.toString(),
    ];
  }
  function calChallengeNumber(day, month, year) {
    day = sum(String(day).split('').map(Number));
    month = sum(String(month).split('').map(Number));
    year = sum(String(year).split('').map(Number));
    let challenge1 = day - month;
    if (challenge1 < 0) {
      challenge1 = challenge1 * -1;
    }
    let challenge2 = year - day;
    if (challenge2 < 0) {
      challenge2 = challenge2 * -1;
    }
    let challenge3 = challenge1 - challenge2;
    if (challenge3 < 0) {
      challenge3 = challenge3 * -1;
    }
    let challenge4 = year - month;
    if (challenge4 < 0) {
      challenge4 = challenge4 * -1;
    }
    return [
      challenge1.toString(),
      challenge2.toString(),
      challenge3.toString(),
      challenge4.toString(),
    ];
  }

  stack = [];
  var lpnText = CalLifePathNumber(stval);
  stack = [];
  // console.log('i am 2:'+fname+' '+mname+' '+lname+' '+stval);
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

  // [exp, setExp] = useState(expText);
  // [mExp, setMexp] = useState(mExpText);

  let lpExpBrText = calBridgeNumber(lpnText, expText);
  let hdPerBrText = calBridgeNumber(desireText, personText);
  let maturityText = calMaturityNumber(lpnText, expText);
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
  let [
    pinnalceCyleText1,
    pinnalceCyleText2,
    pinnalceCyleText3,
    pinnalceCyleText4,
  ] = calPinnacleCycles(day, month, year);
  let [challengeText1, challengeText2, challengeText3, challengeText4] =
    calChallengeNumber(day, month, year);

  const navigationAction = params => {
    
      saveData();
    
    // console.log('nav'+year);
    navigation.navigate('SummaryScreen', {
      day: day,
      month: month,
      year: year,
      fname: fname,
      mname: mname,
      lname: lname,
    });
  };
  var indeicator = require('../assets/indicator.png');
  var fullName = '';
  fullName = fullName.concat(fname, ' ', mname, ' ', lname);
  var nickName = '';
  nickName = nickName.concat(fname, ' ', mname);
  if (initializing) {
    // console.log('null');
    return null;
  }
  function backAction(params) {
    
  }
  var periodHeading1 = "First Period Cycle (From Birth to Age "+periodAge1.toString()+ " )";
  var periodHeading2 = "Second Period Cycle (From Age "+periodAge1.toString()+ " to Age "+periodAge2.toString();
  var periodHeading3 = "Third Period Cycle (From Age "+periodAge2.toString()+" and on)";

  var pinnacleHeading1 = "First Pinnacle Number (From Birth to age "+pinnacleAge1.toString() +" )"
  var pinnacleHeading2  = "Second Pinnacle Number (From age "+pinnacleAge1.toString()+" to age " +pinnacleAge2.toString();
  var pinnacleHeading3  = "Third Pinnacle Number (From age "+pinnacleAge2.toString()+" to age " +pinnacleAge3.toString();
  var pinnacleHeading4  = "Third Pinnacle Number (From Age "+pinnacleAge3.toString()+" and on)";

  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      <SafeAreaView style={[{flex: 1}]}>
        <TouchableOpacity
          onPress={() => {
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
          <View style={[styles.container]}>
            <Text
              numberOfLines={1}
              adjustsFontSizeToFit
              style={[styles.heading]}>
              Chart Calculator
            </Text>
          </View>

          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <Image
              style={{alignSelf: 'center', marginTop: -5}}
              source={indeicator}
            />
            <ScrollView style={[{flex: 1, marginTop: 20}]}>
              <InfoBox heading="Current Name" bodyText={nickName}></InfoBox>
              <InfoBox
                heading="Full Name at Birth"
                bodyText={fullName}></InfoBox>
              <InfoBox heading="Date of Birth" bodyText={stval}></InfoBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Life Path Number"
                navigation={navigation}
                value={lpnText}></ValueBox>

              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Birthday Number"
                value={bnText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                navigation={navigation}
                heading="Expression / Destiny"
                value={expText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                navigation={navigation}
                heading="Minor Expression / Destiny"
                value={mExpText}></ValueBox>

              <ValueBox
                boxWidth={60}
                marginRight={60}
                navigation={navigation}
                heading="Soul Urge / Heart’s Desire"
                value={desireText}></ValueBox>

              <ValueBox
                boxWidth={60}
                marginRight={0}
                navigation={navigation}
                heading="Minor Soul Urge / Heart’s Desire"
                value={mDesireText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={60}
                navigation={navigation}
                heading="Personality"
                value={personText}></ValueBox>
              <ValueBox
                boxWidth={60}
                marginRight={0}
                navigation={navigation}
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
                navigation={navigation}
                value={maturityText}></ValueBox>

              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Attitude"
                value={attitudeText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Life Path/Expression
                Bridge Number"
                value={lpExpBrText}></ValueBox>

              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Heart’s Desire/ Personality
                Bridge, Planes of Expression"
                value={hdPerBrText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Rational Thought Number"
                value={rtnText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Balance Number"
                value={balanceText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Subconcious Self Number"
                value={subConText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Karmic Lesson"
                value={keramicText}></ValueBox>

              <ValueBox
                boxWidth={120}
                navigation={navigation}
                marginRight={0}
                heading="Hidden Passion"
                value={hiddenPassionText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Hereditary Name"
                value="30/3"></ValueBox>
              <ValueBox
                boxWidth={120}
                navigation={navigation}
                marginRight={0}
                heading="Physical Plane of Expression"
                value={phyPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Mental Plane of Expression"
                value={menPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Intutive Plane of Expression"
                value={intPlaneText}></ValueBox>

              <ValueBox
                boxWidth={120}
                navigation={navigation}
                marginRight={0}
                heading="Emotional Plane of Expression"
                value={emotPlaneText}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                heading="Corenerstone"
                navigation={navigation}
                value={cornetStoneText}></ValueBox>
              <Text style={styles.scrollViewHeading}>
                Chapters of your LIfe
              </Text>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={periodHeading1}
                value={periodCyleText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={periodHeading2}
                value={periodCyleText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={periodHeading3}
                value={periodCyleText3}></ValueBox>
              <Text style={styles.scrollViewHeading}>Seasons of Your Life</Text>

              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={pinnacleHeading1}
                value={pinnalceCyleText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={pinnacleHeading2}
                value={pinnalceCyleText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={pinnacleHeading3}
                value={pinnalceCyleText3}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading={pinnacleHeading4}
                value={pinnalceCyleText4}></ValueBox>
              <Text style={styles.scrollViewHeading}>
                Your Challenges in Life
              </Text>

              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="First Challenge Number
                (From birth to age 33)"
                value={challengeText1}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Second Challenge Number
                (From age 34 to age 42)"
                value={challengeText2}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Third Challenge Number
                (From agr 43 to age 51)"
                value={challengeText3}></ValueBox>
              <ValueBox
                boxWidth={120}
                marginRight={0}
                navigation={navigation}
                heading="Fourth Challenge Number
                (From age 52 and on)"
                value={challengeText4}></ValueBox>
              <View style={[{marginLeft: 40, marginTop: 40, marginBottom: 30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"
                  btnAction={navigationAction}
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
    marginLeft: 40,
    marginTop: 40,
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
    marginTop: '7.6%',
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default ChartScreen;

// if(arrY!=null){
    //   if(arr==null){
    //     for(var i = 0 ;i<arrY.length; i++){
    //       arr.push(arrY[i]);
    //     }
    //   }else if(fname[fname.length-1]=='y'){
    //     console.log('y in the last');
    //     arr.push('y');
    //   }

    // }