/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import {StatusBar} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import Header from '../components/Header';
import {StackNavigationProp} from '@react-navigation/stack';

import View15_1 from './View15_1';
import View15_2 from './View15_2';
import View15_3 from './View15_3';
import View15_4 from './View15_4';

interface Props {
  navigation: StackNavigationProp<any>;
}

const View15 = ({navigation}: Props) => {
  const [strona, setStrona] = useState(1);

  let handleClick = () => {
    {
      strona === 4 ? navigation.navigate('HomeView') : setStrona(strona + 1);
    }
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Header onPress={() => navigation.goBack()} navigation={navigation} />
      <ScrollView
        scrollEnabled={true}
        contentContainerStyle={styles.contentContainer}>
        <View style={styles.bodyContainer}>
          {strona === 1 && <View>{<View15_1 />}</View>}
          {strona === 2 && <View>{<View15_2 />}</View>}
          {strona === 3 && <View>{<View15_3 />}</View>}
          {strona === 4 && <View>{<View15_4 />}</View>}
          <View style={styles.buttonMainContainer}>
            <TouchableOpacity
              onPress={handleClick}
              style={styles.buttonContainer}>
              <View>
                {strona === 4 ? (
                  <View>
                    <Text style={styles.loginTextContainer}>
                      GO BACK TO MENU
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={styles.loginTextContainer}>
                      GO TO NEXT STEP
                    </Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
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
  },
  buttonMainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 60,
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
});
export default View15;
