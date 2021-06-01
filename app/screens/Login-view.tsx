import React from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

const LoginView = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.mainImageContainer}>
        <Image
          style={styles.imageContainer}
          source={require('../image/4.png')}
        />
        <View style={styles.mainLogoContainer}>
          <View style={styles.logoContainer}>
            <Text style={styles.text1Container}>UPSILON</Text>
            <Text style={styles.text2Container}>CONSEIL</Text>
          </View>
          <Text style={styles.subtitleTextContainer}>
            Avenue de Champel 8C, 1206 Geneve, Switzerland
          </Text>
        </View>
        <View style={styles.registerContainer}>
          <TouchableOpacity>
            <View>
              <Image
                style={styles.buttonImageContainer}
                source={require('../image/5.png')}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('elo')}
            style={styles.buttonContainer}>
            <View>
              <Text style={styles.loginTextContainer}>LOGIN</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    resizeMode: 'stretch',
    opacity: 0.75,
  },
  mainImageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  buttonImageContainer: {},
  buttonContainer: {
    bottom: 128,
    backgroundColor: 'grey',
    width: 297,
    height: 47,
    borderRadius: 47 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    position: 'absolute',
    bottom: 50,
  },
  textRegisterContainer: {
    color: 'white',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  text1Container: {
    color: 'white',
    fontSize: 40,
  },
  text2Container: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  subtitleTextContainer: {
    color: 'white',
    fontSize: 10,
    fontFamily: 'Roboto-Black',
  },
  mainLogoContainer: {
    position: 'absolute',
    top: '43%',
    alignItems: 'center',
  },
  loginTextContainer: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
});
export default LoginView;
