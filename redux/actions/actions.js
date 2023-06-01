/* eslint-disable prettier/prettier */
import {getEnterpriseDetails,getMobileNo,getOtp,getPasscode,getEnterpriseDetailsLogin,getPasscodeLogin,getUnauthorizationError} from '../api';
import {API_CALL, GET_ENTERPRISE_DETAILS,GET_MOBILE_NUMBER,GET_ENTER_OTP,GET_PASSCODE,GET_ENTERPRISE_DETAILS_LOGIN,GET_PASSCODE_LOGIN,GET_UNAUTHORIZATION_ERROR} from './actionTypes';

export const getEnterpriseDetailsAction = payload => {
  return {
    type: API_CALL,
    subtype: GET_ENTERPRISE_DETAILS,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getEnterpriseDetails(val),
  };
};

export const getMobileNoAction = payload => {
  console.log('action passed');
  return {
    type: API_CALL,
    subtype: GET_MOBILE_NUMBER,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getMobileNo(val),
  };
};

export const getEnterOtpAction = payload => {
  console.log('action passed');
  return {
    type: API_CALL,
    subtype: GET_ENTER_OTP,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getOtp(val),
  };
};

export const getPasscodeAction = payload => {
  console.log('action passed');
  return {
    type: API_CALL,
    subtype: GET_PASSCODE,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getPasscode(val),
  };
};


export const getPasscodeActionLogin = payload => {
  console.log('action passed for passcode login');
  return {
    type: API_CALL,
    subtype: GET_PASSCODE_LOGIN,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getPasscodeLogin(val),
  };
};

export const getEnterpriseDetailsLoginAction = payload => {
  return {
    type: API_CALL,
    subtype: GET_ENTERPRISE_DETAILS_LOGIN,
    payload,
    onSuccessCallback: payload?.onSuccess,
    promise: (val) => getEnterpriseDetailsLogin(val),
  };
};

// export const unauthorizationErrorAction = payload => {
//   return {
//     type: API_CALL,
//     subtype: GET_UNAUTHORIZATION_ERROR,
//     payload,
//     onSuccessCallback: payload?.onSuccess,
//     promise: () => getUnauthorizationError(),
//   };
// };
