import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {StatusBar} from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.headerMainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.arrowImageContainer}>
          <Image
            style={styles.aImageContainer}
            source={require('../image/icon7.png')}
          />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <Text style={styles.text1Container}>UPSILON</Text>
          <Text style={styles.text2Container}>CONSEIL</Text>
        </View>
        <TouchableOpacity style={styles.arrowImageContainer}>
          <Image
            style={styles.hImageContainer}
            source={require('../image/icon8.png')}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: '#232628',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 80,
  },
  headerContainer: {
    flexDirection: 'row',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  text1Container: {
    color: 'white',
    fontSize: 28,
  },
  text2Container: {
    color: 'white',
    fontSize: 28,
    fontWeight: '700',
    fontFamily: 'Roboto-Black',
  },
  arrowImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  aImageContainer: {},
  hImageContainer: {},
});

export default Header;
