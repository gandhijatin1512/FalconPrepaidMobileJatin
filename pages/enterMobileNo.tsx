/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';

import {View, Text, StyleSheet, TextInput, Image, TouchableOpacity} from 'react-native';
import { useDispatch } from 'react-redux';

import { getMobileNoAction } from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function enterMobileNo(props:any) {
  let [mobileNo, setMobileNo] = useState('');
  const dispatch = useDispatch();

  const handleMobileNo = async() => {
    console.log('Navigation initiated0.');
      try {
        mobileNo = '+91' + mobileNo;
        await AsyncStorage.setItem('username', JSON.stringify(mobileNo));
      } catch (error) {
        console.log(error);
      }
    dispatch(getMobileNoAction({mobileNo,onSuccess: onSuccessMobileNoCheck}));
  };

  const onSuccessMobileNoCheck = () =>{
    props.navigation.navigate('enterOtp');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.headerIcon} onPress={()=>props.navigation.navigate('enterCompanyCode')}>
        <Image source={require('../assets/arrow2.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText1}>Enter your Mobile Number</Text>
        </View>
      </View>
      <View style={styles.textInputContainer}>
        <Text style={styles.countryCode}>+91</Text>
        <TextInput
          placeholder="Enter your 10 digit mobile no."
          style={styles.textInput}
          placeholderTextColor="#ABABAD"
          keyboardType="numeric"
          onChangeText = {val => setMobileNo(val)}
        />
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => handleMobileNo()}>
        <Text style={styles.footerText}>Send OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161116',
  },
  headerIcon: {
    marginTop: '10%',
    marginLeft: '6%',
  },
  header: {
    marginTop: '6%',
    width: '90%',
    alignItems: 'center',
  },
  headerText1: {
    color: '#FEFEFE',
    fontSize: 23,
    marginLeft: '10%',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  countryCode: {
    borderColor: '#565856',
    borderWidth: 1,
    backgroundColor: '#22242D',
    borderRadius: 24,
    color: '#ABABAD',
    paddingHorizontal: 20,
    marginTop: '7%',
    fontSize: 16,
    width: '18%',
    paddingTop: 13,
    marginLeft: '5%',
  },
  textInput: {
    borderColor: '#565856',
    borderWidth: 1,
    backgroundColor: '#22242D',
    borderRadius: 24,
    color: '#ABABAD',
    paddingHorizontal: 20,
    marginTop: '7%',
    fontSize: 16,
    marginLeft: '3%',
    width: '70%',
  },
  footer: {
    marginTop: '118%',
    marginLeft: '5%',
    width: '90%',
    height: '7%',
    backgroundColor: '#1F4FE7',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 24,
  },
  footerText: {
    color: 'white',
    fontSize: 18,
  },
});
