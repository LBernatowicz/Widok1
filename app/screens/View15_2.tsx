import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import CheckBoxInfo from '../components/CheckBoxInfo';

const barDotDimension = 20;

const View15_2 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainStatsContainer}>
        <View style={styles.statusBarContainer}>
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotHalf} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotQuart} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotQuart} />
          </View>
        </View>
      </View>
      <View style={styles.textStatusContainer}>
        <View>
          <Text style={styles.textStatusBar}>Info</Text>
        </View>
        <View style={{left: 18}}>
          <Text style={styles.textStatusBar}>Budget</Text>
        </View>
        <View style={{left: 25}}>
          <Text style={styles.textStatusBar}>Checkout</Text>
        </View>
        <View style={{left: 18}}>
          <Text style={styles.textStatusBar}>Completed</Text>
        </View>
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.titleContainer}>
          <TouchableOpacity>
            <View style={{}}>
              <Image
                style={{transform: [{rotate: '180deg'}]}}
                source={require('../image/arrow.png')}
              />
            </View>
          </TouchableOpacity>
          <View style={styles.mainTitleContainer}>
            <Text style={styles.mainText}>STEP 2/4</Text>
          </View>
          <TouchableOpacity>
            <View style={{}}>
              <Image
                style={styles.imageContainer}
                source={require('../image/arrow.png')}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.subTitleContainer}>
          <Text>Fill personal information about the new lead</Text>
        </View>
        <CheckBoxInfo
          title={'ENVELOPPE'}
          text1={'By creating an accont you agree to our'}
          text2={'Terms of Service and privacy policy'}
        />
        <CheckBoxInfo
          title={'COMPROMIS PREVU'}
          text1={'By creating an accont you agree to our'}
          text2={'Terms of Service and privacy policy'}
        />
        <CheckBoxInfo
          title={'COMPROMIS CIGNE'}
          text1={'By creating an accont you agree to our'}
          text2={'Terms of Service and privacy policy'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBarDot: {
    backgroundColor: 'black',
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusBarDotHalf: {
    borderWidth: 6,
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusBarDotQuart: {
    borderWidth: 2,
    height: barDotDimension,
    width: barDotDimension,
    borderRadius: barDotDimension / 2,
  },
  statusDotContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: barDotDimension,
  },
  statusBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  line: {
    height: 2,
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  textStatusBar: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    paddingTop: 5,
  },
  textStatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  mainStatsContainer: {
    alignItems: 'center',
  },
  mainText: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Roboto-Black',
    paddingHorizontal: 20,
  },
  bodyContainer: {
    marginTop: 20,
  },
  mainTitleContainer: {},
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  subTitleContainer: {
    marginTop: 10,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
});
export default View15_2;
