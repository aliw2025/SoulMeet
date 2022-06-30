import React, {createContext, useState} from 'react';
import { View, StyleSheet, Button, Alert } from "react-native";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
// import { GoogleSignin } from '@react-native-community/google-signin';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [usrData, setUsrData] = useState(null);
  const [loading, setLoading] = useState(false);

  function showError(error) { 
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert("ERROR", "That email address is already in use!");
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert("ERROR", "That email address is invalid!");
    }else if(error.code =='auth/invalid-email'){
      Alert.alert("ERROR", "password is invalid!");
    }
    else{
      Alert.alert("ERROR", error.code);
    } 
  }
  return (
    <AuthContext.Provider
      value={{
        loading,
        setLoading,
        user,
        setUser,
        usrData,
        login: async (email, password) => {
          setLoading(true);
          try {
            await auth().signInWithEmailAndPassword(email, password);
            setLoading(false);
          } catch (e) {
            showError(e);
            setLoading(false);
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential)
            // Use it only when user Sign's up, 
            // so create different social signup function
            // .then(() => {
            //   //Once the user creation has happened successfully, we can add the currentUser into firestore
            //   //with the appropriate details.
            //   // console.log('current User', auth().currentUser);
            //   firestore().collection('users').doc(auth().currentUser.uid)
            //   .set({
            //       fname: '',
            //       lname: '',
            //       email: auth().currentUser.email,
            //       createdAt: firestore.Timestamp.fromDate(new Date()),
            //       userImg: null,
            //   })
            //   //ensure we catch any errors at this stage to advise us if something does go wrong
            //   .catch(error => {
            //       console.log('Something went wrong with added user to firestore: ', error);
            //   })
            // })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          } catch(error) {
            console.log({error});
          }
        },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }
            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
            // Sign-in the user with the credential
            await auth().signInWithCredential(facebookCredential)
            // Use it only when user Sign's up, 
            // so create different social signup function
            // .then(() => {
            //   //Once the user creation has happened successfully, we can add the currentUser into firestore
            //   //with the appropriate details.
            //   console.log('current User', auth().currentUser);
            //   firestore().collection('users').doc(auth().currentUser.uid)
            //   .set({
            //       fname: '',
            //       lname: '',
            //       email: auth().currentUser.email,
            //       createdAt: firestore.Timestamp.fromDate(new Date()),
            //       userImg: null,
            //   })
            //   //ensure we catch any errors at this stage to advise us if something does go wrong
            //   .catch(error => {
            //       console.log('Something went wrong with added user to firestore: ', error);
            //   })
            // })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
            });
          } catch(error) {
            console.log({error});
          }
        },
        register: async (email, password) => {
          setLoading(true);
          try {mes
            await auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
              
              //Once the user creation has happened successfully, we can add the currentUser into firestore
              //with the appropriate details.
              firestore().collection('users').doc(auth().currentUser.uid)
              .set({
                  fname: '',
                  lname: '',
                  email: email,
                  createdAt: firestore.Timestamp.fromDate(new Date()),
                  userImg: null,
                  dataProvided:'no'
              })
              
              //ensure we catch any errors at this stage to advise us if something does go wrong
              .catch(error => {
                  console.log('Something went wrong with added user to firestore: ', error);
                  showError(error);
              })
            })
            //we need to catch the whole sign up process if it fails too.
            .catch(error => {
                console.log('Something went wrong with sign up: ', error);
                showError(error);
            });
            setLoading(false);
          } catch (e) {
            console.log(e);
            showError(e);
            setLoading(false);
          }
        },
        getData:()=>{
        
          var userData =  firestore().collection('users').doc(auth().currentUser.uid).onSnapshot(documentSnapshot => {
            console.log('User data2: ', documentSnapshot.data());
            return documentSnapshot.data();
          });
            console.log("inside one ");
            console.log(userData);
            return userData;
         
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};