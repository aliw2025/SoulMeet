import React, {useState} from 'react';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  Button,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const tick = require('../assets/tick.png');

const ButtonWithTick = props => {

  [borderColor,setBorderColor] = useState(props.borderColor);
  [textColor,setTextColor] = useState(props.textColor);
  [bgColor,setBgColor] = useState(props.bgColor);
  [fontType,setFontType] = useState(props.fontType);
  
  const btnAction = params => {
    console.log(params);
    props.navigation.navigate(params, {name: 'Jane'});
  };
  return (
    <TouchableHighlight  onPress={props.btnAction}  underlayColor="white">
      <View  style={[{backgroundColor:bgColor},{borderColor:borderColor},styles.btnOrange]}>
      <Text  style={[{color:textColor,fontWeight:fontType},styles.buttonTxt,]}>{props.text} </Text>
      <Image style={[{tintColor:textColor},styles.arrow]} source={tick} />
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position:'absolute',
    top:'40%',
    right:0,
    marginRight:20,
    // tintColor:"white",
  },
  btnOrange: {
    height: 60,
    justifyContent: 'center',
    width: windowWidth - 80,
    borderWidth: 1,
    borderRadius:15,
  },
  btnColor:{
    backgroundColor:'#FFC700',
  },
  btnColorInactive:{
    backgroundColor:'gray',
  },
  buttonTxt: {
    // color: 'white',
    // fontWeight: 'bold',
    marginLeft:20,
  },
});
export default  ButtonWithTick ;
