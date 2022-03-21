import React ,{ useState }from 'react';

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
const buttonBG = require('../assets/containerText.png');

const LanguagePickerBtn = props => {
  var a  = styles.listclose;
  var b  = styles.listopen;
  var [shouldShow, setShouldShow] = useState(a);
  var [shouldShowx, setShouldShowx] = useState(false);
  const btnAction = params => {
    // console.log('i am languages');
    // a = styles.listopen;
    // setShouldShow(a);
    // setShouldShowx(true);
    // console.log(shouldShow);
  };
  return (
    <View>
<TouchableHighlight onPress={btnAction} underlayColor="white">
      <ImageBackground source={buttonBG} 
         resizeMode = "cover"
         style ={styles.btnBg} >
         <Text style={[styles.text]}>{props.text} </Text>
         </ImageBackground>  
    </TouchableHighlight>
    <View style={[styles.whiteLine]}>
    
    </View>
    <View style = { shouldShowx? a: b}>
        <Text>this is line </Text>
        <Text>this is line </Text>  
        <Text>this is line </Text>
      </View>
    </View>
    
  );
};
const styles = StyleSheet.create({
  whiteLine:{
    width:70,
    backgroundColor:'white',
    height:10,
    position:'absolute',
    left:'5%',
  },  
  btnBg:{
        // width: 300,
        height: 65 , 
        justifyContent:'center',
        width:330,
       
        // margin:20,
        // flex:1  
      },
      text:{
        // color:'red',
        marginLeft: 20,
      },  
      listclose:{
        transform: [{ scale: 1   }],  
        position: 'absolute',
        top:65,
        zIndex:1,
        
        // backgroundColor:'red',
      },
      listopen:{
        transform: [{ scale: 0 }],
        position: 'absolute',
        top:65,
        zIndex:1,
        // backgroundColo r:'green',
      }
});
export default LanguagePickerBtn;
