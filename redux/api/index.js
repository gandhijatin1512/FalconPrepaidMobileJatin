/* eslint-disable prettier/prettier */
import axios from 'axios';
import axiosClient from './axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { companyCode } from '../actions/countAction';

// export axiosClient = axios.create({
//   headers:
// })

const BASE_URL = 'http://prepaidqa.tab.kitecash.in/kite/';

export const getEnterpriseDetails = async (data = {}) => {
  const {companyCode} = data;
  console.log(companyCode, axios.get);
  console.log(axios.get(BASE_URL + 'v1/companies/code/' + companyCode));
  return axios.get(BASE_URL + 'v1/companies/code/' + companyCode);
  // console.log(response);
  // return fetch(`${BASE_URL}v1/companies/code/${companyCode}`).then(res =>
  //   res.json(),
  // );
};

export const getMobileNo = async (data = {}) => {
  const {mobileNo} = data;
  console.log('axios initiated');
  return axiosClient.post(BASE_URL + 'v1/employees/generate-otp', { username: mobileNo , purpose: 'LOGIN'});
};

export const getOtp = async (data = {}) => {
  const {otp} = data;
  const mobileNo = JSON.parse(await AsyncStorage.getItem('username'));
  console.log('axios initiated',data,mobileNo);
  return axiosClient.post(BASE_URL + 'v1/employees/verify-otp', { username: mobileNo , purpose: 'LOGIN' , otp: otp});
};

export const getPasscode = async (data = {}) => {
  const {passcode} = data;
  console.log(passcode);
  return axiosClient.put(BASE_URL + 'v1/employees/me/passcode', { passcode: passcode , passcodeType: 'SECURITY'});
};

export const getEnterpriseDetailsLogin = async (data = {}) => {
  const {companyCode} = data;
  console.log(companyCode, axios.get);
  // console.log(axios.get(BASE_URL + 'v1/companies/code/' + companyCode));
  return axios.get(BASE_URL + 'v1/companies/code/' + companyCode);
};

export const getPasscodeLogin = async (data = {}) => {
  console.log("getPasscodeLogin started");
  const {passcode} = data;
  // console.log(passcode);
  return axiosClient.post(BASE_URL + 'v1/employees/me/passcode/validate', { passcode: passcode , passcodeType: 'SECURITY'});
};

// export const getUnauthorizationError = async (data = {}) => {
//   console.log('getUnauthorizationError started');
//   const token = JSON.parse(await AsyncStorage.getItem('token'));
//   const response = await axiosClient.post(BASE_URL + 'v1/employees/re-authenticate',{},{headers:{'Refresh-Token': token.jwt.refreshToken}})
//   console.log(JSON.stringify(response));
//   return AsyncStorage.setItem('token', JSON.stringify(response));
// };
//http://prepaidqa.tab.kitecash.in/kite/v1/companies/code/lalitgift15
//'http://prepaidqa.tab.kitecash.in/kite/'
// await AsyncStorage.setItem('token', JSON.stringify(reauthenticateResponse.jwt.accessToken));
