/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import Root from './src/navigation/Root';




function App() {
  


  return ( <Provider store={store}>
    {/* <AppNavigation/> */}
    <Root/>
    </Provider>);
}


export default App;
