/* eslint-disable prettier/prettier */
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
export let axiosClient = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set the AUTH token for any request
axiosClient.interceptors.request.use(async function (config) {
  const companyCode = JSON.parse(await AsyncStorage.getItem('enterprise'));
  const token = JSON.parse(await AsyncStorage.getItem('token'));

  if (companyCode) {
    config.headers.enterprise = companyCode;
  }
  if (token?.jwt?.accessToken) {
    config.headers.Authorization = `Bearer ${token?.jwt.accessToken}`;
  }
  return config;
});

// const setHeaders = (headers = {}) => {
//   axiosClient.
// }
export default axiosClient;

// ( async () => {
//     console.log('axiosClient initiated');
//     const mobileNo = JSON.parse(await AsyncStorage.getItem('username'));
//     console.log(mobileNo);
//     const companyCode = JSON.parse(await AsyncStorage.getItem('enterprise'));
//     console.log(companyCode);
//     console.log('axiosClient initiated2');
//   axiosClient = axios.create({
//     purpose: 'LOGIN',
//     username: '+91' + mobileNo,
//     headers: {
//       'Content-Type': 'application/json',
//       enterprise: companyCode,
//     },
//   });
//   }
// )();
