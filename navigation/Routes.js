import React, {useContext, useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {AuthContext} from './AuthProvider';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import AuthStack from './AuthStack';
import SetUpStack from './SetUpStack'

import AppStack from './AppStack';

const Routes = () => {
  const {user, setUser} = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [dataState,setDataState] = useState(undefined);
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) setInitializing (false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  function updateData(data) {
    console.log('updating data ');
    if (data) {
      setDataState(data.dataProvided);
    } else {
      console.log('error');
    }
  }


  useEffect(() => {
    const subscriber = firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .onSnapshot(documentSnapshot => {
        var data;
        if(documentSnapshot){
          data = documentSnapshot.data();
          console.log('User data recived ');
          updateData(data);
        }else{
          console.log('error in reciving data');
        }
      
      });
    return () => subscriber();
  }, []);

  if (initializing) return null;
  function showStack(params) {
    console.log('showing stack');
    if(user){
      if(dataState){
        if(dataState =='yes'){
          return (<AppStack/>);
        }{
          return (<SetUpStack/>);
        }
      }
      return  null;
    }

    return (<AuthStack/>);
  }

  return (
    <NavigationContainer>
      {showStack()}
      {/* {user ? <AppStack /> : <AuthStack />} */}
    </NavigationContainer>
  );
};

export default Routes;
