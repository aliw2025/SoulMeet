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

const ListItem = props => {
    
  const lala =(params)=> {
      console.log(params);
  }
  return (
    <TouchableHighlight underlayColor="#C4C4C433" onPress={()=>props.onDaySelected(props.index,props.item)} >
        <Text style={styles.item}>{props.item.key}</Text>
    </TouchableHighlight>  
    
  );
};
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 15,
        height: 44,
        paddingLeft:20,
        color:'black',
      },
});
export default ListItem;
