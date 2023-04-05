/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Root from './src/navigation/Root';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
navigator.geolocation = require('@react-native-community/geolocation');




function App() {
 
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "LOCATION GEO",
          message: "UBER aPP NEEDS ACCESS TO YOUR LOCATION",
          buttonNeutral: "ask me later",
          buttonNegative: "cancel",
          buttonPositive: "ok",
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          (position) => {},
          (error) => {
            console.log(error.code, error.message);
          },
          { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
        );
      } else {
        console.log('error');
      }
    } catch (error) {}
  };

  useEffect(() => {
    androidPermission();
  }, []);


  return ( <Provider store={store}>
    {/* <AppNavigation/> */}
    <Root/>
    </Provider>);
}


export default App;
