import React, {useState} from 'react';
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


const buttonBG = require('../assets/containerText.png');

const LanguagePickerBtn = props => {
  var a = styles.listclose;
  var b = styles.listopen;
  var [shouldShow, setShouldShow] = useState(a);
  var [shouldShowx, setShouldShowx] = useState(false);
  const btnAction = params => {};
  return (
    <View >
      <TouchableHighlight onPress={btnAction} underlayColor="white">
        <View style={styles.textBg}>
            <View style={[styles.whiteLine]}></View>
          <Text style={[styles.feildValue]}>{props.text} </Text>
        </View>
      </TouchableHighlight>

    </View>
  );
};


const styles = StyleSheet.create({
  textBg: {
    marginTop: 20,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 20,
    borderColor: '#E8E6EA',
    borderWidth: 1,
    // flex:1,
    justifyContent:'center',
    // alignItems:'center',
    width: windowWidth - 80,
    height: 60,
    backgroundColor: 'white',
  },
  whiteLine: {
    width: 70,
    backgroundColor: 'white',
    height: 1,
    position: 'absolute',
    top:-1,
    left: '5%',
  },
  
  feildValue: {
    color: 'black',
    marginLeft: 20,
    // justifySelf:'center',
    // position: 'absolute',
    // top: '50%',
  
  },
  listclose: {
    transform: [{scale: 1}],
    position: 'absolute',
    top: 65,
    zIndex: 1,

    // backgroundColor:'red',
  },
  listopen: {
    transform: [{scale: 0}],
    position: 'absolute',
    top: 65,
    zIndex: 1,
    // backgroundColo r:'green',
  },
});
export default LanguagePickerBtn;
