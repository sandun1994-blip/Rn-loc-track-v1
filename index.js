/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import ReactNativeForegroundService from '@supersami/rn-foreground-service';
ReactNativeForegroundService.register();

// PushNotification.configure({

//   onNotification: function (notification) {
//     console.log('start');
//     console.log('NOTIFICATION:', notification);
//   },
//   requestPermissions: Platform.OS === 'ios',
//   //   requestPermissions: true,
// });

AppRegistry.registerComponent(appName, () => App);

PushNotification.configure({
  onNotification: function (notification) {
    console.log('start');
    console.log('NOTIFICATION:', notification);
  },
  popInitialNotification: true,

  requestPermissions: Platform.OS === 'ios',
});
