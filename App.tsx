// /* eslint-disable prettier/prettier */
// // /* eslint-disable react/react-in-jsx-scope */
// // /* eslint-disable prettier/prettier */
// // // /* eslint-disable react/react-in-jsx-scope */
// // // //App.js

// // // /* eslint-disable prettier/prettier */
// import React from 'react';

// //import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// //import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import {Provider} from 'react-redux';
// import {store} from '../redux/store';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import HomePage from './homePage';
// import Cards from './cards';
// import Gifts from './gifts';
// import BalanceAndHistory from './balanceAndHistory';

// const Tab = createBottomTabNavigator();

// // if (__DEV__) {
// //   import('./reactotron.config').then(() =>
// //     console.log('Reactotron Configured'),
// //   );
// // }

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Tab.Navigator>
//           <Tab.Screen name="Home" component={HomePage} />
//           <Tab.Screen name="Cards" component={Cards} />
//           <Tab.Screen name="Gifts" component={Gifts} />
//           <Tab.Screen name="BalanceAndHistory" component={BalanceAndHistory} />
//         </Tab.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

/* eslint-disable prettier/prettier */
import React from 'react';

//import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CheckBox from 'react-native-check-box';
import enterCompanyCode from './pagesLogin/enterCompanyCode';
import enterPasscode from './pagesLogin/enterPasscode';
import homePage from './footer-navigation/homePage';
import {Provider} from 'react-redux';
import {store} from './redux/store';

if (__DEV__) {
  import('./reactotron.config').then(() =>
    console.log('Reactotron Configured'),
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="enterCompanyCode" component={enterCompanyCode} />
          <Stack.Screen name="enterPasscode" component={enterPasscode} />
          <Stack.Screen name="homePage" component={homePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

/* eslint-disable react/react-in-jsx-scope */
//App.js

// /* eslint-disable prettier/prettier */
// import React from 'react';

// //import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// // import CheckBox from 'react-native-check-box';
// import flashScreen from './pages/flashScreen';
// import enterCompanyCode from './pages/enterCompanyCode';
// import enterMobileNo from './pages/enterMobileNo';
// import enterOtp from './pages/enterOtp';
// import enterPasscode from './pages/enterPasscode';
// import confirmAppPasscode from './pages/confirmAppPasscode';
// import homePage from './footer-navigation/homePage';
// import { Provider } from 'react-redux';
// import { store } from './redux/store';

// if (__DEV__) {
//   import('./reactotron.config').then(() => console.log('Reactotron Configured'));
// }

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator
//           screenOptions={{
//             headerShown: false,
//           }}>
//           <Stack.Screen name="flashScreen" component={flashScreen} />
//           <Stack.Screen name="enterCompanyCode" component={enterCompanyCode} />
//           <Stack.Screen name="enterMobileNo" component={enterMobileNo} />
//           <Stack.Screen name="enterOtp" component={enterOtp} />
//           <Stack.Screen name="enterPasscode" component={enterPasscode} />
//           <Stack.Screen
//             name="confirmAppPasscode"
//             component={confirmAppPasscode}
//           />
//           <Stack.Screen name="homePage" component={homePage} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }
