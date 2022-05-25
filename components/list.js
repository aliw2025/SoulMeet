import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import ListItem from './listItem'

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
 
});

const FlatListBasics = (props) => {
//  console.log('list props'+props.onDaySelected);
  return (
    <View style={styles.container}>
      <FlatList
        data = {props.data}
        // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        renderItem = {({item,index}) => <ListItem onDaySelected={props.onDaySelected} index= {index} item={item}></ListItem>}
      />
    </View>
  );
}

export default FlatListBasics;