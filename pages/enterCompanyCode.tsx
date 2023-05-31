/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import { getEnterpriseDetailsAction } from '../redux/actions/actions';
// import { companyCode } from '../redux/actions/countAction';


export default function EnterCompanyCode(props:any) {
  const [companyCode, setCompanyCode] = useState('');
  const dispatch = useDispatch();

  const handleCompanyCode = async() => {
      console.log('Navigation initiated0.');
      try {
        await AsyncStorage.setItem('enterprise', JSON.stringify(companyCode));
      } catch (error) {
        console.log(error);
      }
      dispatch(getEnterpriseDetailsAction({companyCode,onSuccess: onSuccessCompanyCodeCheck}));
  };

  const onSuccessCompanyCodeCheck = () => {
    console.log('Navigation initiated.');
    props.navigation.navigate('enterMobileNo');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText1}>Hello there!</Text>
        <Text style={styles.headerText2}>Enter Company Code</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder="Please enter the company code"
          style={styles.textInput}
          placeholderTextColor="#ABABAD"
          onChangeText={val => setCompanyCode(val)}
        />
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => handleCompanyCode()}>
        <Text style={styles.footerText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161116',
    alignItems: 'center',
  },
  header: {
    marginTop: '15%',
    width: '40%',
    alignItems: 'center',
  },
  headerText1: {
    color: '#FEFEFE',
    fontSize: 20,
  },
  headerText2: {
    color: '#BABABB',
    fontSize: 14,
  },
  textInputContainer: {
    width: '90%',
  },
  textInput: {
    borderColor: '#565856',
    borderWidth: 1,
    backgroundColor: '#22242D',
    borderRadius: 24,
    color: '#ABABAD',
    paddingHorizontal: 20,
    marginTop: '15%',
    fontSize: 16,
  },
  footer: {
    marginTop: '110%',
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
