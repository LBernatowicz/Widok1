import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Header from '../components/Header';
import InputTextComponent from '../components/InputTextComponent';

const View8 = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <Header />
      <View>
        <Text style={styles.textTitleContainer}>Create an Account</Text>
      </View>
      <View style={styles.inputContainer}>
        <InputTextComponent placeHolder="Full name" title="FULL NAME" />
        <InputTextComponent placeHolder="email@email.com" title="EMAIL" />
        <InputTextComponent title="PASSWORD" />
        <InputTextComponent title="CONFIRM PASSWORD" />
      </View>
      <View style={styles.checkContainer}>
        <View style={styles.checkBox}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
          />
        </View>
        <View>
          <Text style={styles.textContainer}>
            By creating an account you agree to our
          </Text>
          <Text style={styles.textContainer}>
            Teams of Service and Privacy Policy
          </Text>
        </View>
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
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  inputContainer: {},
  textTitleContainer: {
    color: 'black',
    fontFamily: 'Roboto-Black',
    fontSize: 22,
    paddingTop: 20,
    paddingBottom: 50,
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
  },
  checkBox: {},
});
export default View8;
