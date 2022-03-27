import React from 'react';
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

const image2 = require('../assets/arrowDown.png');
const windowWidth = Dimensions.get('window').width;

const DropDown = props => {
  return (
    
       <View style={[styles.textBg]}>
         <TouchableHighlight  onPress={props.btnAction} underlayColor="clear">
         <View style = {[{height:60}]}>
            <View style={[styles.whiteLine]}></View>
            <Text style={[styles.feildName]}>{props.feildName}</Text>
            <Text style={[styles.feildValue]}>{props.feildValue}</Text>
            <Image style={styles.arrow} source={image2} />
         </View>
         </TouchableHighlight>
          </View>
    
  );
};

const styles = StyleSheet.create({
    arrow: {
        position:'absolute',
        top:'50%',
        right:0,
        marginRight:20,
      },
      feildValue: {
        color: 'black',
        marginLeft: 20,
        position: 'absolute',
        top: '40%',
        width: 200,
        // backgroundColor:'blue'
      },
      feildName: {
        // backgroundColor:'yellow',
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
        width: windowWidth - 80,
        height: 60,
        backgroundColor: 'white',
      },
      whiteLine: {
        padding: 5,
        backgroundColor: 'white',
        position: 'absolute',
        left: '5%',
        width: 60,
        top: -1,
        height: 1,
        fontSize: 30,
        alignItems: 'center',
        justifyContent: 'center',
      },
});
export default DropDown;

