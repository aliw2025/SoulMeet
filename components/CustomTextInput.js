import React, {useRef} from 'react';
import {Dimensions} from 'react-native';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  TextInput,
  useColorScheme,
  View,
  Button,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';

const image2 = require('../assets/arrowDown.png');
const windowWidth = Dimensions.get('window').width;

const CustomTextInput = props => {
  var secureTextEntry = false;
  
  const [text, onChangeText] = React.useState(props.feildValue);
  const ref_input = useRef();
  const btnAction = params => {
    ref_input.current.focus();
  };
  if(props.secureTextEntry==true){
    secureTextEntry = true;
  }
  return (
    <View style={[styles.textBg]}>
      <TouchableHighlight onPress={btnAction} underlayColor="clear">
        <View style={[{height: 60,justifyContent:'center'}]}>
          <View style={[styles.whiteLine,{width:props.lineWidth}]}></View>
          <Text style={[styles.feildName]}>{props.feildName}</Text>
          <TextInput
            value = {props.value}
            onSubmitEditing={props.onSubmitEditing}
            secureTextEntry = {secureTextEntry}
            ref={ref_input}
            onChangeText={props.onChangeText}
            
            style={[styles.feildValue]}></TextInput>
        </View>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  arrow: {
    position: 'absolute',
    top: '50%',
    right: 0,
    marginRight: 20,
  },
  feildValue: {
    color: 'black',
    marginLeft: 20,
    // // justifySelf:'center',
    // // position: 'absolute',
    // // top: 10,
    // // width: 200,
    // height: 40,
    // backgroundColor:'blue'
  },
  feildName: {
    // backgroundColor:'yellow',
    position: 'absolute',
    top: -10,
    left: 30,
    fontSize: 14,
    color: '#00000066',
  },
  textBg: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 20,
    borderColor: '#E8E6EA',
    borderWidth: 1,
    // flex:1
    justifyContent:'center',
    width: windowWidth - 80,
    height: 60,
    backgroundColor: 'white',
  },
  whiteLine: {
    padding: 5,
    backgroundColor: 'white',
    position: 'absolute',
    left: '5%',
    width: 100,
    top: 0,
    height: 1,
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomTextInput;
