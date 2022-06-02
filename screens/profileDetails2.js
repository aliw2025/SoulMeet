import React, {useState, useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions,Alert} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

// react items
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ImageBackground,
} from 'react-native';
// global variables
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const image = require('../assets/grad.png');
const buttonBgOrange = require('../assets/orange.png');

const ProfileDetails2 = props => {
  // console.log(props.route.params);
  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  // var fname = props.route.params.fname;
  var mname = props.route.params.mname;
  //   // array fo
  const [text, onChangeText] = React.useState('Useless Text');

  var [usrData, setUsrData] = useState(props.route.params.usrData);
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  // const [mname, setMname] = useState('');
  // setFname(usrData.fname);
  // setLname(usrData.lname);  
  function updateData(data) {
    console.log('updating data ');
    if (data) {

      setUsrData(data);
      setFname(data.fname);
      setLname(data.lname);
    
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

  const navigationAction = params => {
    if(fname == undefined || lname ==undefined){
      Alert.alert("ERROR", "please provide all feilds");
      return;
    }
    if(fname == '' || lname == ''){
      Alert.alert("ERROR", "please provide all feilds");
      return;
    }
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        fname: fname,
        lname: lname,
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
        console.log(
          'Something went wrong with added user to firestore: ',
          error,
        );
      });
    props.navigation.navigate('WhoAm', {
      day: day,
      month: month,
      year: year,
      fname: fname,
      mname: mname,
      lname: lname,
    });
    
  };

  // function updateData(data) {
  //   console.log('updating data ');

  //   if (data) {
  //     setUsrData(data);
  //     setFname(data.fname);
  //     // setMname(data.mname);
  //     setLname(data.lname);
  //   } else {
  //     console.log('error');
  //   }
  // }

  // useEffect(() => {
  //   const subscriber = firestore()
  //     .collection('users')
  //     .doc(auth().currentUser.uid)
  //     .onSnapshot(documentSnapshot => {
  //       var data;
  //       if (documentSnapshot) {
  //         data = documentSnapshot.data();
  //         console.log('User data recieved ');
  //         updateData(data);
  //       } else {
  //         console.log('error in recieving data');
  //       }
  //     });
  //   return () => subscriber();
  // }, []);
  function skipAction() {
    console.log('skip action');
  }
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}

      <SafeAreaView>
        <View style={styles.mainPage}>
          <TouchableOpacity
            onPress={() => {
              skipAction();
            }}>
            <View style={[styles.skip]}>
              <Text style={[styles.skipBtn]}>Skip</Text>
            </View>
          </TouchableOpacity>

          <Text style={[styles.heading]}>Profile details</Text>
          <View style={[styles.subHeading]}>
            <Text>
              Please enter your full name at birth exactly as it shows on your
              birth certificate. Do not include Jr, III, other suffix, or
              symbols.
            </Text>
          </View>
          <CustomTextInput
            value={fname}
            lineWidth={100}
            onChangeText = {setFname}
            feildName="First Name"></CustomTextInput>
          <CustomTextInput
            value={lname}
            lineWidth={100}
            onChangeText = {setLname}
            feildName="Last Name"></CustomTextInput>

          <View style={[styles.bottomBtn]}>
            <ButtonWithBg
              path="WhoAm"
              active="true"
              text="Confirm"
              image={buttonBgOrange}
              btnAction={navigationAction}></ButtonWithBg>
          </View>
        </View>
      </SafeAreaView>
      {/* </TouchableHighlight> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  skip: {
    zIndex: 0,
    // backgroundColor:'pink',
    width: '10%',
    // position: 'absolute',
    // top: 40,
    // right: 40,
    marginTop: '7.6%',
    marginRight: '40',
    alignSelf: 'flex-end',
    marginRight: 40,
    height: 30,
  },
  skipBtn: {
    zIndex: 0,
    color: '#FFC700',
    fontWeight: 'bold',
    // backgroundColor:'gray',
  },
  input: {},
  bottomBtn: {
    // position: 'absolute',
    // bottom: 40,
    marginTop: 20,
    marginLeft: 40,
  },
  mainPage: {
    flex: 1,
    // alignItems: 'center',
  },
  BackGrounimage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    marginTop: '5%',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 40,
    marginRight: 40,
    color: 'black',
    // backgroundColor:'red'
  },
  subHeading: {
    // backgroundColor:'green',
    marginTop: 10,
    fontSize: 15,
    marginLeft: 40,
    marginRight: 40,
    // width: windowWidth * 0.75,
  },
});

export default ProfileDetails2;
