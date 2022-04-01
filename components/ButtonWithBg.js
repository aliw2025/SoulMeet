import React from 'react';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const ButtonWithBg = props => {

  const btnAction = params => {
    console.log(params);
    // props.navigation.navigate(params, {name: 'Jane'});
  };
  return (
    <TouchableHighlight onPress={props.btnAction} underlayColor="clear">
      <View style={[(props.active == 'true')? [styles.btnColor]:[styles.btnColorInactive],styles.btnOrange]}>
      <Text style={[styles.buttonTxt,]}>{props.text} </Text>
      </View>
    </TouchableHighlight>
  );
  
};

const styles = StyleSheet.create({
  btnOrange: {
    height: 60,
    justifyContent: 'center',
    width: windowWidth - 80,
    alignItems: 'center',
    // backgroundColor:'#FFC700',
    borderRadius:15,

  },
  btnColor:{
    backgroundColor:'#FFC700',
  },
  btnColorInactive:{
    backgroundColor:'gray',
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ButtonWithBg;
