/* eslint-disable prettier/prettier */
import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';
import {reactotronRedux} from 'reactotron-redux';
import {AsyncStorage} from '@react-native-async-storage/async-storage';

Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(reactotronRedux())
  .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!

export default Reactotron;
