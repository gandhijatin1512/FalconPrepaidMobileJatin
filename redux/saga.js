/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import {call, put, takeEvery} from 'redux-saga/effects';
import {API_CALL} from './actions/actionTypes';
// import { unauthorizationErrorAction } from '../redux/actions/actions';

//import axios from 'axios';
import axiosClient from './api/axiosClient';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'http://prepaidqa.tab.kitecash.in/kite/';

async function handleUnauthorizedFunction(){
      const token = JSON.parse(await AsyncStorage.getItem('token'));
      const response = await axiosClient.post(BASE_URL + 'v1/employees/re-authenticate',{},{headers:{'Refresh-Token': token.jwt.refreshToken}})
      console.log(JSON.stringify(response));
      await (AsyncStorage.setItem('token', JSON.stringify(response)));
}

// worker saga
function* callApi(action) {
  //console.log('received action in saga', JSON.stringify(action, null, 4));
  const {type, subtype, promise, payload, onSuccessCallback} = action;
  try {
    const response = yield call(() => promise(payload));
    // console.log('saga initiated', response);
    // console.log('saga initiated', response?.status);
    // console.log('saga initiated', response?.data);
    if (response?.status === 200) {
      yield put({
        type: subtype?.SUCCESS,
        payload: response?.data || {},
      });
      if (onSuccessCallback && typeof onSuccessCallback === 'function') {
        onSuccessCallback(response?.data || {});
      }
    }
    else {
      yield put({
        type: subtype.FAIL,
        payload: response?.data,
      });
    }
  } catch (err) {
    console.log(err);
    if (err.response.status === 401){
      console.log('401 detected');
      //yield put(unauthorizationErrorAction(action));
      //console.log('getUnauthorizationError started');
      handleUnauthorizedFunction();
      yield put(action);
    }
    else {
      yield put({
        type: subtype.FAIL,
        payload: err?.message,
      });
    }
  }

  // yield call(promise, companyCode);
}

// watcher saga
function* getApiActions() {
  yield takeEvery(API_CALL, callApi);
  // yield takeLatest(ENTER_MOBILE_NUMBER,callApi2);
}

export default getApiActions;
