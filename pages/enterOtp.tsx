/* eslint-disable prettier/prettier */
import React, {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {getEnterOtpAction} from '../redux/actions/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function EnterOtp(props: any) {
  const dispatch = useDispatch();
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const pin5Ref = useRef(null);
  const pin6Ref = useRef(null);
  const [otp1, setotp1] = useState('');
  const [otp2, setotp2] = useState('');
  const [otp3, setotp3] = useState('');
  const [otp4, setotp4] = useState('');
  const [otp5, setotp5] = useState('');
  const [otp6, setotp6] = useState('');
  const otp = otp1 + otp2 + otp3 + otp4 + otp5 + otp6;
  const handleOtp = async () => {
    console.log(otp);
    dispatch(getEnterOtpAction({otp, onSuccess: onSuccessOtpCheck}));
  };

  const onSuccessOtpCheck = async (token: any) => {
    Alert.alert('t', JSON.stringify(token));
    await AsyncStorage.setItem('token', JSON.stringify(token));//token.jwt.accessToken
    //const token = JSON.parse(await AsyncStorage.getItem('token'));
    console.log(token);
    props.navigation.navigate('enterPasscode');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => props.navigation.navigate('enterMobileNo')}>
        <Image source={require('../assets/arrow2.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText1}>Enter OTP</Text>
        <Text style={styles.headerText2}>
          Verify your number by entering 6 digit OTP shared on your mobile
          number
        </Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput
          ref={pin1Ref}
          style={styles.textInput}
          keyboardType="numeric"
          autoFocus={true}
          maxLength={1}
          onChangeText={pin1 => {
            setotp1(pin1);
            if (pin1 !== '') {
              pin2Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin2 => {
            setotp2(pin2);
            if (pin2 !== '') {
              pin3Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin3 => {
            setotp3(pin3);
            if (pin3 !== '') {
              pin4Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin4 => {
            setotp4(pin4);
            if (pin4 !== '') {
              pin5Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin5Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin5 => {
            setotp5(pin5);
            if (pin5 !== '') {
              pin6Ref.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin6Ref}
          style={styles.textInput}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={pin6 => setotp6(pin6)}
        />
      </View>
      <View style={styles.bodyFooter}>
        <Text style={styles.bodyFooter1}>Didn't you receive any code?</Text>
        <Text style={styles.bodyFooter2}>Resend OTP in 00:59 sec</Text>
      </View>
      <TouchableOpacity style={styles.footer} onPress={() => handleOtp()}>
        <Text style={styles.footerText}>Submit</Text>
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
    marginLeft: '2%',
  },
  textInput: {
    borderColor: '#565856',
    borderWidth: 1,
    backgroundColor: '#22242D',
    borderRadius: 12,
    color: '#ABABAD',
    paddingHorizontal: 20,
    marginTop: '7%',
    fontSize: 16,
    width: '13%',
    marginLeft: '3%',
  },
  bodyFooter: {
    alignItems: 'center',
    marginTop: '5%',
  },
  bodyFooter1: {
    color: '#BABABB',
    fontSize: 12,
  },
  bodyFooter2: {
    color: '#BABABB',
    fontSize: 16,
    marginTop: '1%',
  },
  footer: {
    marginTop: '92%',
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
