import { StyleSheet, View, StatusBar } from 'react-native';
import React, { useState, Component, useEffect } from 'react';
import ContentView from './ContentView';
import OneSignal from 'react-native-onesignal';

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];

export default function App() {

    useEffect(()=> {

        OneSignal.setLogLevel(6, 0);
        OneSignal.setAppId("bf3ede63-5896-40bf-816b-c35ccc903cde");   
        
        //Method for handling notifications opened
        OneSignal.setNotificationOpenedHandler(notification => {
            console.log("OneSignal: notification opened:", notification);
        });

    }, [])


    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
  
  return (
    <View style={styles.container}>
      <ContentView />
      <StatusBar
        animated={true}
        backgroundColor="#f39c12"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});