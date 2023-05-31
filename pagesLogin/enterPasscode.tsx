/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  // Image,
  TouchableOpacity,
  Image,
} from 'react-native';
import { RSA } from 'react-native-rsa-native';
import { useDispatch } from 'react-redux';
import { getPasscodeActionLogin } from '../redux/actions/actions';

export default function EnterPasscode(props: any) {
  const  pin1Ref = useRef(null);
  const  pin2Ref = useRef(null);
  const  pin3Ref = useRef(null);
  const  pin4Ref = useRef(null);
  const [otp1, setotp1] = useState('');
  const [otp2, setotp2] = useState('');
  const [otp3, setotp3] = useState('');
  const [otp4, setotp4] = useState('');
  var pin = otp1 + otp2 + otp3 + otp4;
  const dispatch = useDispatch();
  const handleAppPasscode = async () => {
    // console.log('dispatched');
    var pem = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQDZMcTBbqbbh7XtiqnlnNZgkm
    zHRftosLBKzh7QsQ+btwqdcF6kpx1qcJg2CWHBtpt6u0QKStmKywG6KhIpI2IhtH
    nPhAb2Wi5kdADXzypVB2RO+CyFEb4Utl0/s1Z3jcRl04Cjbwt6CVq4XPV/DZW79o
    jO/ihRxOwPOABSuXfQIDAQAB
    -----END PUBLIC KEY-----`;
    let passcode = await RSA.encrypt(pin,pem);
    passcode = passcode.replace(/(\r\n|\n|\r)/gm, '');
    dispatch(getPasscodeActionLogin({passcode,onSuccess: onSuccessPasscodeCheck}));
  };

  const onSuccessPasscodeCheck = () => {
    props.navigation.navigate('homePage');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => props.navigation.navigate('enterCompanyCode')}>
        <Image source={require('../assets/arrow2.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText1}>Enter Passcode</Text>
        <Text style={styles.headerText2}>Enter your 4 digit passcode </Text>
      </View>
      <View style={styles.textInputContainer}>
      <TextInput
          ref={pin1Ref}
          style={styles.textInput}
          keyboardType="numeric"
          autoFocus = {true}
          maxLength={1}
          onChangeText={(pin1) => {
            setotp1(pin1);
            if (pin1 !== ''){
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(pin2) => {
            setotp2(pin2);
            if (pin2 !== ''){
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(pin3) => {
            setotp3(pin3);
            if (pin3 !== ''){
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(pin4) => {
            setotp4(pin4);
            handleAppPasscode();
          }}
          />
      </View>
      <View style={styles.bodyFooter}>
        <Text style={styles.bodyFooter1}>Show Passcode</Text>
      </View>
      <TouchableOpacity
        style={styles.footer}>
        <Text style={styles.footerText}>Use touch ID</Text>
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
    marginLeft: '10%',
    marginTop: '6%',
    width: '80%',
    alignItems: 'center',
  },
  headerText1: {
    color: '#FEFEFE',
    fontSize: 24,
  },
  headerText2: {
    color: '#BABABB',
    fontSize: 16,
    textAlign: 'center',
  },
  textInputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '6%',
  },
  textInput: {
    borderColor: '#565856',
    borderWidth: 1,
    backgroundColor: '#22242D',
    borderRadius: 12,
    color: '#ABABAD',
    paddingHorizontal: 20,
    marginTop: '7%',
    fontSize: 24,
    width: '16%',
    height: '70%',
    marginLeft: '6%',
    textAlign: 'center',
  },
  bodyFooter: {
    alignItems: 'center',
    marginTop: '5%',
  },
  bodyFooter1: {
    color: '#1F4FE7',
    fontSize: 16,
  },
  footer: {
    marginTop: '103%',
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
