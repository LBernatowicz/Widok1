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
import InputTextComponent from '../components/InputTextComponent';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any>;
}

const View13 = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '70%',
        }}>
        <View style={styles.textAreaContainer}>
          <Text style={styles.textTitleContainer}>Cecile Marile</Text>
          <Text style={{}}>Administrator</Text>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 30}}>
          <View style={styles.imageRadiusContainer}>
            <Image
              style={styles.logoImageContainer}
              source={require('../image/profile.png')}
            />
          </View>
          <Text style={{fontSize: 12}}>Edit profil picture</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <InputTextComponent placeHolder="Full name" title="FULL NAME" />
        <InputTextComponent placeHolder="email@email.com" title="EMAIL" />
        <InputTextComponent
          placeHolder="+48 666-777-888"
          title="PHONE NUMBER"
        />
      </View>
      <View style={styles.buttonMainContainer}>
        <TouchableOpacity
          onPress={() => console.log('elo')}
          style={styles.buttonContainer}>
          <View>
            <Text style={styles.loginTextContainer}>REGISTER</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'red',
    flex: 1,
  },
  inputContainer: {
    alignItems: 'center',
  },
  textTitleContainer: {
    color: 'black',
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    paddingTop: 40,
    paddingBottom: 5,
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
    bottom: -30,
  },
  checkBox: {},
  imageRadiusContainer: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderColor: '#95989A19',
    borderWidth: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  logoImageContainer: {},
  textAreaContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});
export default View13;
