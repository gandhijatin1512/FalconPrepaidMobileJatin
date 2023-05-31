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
} from 'react-native';
import {getPasscodeAction} from '../redux/actions/actions';
import {RSA} from 'react-native-rsa-native';
//import { RSA } from 'react-native-rsa-native';
import CheckBox from '@react-native-community/checkbox';

export default function ConfirmAppPasscode(props: any) {
  const [isChecked, setChecked] = useState(false);
  const {route} = props;
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);
  const [otp1, setotp1] = useState('');
  const [otp2, setotp2] = useState('');
  const [otp3, setotp3] = useState('');
  const [otp4, setotp4] = useState('');
  var secondPin = otp1 + otp2 + otp3 + otp4;
  let pin = '';
  //check
  const {firstPin} = route.params;

  if (firstPin === secondPin) {
    pin = secondPin;
  }
  const dispatch = useDispatch();

  // const verifyPinAndProceed = () => {
  //   console.log('dispatched0');
  //   var pem = `-----BEGIN PUBLIC KEY-----
  //   MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQDZMcTBbqbbh7XtiqnlnNZgkm
  //   zHRftosLBKzh7QsQ+btwqdcF6kpx1qcJg2CWHBtpt6u0QKStmKywG6KhIpI2IhtH
  //   nPhAb2Wi5kdADXzypVB2RO+CyFEb4Utl0/s1Z3jcRl04Cjbwt6CVq4XPV/DZW79o
  //   jO/ihRxOwPOABSuXfQIDAQAB
  //   -----END PUBLIC KEY-----`;
  //   console.log('dispatched1');

  //   RSA.encrypt(passcode, pem)
  //       .then((encodedMessage: string) => {
  //         handleAppPasscode(encodedMessage.replace(/(\r\n|\n|\r)/gm, ''));
  //       })
  //       .catch((error: any) => {
  //           console.log('getUser-- ' + (error));
  //       });
  //       console.log('dispatched2');
  // };

  const handleAppPasscode = async () => {
    console.log('dispatched');
    var pem = `-----BEGIN PUBLIC KEY-----
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCQDZMcTBbqbbh7XtiqnlnNZgkm
    zHRftosLBKzh7QsQ+btwqdcF6kpx1qcJg2CWHBtpt6u0QKStmKywG6KhIpI2IhtH
    nPhAb2Wi5kdADXzypVB2RO+CyFEb4Utl0/s1Z3jcRl04Cjbwt6CVq4XPV/DZW79o
    jO/ihRxOwPOABSuXfQIDAQAB
    -----END PUBLIC KEY-----`;
    let passcode = await RSA.encrypt(pin, pem);
    passcode = passcode.replace(/(\r\n|\n|\r)/gm, '');
    dispatch(getPasscodeAction({passcode, onSuccess: onSuccessPasscodeCheck}));
  };

  const onSuccessPasscodeCheck = () => {
    props.navigation.navigate('homePage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => props.navigation.navigate('enterPasscode')}>
        <Image source={require('../assets/arrow2.png')} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText1}>Confirm App Passcode</Text>
        <Text style={styles.headerText2}>
          Passcode will be used to open app and authenticate UPI transactions
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
          }}
        />
      </View>
      <View style={styles.bodyFooter}>
        <Text style={styles.bodyFooter1}>Show Passcode</Text>
      </View>
      <View style={styles.subFooter}>
        <View style={styles.checkbox}>
        <CheckBox
          disabled={false}
          value={isChecked}
          onValueChange={(newValue) => setChecked(newValue)}
          //color={isChecked ? '#4630EB' : undefined}
        />
        </View>
        <View style={styles.subFooterText}>
          <Text style={styles.subFooterText1}>Enable Face ID/ Fingerprint</Text>
          <Text style={styles.subFooterText2}>
            When enabled, you can use your Face ID/ Fingerprint for App
            authentication as well as for UPI payments
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => handleAppPasscode()}>
        <Text style={styles.footerText}>Next</Text>
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
  subFooter: {
    flexDirection: 'row',
    marginTop: '78%',
    marginLeft: '3%',
  },
  checkBox: {},
  subFooterText: {
    width: '90%',
    marginLeft: '2%',
  },
  subFooterText1: {
    fontSize: 18,
    color: '#FEFEFE',
  },
  subFooterText2: {
    fontSize: 14,
    color: '#BABABB',
  },
  footer: {
    marginTop: '3%',
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
  checkbox: {},
});
