import React, {useRef, useState, useEffect} from 'react';
// import CountryPicker from 'react-native-country-picker-modal';
import {CountryCode, Country} from '../types.ts';
import ButtonWithBg from '../components/ButtonWithBg';
import LanguagePickerBtn from '../components/LanguagePickerBtn.js';
import {Dimensions, Keyboard} from 'react-native';
import DropDown from '../components/dropDown';
import FlatListBasics from '../components/list';
import Picker from '../components/picker';
import CustomTextInput from '../components/CustomTextInput';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import auth from '@react-native-firebase/auth';
//  for usign the camera
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

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
const camera = require('../assets/camera.png');

var per = 0.05;
if (windowHeight <= 667) {
  per = 0.01;
}
const ProfileDetails1 = props => {
  const [koffset, setKoffset] = useState(0);
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [usrData, setUsrData] = useState(undefined);
  const [profileImg, setProfileImg] = useState(undefined);
  const [dp, setDp] = useState(undefined);
  var imgBox = windowHeight * 0.1;

  var day = props.route.params.day;
  var month = props.route.params.month;
  var year = props.route.params.year;
  var pos = 'relative';
  
  const [text, onChangeText] = React.useState('Useless Text');
  async function updateImage(params) {
    // var img = await
  }
  function renderProfileImage() {
    console.log('rendring proflie img');
    if (profileImg) {
      console.log(profileImg.assets[0].uri);
      var img = {uri: profileImg.assets[0].uri};
      uploadImage(profileImg.assets[0].uri);
      return (
        <Image
          style={{borderRadius: 10, width: '100%', height: '100%'}}
          source={img}></Image>
      );
    } else if (dp) {
      console.log('dp is not empty');
      // console.log(dp);
      return (
        <Image
          style={{borderRadius: 10, width: '100%', height: '100%'}}
          source={dp}></Image>
      );
    }

    return null;
  }
  function updateData(data) {
    console.log('updating data ');
    if (data) {
      setUsrData(data);
      setFname(data.fname);
      setMname(data.mname);
      setLname(data.lname);
      updateImage();
      console.log('loading img from url:' + data.dp);
      setDp({uri: data.dp});
      console.log('done setImg');
      console.log(dp);
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
    firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        fname: fname,
        mname: mname,
        lname: lname,
      })
      //ensure we catch any errors at this stage to advise us if something does go wrong
      .catch(error => {
        console.log(
          'Something went wrong with added user to firestore: ',
          error,
        );
      });
    props.navigation.navigate('ProfileDetails2', {
      day: day,
      month: month,
      year: year,
      fname: fname,
      mname: mname,
      lname: lname,
      usrData:usrData,
    });
  };
  const [keyboardOffset, setKeyboardOffset] = useState(0);
  const onKeyboardShow = event => {
    pos = 'absolute';
    setKeyboardOffset(event.endCoordinates.height);
  };
  const onKeyboardHide = () => {
    pos = 'relative';
    setKeyboardOffset(0);
  };
  const keyboardDidShowListener = useRef();
  const keyboardDidHideListener = useRef();
 
  useEffect(() => {
    // onKeyboardHide
    // onKeyboardShow
    keyboardDidShowListener.current = Keyboard.addListener(
      'keyboardDidShow',
      onKeyboardShow,
    );
    keyboardDidHideListener.current = Keyboard.addListener(
      'keyboardDidHide',
      onKeyboardHide,
    );

    return () => {
      keyboardDidShowListener.current.remove();
      keyboardDidHideListener.current.remove();
    };
  }, []);

  const uploadImage = async imageUri => {
    const uri = imageUri;
    const filename = uri.substring(uri.lastIndexOf('/') + 1);
    // console.log(uri);
    // console.log(filename);
    const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
    // setUploading(true);
    // setTransferred(0);
    const ref = storage().ref(filename);

    // set progress state
    // task.on('state_changed', snapshot => {
    //   setTransferred(
    //     Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 10000
    //   );
    // });
    try {
      await ref.putFile(uploadUri);
      ref.getDownloadURL().then(url => {
        console.log('url is ' + url);
        firestore()
          .collection('users')
          .doc(auth().currentUser.uid)
          .update({
            dp: url,
          })
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
            console.log(
              'Something went wrong with added user to firestore: ',
              error,
            );
          });
      });
    } catch (e) {
      console.error(e);
    }
  };
  function skipAction() {
    console.log('skip action');
  }

  async function selectImage() {
    try {
      const result = await launchImageLibrary();
      setProfileImg(result);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
      {/* <TouchableHighlight onPress={hideList} underlayColor="clear"> */}
      <SafeAreaView>
        <View
          style={[styles.mainPage, {position: pos, bottom: keyboardOffset}]}>
          <TouchableOpacity
            onPress={() => {
              skipAction();
            }}>
            <View style={[styles.skip, {marginTop: windowHeight * per}]}>
              <Text style={[styles.skipBtn]}>Skip</Text>
            </View>
          </TouchableOpacity>
          <Text adjustsFontSizeToFit numberOfLines={1} style={[styles.heading]}>
            Profile details
          </Text>
          <View style={[styles.subHeading]}>
            <Text>
              Please enter your full name at birth exactly as it shows on your
              birth certificate. Do not include Jr, III, other suffix, or
              symbols.
            </Text>
          </View>

          <View
            style={[styles.profileImgView, {width: imgBox, height: imgBox}]}>
            {/* <Image></Image> */}
            {renderProfileImage()}
            <TouchableOpacity
              onPress={() => {
                selectImage();
              }}
              style={{position: 'absolute', right: 0, bottom: -5}}>
              <View>
                <Image
                  style={{width: imgBox * 0.35, height: imgBox * 0.35}}
                  source={camera}></Image>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <CustomTextInput
              onChangeText={setFname}
              value={fname}
              feildName="First Name"
              onSubmitEditing={Keyboard.dismiss}></CustomTextInput>
            <CustomTextInput
              value={mname}
              lineWidth={110}
              onChangeText={setMname}
              feildName="Middle Name"></CustomTextInput>
            <CustomTextInput
              value={lname}
              onChangeText={setLname}
              feildName="Last Name"></CustomTextInput>

            <CustomTextInput
              lineWidth={160}
              feildName="Profile Display Name"></CustomTextInput>
          </View>
          <View style={[styles.bottomBtn]}>
            <ButtonWithBg
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
  profileImgView: {
    backgroundColor: 'white',
    // width:imgBox,
    // height:imgBox,
    borderRadius: 10,
    marginTop: '5%',
    alignSelf: 'center',
  },
  skip: {
    zIndex: 0,
    // backgroundColor:'pink',
    width: '10%',
    // position: 'absolute',
    // top: 40,
    // right: 40,
    marginTop: '6%',
    marginRight: '40',
    alignSelf: 'flex-end',
    marginRight: 40,
    // height: 10,
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
    marginRight: 40,
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
    marginTop: windowHeight * per,
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

export default ProfileDetails1;
