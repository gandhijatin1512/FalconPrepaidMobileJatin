/* eslint-disable prettier/prettier */
import React from 'react';

import {
  View,
  ImageBackground,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function flashScreen(props:any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/Rectangle362.png')}
        style={styles.background}
        resizeMode="cover">
        <View style={styles.header}>
          <View style={styles.headerImage}>
            <Image source={require('../assets/falconicon.png')} />
          </View>
          <View>
            <Text style={styles.headerText}>FALCON</Text>
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.bodyHeader}>BUILT TO BUILD WITH</Text>
          <Text style={styles.bodyText}>
            Falcon is a powerful platform that enables Fintechs, Banks, NBFCs,
            and Startups to launch any payment or lending product using open
            APIs and no code solutions.
          </Text>
        </View>
        <TouchableOpacity style={styles.footer} onPress={()=>props.navigation.navigate('enterCompanyCode')}>
          <View>
            <Text style={styles.footerText}>GET STARTED</Text>
          </View>
          <View style={styles.footerIcon}>
            <Image source={require('../assets/arrow.png')} />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    marginTop: '15%',
    marginLeft: '11%',
  },
  headerImage: {
    marginTop: '2%',
    marginRight: '1.2%',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  body: {
    marginTop: '70%',
  },
  bodyHeader: {
    fontSize: 36,
    color: '#FFFFFF',
    width: '60%',
    marginLeft: '11%',
    fontWeight: 'bold',
  },
  bodyText: {
    fontSize: 18,
    color: '#EAEAEA',
    width: '75%',
    marginLeft: '11%',
    marginTop: '2%',
  },
  footer: {
    flexDirection: 'row',
    marginTop: '20%',
    marginLeft: '11%',
    backgroundColor: '#FFFFFF',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 28,
  },
  footerText: {
    marginLeft: '20%',
    fontSize: 20,
    color: '#1F4FE7',
    fontWeight: 'bold',
  },
  footerIcon: {
    marginLeft: '30%',
  },
});
//onPress={()=>props.navigation.navigate('enterCompanyCode')}
