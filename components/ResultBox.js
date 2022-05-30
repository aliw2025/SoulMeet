import React,{useState} from 'react';
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
let width = 40;
let height = 60;
const ResultBox = props => {
  width = props.width;
 
  height = props.height;
  var color = 'black';
  const [haveComp,setHaveComp] = useState(props.Compatibility);
  // console.log(props);
  // console.log(props.Compatibility);
  if(props.Compatibility == 3){
    color = 'green';
  }
  // console.log(width);
  // console.log("bool: "+props.haveHeading);
  [haveHeading,setHaveHeading] = useState(props.haveHeading);
  return (
    <View style={[{width: width}, styles.infoBox]}>
      {/* orange box */}{
        haveHeading && <View style={[styles.orangeStrip]}>
        {/* orange box hreading */}
        <Text adjustsFontSizeToFit numberOfLines={2} style={[styles.headingText]}>{props.heading}</Text>
      </View>
      }
      
      {/* body */}
      <View style={[{height:height || 60,width: width},styles.textBg]}>
        <View style={[{width: '100%', justifyContent: 'center'}]}>
          {/* body text */}
          <Text style={[{top:height/2 - 8 || 30},styles.bodytext,{color:color}]}>{props.bodyText}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoBox: {
    marginLeft:2,
    marginRight:2,
    zIndex: 1,
    // backgroundColor:'pink',
  },
  orangeStrip: {
    backgroundColor: '#FFC700',
    // height: 27,
    padding:4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor:'white',
    borderWidth:2,
    // top:10,
  },
  headingText: {
    width:'100%',
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    fontSize: 12,
    // backgroundColor:'gray'
  },
  textBg: {
    top: -20,
    zIndex: -1,
    // position: 'absolute',
    borderRadius: 10,
    backgroundColor:'#F3F3F3',
    borderColor: '#F3F3F3',
    borderWidth: 1,
    // height: 60,
   
  },
  bodytext: {
    // top: 30,
    fontSize: 10,
    color: 'black',
    textAlign: 'center',
  },
});
export default ResultBox;
