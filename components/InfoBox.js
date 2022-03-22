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
const InfoBox = props => {
  
  return (
    <View style={[styles.infoBox]}>
    {/* orange box */}
    <View style={[styles.orangeStrip]}>
      {/* orange box hreading */}
      <Text style={[styles.headingText]}>{props.heading}</Text>
    </View>
    {/* body */}
    <View style={[styles.textBg]}>
      <View style={[{width: '100%', justifyContent: 'center'}]}>
        {/* body text */}
        <Text style={[styles.bodytext]}>{props.bodyText}</Text>
      </View>
    </View>
  </View>
  );
};
const styles = StyleSheet.create({
    infoBox: {
        width: windowWidth - 80,
        marginLeft: 40,
        marginRight: 40,
        zIndex: 1,
      },
      orangeStrip: {
        backgroundColor: '#FFC700',
        height: 27,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        // top:10,
      },
      headingText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 16,
      },
      textBg: {
        top: -20,
        zIndex: -1,
        // position: 'absolute',
        borderRadius: 20,
        borderColor: '#E8E6EA',
        borderWidth: 1,
        width: windowWidth - 80,
        height: 68,
        backgroundColor: 'white',
      },
      bodytext: {
        top: 30 ,
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
      },
});
export default InfoBox;
