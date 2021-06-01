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

const View19 = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header />
      <View style={styles.bodyContainer}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={styles.logoImageContainer}
            source={require('../image/4-4.png')}
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
              width: '37%',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
            }}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              source={require('../image/arrow.png')}
            />
            <Text style={styles.mainText}>STEP 4/4</Text>
          </View>
          <View
            style={{
              marginBottom: 20,
              width: '50%',
              justifyContent: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{textAlign: 'center'}}>Your lead has been successfully added to the system!</Text>
          </View>
        </View>
        <View style={styles.buttonMainContainer}>
          <TouchableOpacity
            onPress={() => console.log('elo')}
            style={styles.buttonContainer}>
            <View>
              <Text style={styles.loginTextContainer}>GO TO MAIN MENU</Text>
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
    width: '100%',
    marginHorizontal: 46,
    marginTop: 20,
  },
  imageContainer: {},
  titleContainer: {
    backgroundColor: 'white',
    width: '100%',
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
    marginTop: 60,
    marginBottom: 50,
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
  textContainer: {
    color: 'black',
    fontSize: 13,
    fontFamily: 'Roboto-Black',
    marginBottom: 5,
  },
  titleText: {
    color: 'black',
    fontSize: 22,
    fontFamily: 'Roboto-Black',
  },
  subTitleText: {
    color: 'black',
    marginBottom: 5,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Roboto-Black',
  },
  subTitle1: {
    color: 'black',
    fontSize: 15,
  },
});
export default View19;
