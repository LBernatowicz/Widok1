/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {StatusBar} from 'react-native';
import CheckBoxInfo from '../components/CheckBoxInfo';
import CheckBox from '@react-native-community/checkbox';

import Header from '../components/Header';
import InputTextComponent from '../components/InputTextComponent';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any>;
}

const View20 = ({navigation}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          <View style={styles.titleContainer}>
            <View
              style={{
                flexDirection: 'row',
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: 'white',
                height: 33,
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
              }}>
              <Text style={styles.mainText}>EDIT PROFILE</Text>
            </View>
            <View style={{backgroundColor: 'white', marginBottom: 60}}>
              <Text>Fill personal informaton about the new lead</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'white', width: '100%'}}>
            <InputTextComponent title="NAME" />
            <InputTextComponent title="SURNAME" />
            <InputTextComponent title="EMAIL" />
            <InputTextComponent title="PHONE NUMBER" />
            <InputTextComponent title="COUNTRY/REGION" />
            <InputTextComponent title="CITY" />
            <InputTextComponent title="NOTE" />
          </View>
          <View style={{paddingVertical: 20}}>
            <InputTextComponent title="ENVELOPE:" />
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
                <Text style={styles.loginTextContainer}>SAVE CHANGE</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('elo')}
              style={styles.buttonContainer1}>
              <View>
                <Text style={styles.loginTextContainer1}>
                  FINISH ON THE CURRENT STAGE
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.checkContainer}>
          <View style={styles.checkBox}>
            <Text style={styles.textContainer}>COUPLE</Text>
            <View>
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
            </View>
          </View>
        </View>
      </ScrollView>
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
    marginVertical: 5,
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
  buttonContainer1: {
    backgroundColor: '#F4F4F4',
    width: 297,
    height: 47,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  loginTextContainer1: {
    color: 'red',
    fontSize: 14,
    fontFamily: 'Roboto-Black',
  },
});
export default View20;
