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
import TabTwoScreen from './testScreen';

const image = require('../assets/grad.png');
const card = require('../assets/card.png');
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

//  the screen component
const SummaryScreen = props => {
  // const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(props.route.params);
  // var day = props.route.params.day;
  // var month = props.route.params.month;
  // var year = props.route.params.year;
  var day = 20;
  var month = 2;
  var year = 1996;
  var stval = '';
  const navigationAction = params => {
    setModalVisible(true);
    // setIsModalVisible(true);
    // props.navigation.navigate("TestScreen",{name:'wase'});
  };
  const onClick = () => {
    console.log('hi waseem');
    setModalVisible(false);
  };
  // [lpnText, selpnText] = useState(lpnTextText);
  // [bn, setBn] = useState(bnText);
  var box2 = 40;
  var indeicator = require('../assets/indicator.png');
  return (
    
    <ImageBackground
      source={image}
      resizeMode="cover"
      style={styles.BackGrounimage}>
         {/* <TouchableOpacity onPress = {()=>onClick()}> */}
      <SafeAreaView style={[{flex: 1}]}>
        
        {/* <View> */}
        <TouchableOpacity>
          <View style={[styles.backBtn]}>
            <Text
              style={[{color: '#FFC700', fontSize: 20, fontWeight: 'bold'}]}>
              {'<'}
            </Text>
          </View>
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello WorldHello WorldHello WorldHello WorldHello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
       
       
       
        <View style={styles.mainPage}>
          <ImageBackground
            source={card}
            resizeMode="stretch"
            style={[styles.card]}>
            <Image
              style={{alignSelf: 'center', marginTop: -5}}
              source={indeicator}
            />
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
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={2}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={3}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={4}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={5}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={6}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={7}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={8}
                  bodyText="15%"
                  width={33}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading={9}
                  bodyText="15%"
                  width={33}></ResultBox>
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
                  bodyText="1"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={2}
                  bodyText="2"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={3}
                  bodyText="3"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={4}
                  bodyText="4"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={5}
                  bodyText="5"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={6}
                  bodyText="6"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={7}
                  bodyText="7"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={8}
                  bodyText="8"
                  width={33}></ResultBox>
                <ResultBox
                  height={box2}
                  haveHeading={false}
                  heading={9}
                  bodyText="9"
                  width={33}></ResultBox>
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
              Yearly Forecast Cycles at 24 years of age - 2022
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
                  bodyText="15%"
                  
                  width={74}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading="Mental Transit"
                  bodyText="15%"
                  width={74}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading="Spirtual Transit"
                  bodyText="15%"
                  width={74}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading="Essence
                  Cycle"
                  bodyText="15%"
                  width={74}></ResultBox>
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
                  heading="Personal Year 2022"
                  bodyText="15%"
                  width={99}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading="Personal Month Feburary"
                  bodyText="15%"
                  width={99}></ResultBox>
                <ResultBox
                  haveHeading={true}
                  heading="Personal Day Thursday"
                  bodyText="15%"
                  width={99}></ResultBox>
              </View>
            </View>
            <View style={[{flex: 1, marginTop: 20}]}>
              <View style={[{marginLeft: 40, marginTop: 10, marginBottom: 30}]}>
                <ButtonWithBg
                  path="ProfileDetails1"
                  active="true"
                  text="Next"
                  btnAction={navigationAction}></ButtonWithBg>
              </View>
            </View>
          </ImageBackground>
        </View>

        {/* </View> */}
        {/* </TouchableOpacity> */}
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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
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
      {/* <Modal.Footer>
      <View style={styles.button}>
        <Button title="No thanks" onPress={handleDecline} />
        <Button title="Sign me up!" onPress={handleSignUp} />
      </View>
    </Modal.Footer> */}
//     </View>
//   </Modal.Container>
//   </TouchableWithoutFeedback>
//   </TouchableOpacity>
//   </View>
// </Modal>