import React from 'react';
import {Dimensions} from 'react-native';

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
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
var marginRight;
var boxWidth;
const ValueBox = props => {
  marginRight = props.marginRight;
  boxWidth = props.boxWidth;
 
  return (
    <View style={[styles.fullBox]}>
    <View style = {[{width:'60%'}]}>
      <Text style = {[styles.title]}>{props.heading}</Text>
    </View>
    <View style={[{width:props.boxWidth,marginRight:props.marginRight},styles.textBg,]}>
        <Text style={[styles.bodytext]}> {props.value} </Text>
    </View>
  </View>
  )};
const styles = StyleSheet.create({
  fullBox: {
    marginTop:10,
    width: windowWidth - 80,
    marginLeft: 40,
    marginRight: 40,
    height:60,
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'space-between',
  },
  title:{
    fontSize:12,
    color:'#FFC700',
    fontWeight:'600',

  },
  textBg: {
    justifyContent:'center',
    borderRadius: 15,
    borderColor: '#E8E6EA',
    borderWidth: 1,
    height: 58,
    backgroundColor: 'white',
  },
  bodytext: {
    fontSize: 16,
    color: 'black',
    marginLeft:10,
  },
 
     
});
export default ValueBox;
