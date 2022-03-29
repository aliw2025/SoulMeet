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
    //console.log('listItem = '+props.onDaySelected);
    //console.log(props.index);
  const lala =(params)=> {
      console.log(params);
  }
  return (
    <TouchableHighlight underlayColor="#F5F5F5" onPress={()=>props.onDaySelected(props.index,props.item)} >
        <Text style={styles.item}>{props.item.key}</Text>
    </TouchableHighlight>  
    
  );
};
const styles = StyleSheet.create({
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
});
export default ListItem;
