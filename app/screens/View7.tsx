import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {StatusBar} from 'react-native';

import Header from '../components/Header';

const View7 = () => {
  const [text, onChangeText] = useState(null);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Header />
      <Image
        style={styles.logoImageContainer}
        source={require('../image/6.png')}
      />
      <View style={styles.bodyContainer}>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.textLoginContainer}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.bodyInputsContainer}>
          <View style={styles.loginContainer}>
            <Text style={styles.subTextContainer}>EMAIL</Text>
          </View>
          <TextInput
            style={styles.loginInputContainer}
            onChangeText={onChangeText}
            value={text}
            placeholder="Login or email"
          />

          <View style={styles.passwordnContainer}>
            <Text style={styles.subTextContainer}>PASSWORD</Text>
          </View>
          <TextInput
            style={styles.passwordInputContainer}
            onChangeText={onChangeText}
            value={text}
            placeholder="Password"
          />

          <View style={styles.passwordForgotContainer}>
            <TouchableOpacity onPress={() => console.log('elo')}>
              <Text style={styles.textContainer}>Forgot password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.serviceInvoContainer}>
            <Text style={styles.textContainer}>
              By creating an account you agree to our
            </Text>
            <Text style={styles.textContainer}>
              Teams of Service and Privacy Policy
            </Text>
          </View>
        </View>
      </View>
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
    alignItems: 'center',
    flex: 1,
  },
  buttonContainer: {
    backgroundColor: '#232628',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 109,
    width: 244,
    height: 35,
    borderRadius: 5,
    top: 550,
  },
  textLoginContainer: {
    color: 'white',
    fontFamily: 'Roboto-Black',
  },
  loginInputContainer: {
    width: 308,
    height: 47,
    borderWidth: 2,
    borderRadius: 10,
    top: 150,
    borderColor: '#dcdcdc',
  },
  passwordInputContainer: {
    width: 308,
    height: 47,
    borderWidth: 2,
    borderRadius: 10,
    top: 170,
    borderColor: '#dcdcdc',
  },
  passwordForgotContainer: {
    top: 175,
    left: 210,
  },
  bodyInputsContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  loginContainer: {
    top: 145,
    left: 15,
  },
  passwordnContainer: {
    top: 165,
    left: 15,
  },
  subTextContainer: {
    color: 'black',
    fontFamily: 'Roboto-Black',
    fontSize: 11,
  },
  textContainer: {
    color: 'black',
    fontSize: 11,
  },
  logoImageContainer: {
    position: 'absolute',
    top: 150,
  },
  serviceInvoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 200,
  },
});
export default View7;
