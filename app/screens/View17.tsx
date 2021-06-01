/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {StatusBar} from 'react-native';

import Header from '../components/Header';
import CheckBoxInfo from '../components/CheckBoxInfo';

const View17 = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <View style={styles.bodyContainer}>
        <View>
          <Image
            style={styles.logoImageContainer}
            source={require('../image/2-4.png')}
          />
        </View>
        <View style={styles.titleContainer}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              marginBottom: 10,
              backgroundColor: 'white',
              height: 33,
              width: '60%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              source={require('../image/arrow.png')}
            />
            <Text style={styles.mainText}>STEP 2/4</Text>
            <View style={{}}>
              <Image
                style={styles.imageContainer}
                source={require('../image/arrow.png')}
              />
            </View>
          </View>
          <View style={{backgroundColor: 'white', marginBottom: 20}}>
            <Text>Fill personal informaton about the new lead</Text>
          </View>
        </View>
        <View style={styles.checkBoxInfoContainer}>
          <CheckBoxInfo
            title={'ENVELOPPE'}
            text1={'By creating account you agree to our'}
            text2={'Teams of Service and Privacy Policy'}
          />
          <CheckBoxInfo
            title={'COMPROMIS PREVU'}
            text1={'By creating account you agree to our'}
            text2={'Teams of Service and Privacy Policy'}
          />
          <CheckBoxInfo
            title={'COMPROMIS CIGNE'}
            text1={'By creating account you agree to our'}
            text2={'Teams of Service and Privacy Policy'}
          />
        </View>
        <View style={styles.buttonMainContainer}>
          <TouchableOpacity
            onPress={() => console.log('elo')}
            style={styles.buttonContainer}>
            <View>
              <Text style={styles.loginTextContainer}>GO TO NEXT STEP</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  bodyContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
    marginTop: 20,
  },
  imageContainer: {},
  titleContainer: {
    backgroundColor: 'white',
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Roboto-Black',
  },
  loginTextContainer: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
  buttonContainer: {
    backgroundColor: '#232628',
    width: 297,
    height: 47,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 60,
  },
  logoImageContainer: {},
  contentContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: '100%',
  },
  checkContainer: {
    position: 'absolute',
  },
  checkBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: -152,
    left: 110,
  },
  textContainer: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Roboto-Black',
    marginBottom: 5,
  },
  checkBoxInfoContainer: {
    justifyContent: 'flex-start',
  },
});
export default View17;
