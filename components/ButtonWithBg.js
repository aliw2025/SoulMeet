import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

const ButtonWithBg = props => {
  const btnAction = params => {
    console.log(params);
    props.navigation.navigate(params, {name: 'Jane'});
  };
  return (
    <TouchableHighlight onPress={() => btnAction(props.path)} underlayColor="white">
      <ImageBackground
        source={props.image}
        imageRef ={props.image}
        resizeMode="cover"
        imageStyle = {(props.active == 'true')? [styles.btnColor]:[styles.btnColorInactive]}  
        style={[styles.btnOrange]}>
        <Text style={[styles.buttonTxt]}>{props.text} </Text>
      </ImageBackground>
    </TouchableHighlight>
  );
};
const styles = StyleSheet.create({
  btnOrange: {
    height: 60,
    justifyContent: 'center',
    width: 330,
    alignItems: 'center',
  },
  btnColorInactive:{
    tintColor: "gray",
  },
  buttonTxt: {
    color: 'white',
    fontWeight: 'bold',
  },
});
export default ButtonWithBg;
