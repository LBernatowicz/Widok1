import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
import {StatusBar} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {SafeAreaView} from 'react-native-safe-area-context';

import Header from '../components/Header';
import {StackNavigationProp} from '@react-navigation/stack';

const hasNotch = DeviceInfo.hasNotch();

const edges = hasNotch
  ? ['right', 'left', 'bottom']
  : ['bottom', 'top', 'right', 'left'];

interface Props {
  navigation: StackNavigationProp<any>;
}

const View9 = ({navigation}: Props) => {
  return (
    // @ts-ignore
    <SafeAreaView edges={edges} style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <View style={styles.logoContainer}>
        <Image
          style={styles.buttonImageContainer}
          source={require('../image/icon9.png')}
        />
      </View>
      <View>
        <Text style={styles.textTitleContainer}>We Sent an email!</Text>
      </View>
      <View style={styles.subTitleContainer}>
        <Text style={styles.textSubTitleContainer}>
          The link was send to your
        </Text>
        <Text style={styles.textSubTitleContainer}>
          email. Check your mailbox and set
        </Text>
        <Text style={styles.textSubTitleContainer}>new password</Text>
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity
          onPress={() => console.log('elo')}
          style={styles.buttonContainer}>
          <View>
            <Text style={styles.loginTextContainer}>BACK TO LOGIN</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    flex: 1,
  },
  inputContainer: {},
  textTitleContainer: {
    color: 'black',
    fontFamily: 'Roboto-Black',
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
  },
  checkContainer: {
    flexDirection: 'row',
    width: '65%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textContainer: {
    color: 'black',
    fontSize: 12,
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
    margin: 30,
    bottom: 30,
  },
  logoContainer: {
    height: 90,
    width: 90,
    borderRadius: 90,
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  buttonImageContainer: {},
  textSubTitleContainer: {
    color: 'black',
    fontSize: 16,
  },
  subTitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 110,
  },
});
export default View9;
