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

const barDotDimension = 20;

const View15_4 = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainStatsContainer}>
        <View style={styles.statusBarContainer}>
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDot} />
          </View>
          <View style={styles.line} />
          <View style={styles.statusDotContainer}>
            <View style={styles.statusBarDotHalf} />
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
            <Text style={styles.mainText}>STEP 4/4</Text>
          </View>
          <View
            style={{
              height: 20,
              width: 20,
              borderRadius: 15 / 2,
              // backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
        </View>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subText}>
            Your lead has been successfully added to the system!
          </Text>
        </View>
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
    width: '60%',
  },
  subText: {
    textAlign: 'center',
  },
  imageContainer: {},
});
export default View15_4;
