import auth from '@react-native-firebase/auth';
import React, {useState, useEffect} from 'react';

export class FbUser {

  constructor(name, password) {
   
    // this.state = {
    //   user: null,
    // };
    this.user = null; 
    
  }

  getData(){

  }
  signOut(){
    return auth().signOut()
  }
  checkUserAuth(user) {
    return auth().onAuthStateChanged(user)
  }
  

  // function to sign in user
  sigInUser(email, password) {
    auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => {
        //   console.log('User account created & signed in!');
        console.log('User account & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('ERROR', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('ERROR', 'That email address is invalid!');
        } else if (error.code == 'auth/invalid-email') {
          Alert.alert('ERROR', 'password is invalid!');
        } else {
          Alert.alert('ERROR', error.code);
        }
      });
  }
  // function to signup user
  signUpUser(email, password, password2) {
    if (password != password2) {
      console.log('password does not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(user => {})
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Register!');
        console.log(error);
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
          Alert.alert('ERROR', 'That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
          Alert.alert('ERROR', 'That email address is invalid!');
        } else if (error.code == 'auth/invalid-email') {
          Alert.alert('ERROR', 'password is invalid!');
        } else {
          Alert.alert('ERROR', error.code);
        }
      });
  }
}
