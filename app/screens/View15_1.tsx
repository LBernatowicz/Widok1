import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';

import ImputTextComponent from '../components/InputTextComponent';

const barDotDimension = 20;

const View15_1 = () => {
  const [tickHandle, setTickHandle] = useState(false);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.mainStatsContainer}>
        <View style={styles.statusBarContainer}>
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
          <View
            style={{
              height: 17,
              width: 17,
              borderRadius: 15 / 2,
              // backgroundColor: 'black',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          />
          <View style={styles.mainTitleContainer}>
            <Text style={styles.mainText}>STEP 1/4</Text>
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
        <View
          style={{
            bottom: -17,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
            marginHorizontal: 10,
          }}>
          <Text style={styles.textTick}>COUPLE</Text>
          <TouchableOpacity onPress={() => setTickHandle(!tickHandle)}>
            <View
              style={{
                borderWidth: 2,
                borderColor: 'black',
                width: 20,
                height: 20,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              {tickHandle === true && (
                <Image source={require('../image/tick.png')} />
              )}
            </View>
          </TouchableOpacity>
        </View>
        <ImputTextComponent title={'NAME'} placeHolder={'fill your Name'} />
        <ImputTextComponent
          title={'SURNAME'}
          placeHolder={'fill your Surname'}
        />
        <ImputTextComponent title={'EMAIL'} placeHolder={'fill your Email'} />
        <ImputTextComponent
          title={'PHONE NUMBER'}
          placeHolder={'fill your Number'}
        />
        <ImputTextComponent
          title={'COUNTRY/REGION'}
          placeHolder={'fill your localisation'}
        />
        <ImputTextComponent
          title={'CITY'}
          placeHolder={'fill your localisation'}
        />
        <ImputTextComponent title={'NOTES'} placeHolder={'your notes'} />
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
  textTick: {
    textAlign: 'center',
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    paddingHorizontal: 5,
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
export default View15_1;
