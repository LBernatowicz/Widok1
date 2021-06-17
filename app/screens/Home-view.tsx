import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const DATA = [
  {
    image: require('../image/icon2.png'),
    title: 'PERFORMANCE',
    navigationId: 'View22',
  },
  {
    image: require('../image/icon1.png'),
    title: 'MENAGE CASES',
    navigationId: 'View8',
  },
  {
    image: require('../image/icon3.png'),
    title: 'ADD A NEW LEAD',
    navigationId: 'View15',
  },
  {
    image: require('../image/icon6.png'),
    title: 'ALOCATE A LEAD',
    navigationId: 'View21',
  },
  {
    image: require('../image/icon4.png'),
    title: 'MENAGE USER ROLES',
    navigationId: 'View20',
  },
  {
    image: require('../image/icon5.png'),
    title: 'LOG OUT',
    navigationId: 'View7',
  },
];
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<any>;
}

const HomeView = ({navigation}: Props) => {
  const renderItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate(item.navigationId)}>
        <View style={styles.iconContainer}>
          <Image style={styles.iconImageContainer} source={item.image} />
        </View>
        <View style={styles.flatListTextContainer}>
          <Text style={styles.iconText}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topBackgroundContainer}>
        <View style={styles.logoContainer}>
          <Text style={styles.text1Container}>UPSILON</Text>
          <Text style={styles.text2Container}>CONSEIL</Text>
        </View>
        <Image
          style={styles.transparentImageContainer}
          source={require('../image/2.png')}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatarImageContainer}
            source={require('../image/3.png')}
          />
        </View>
        <View style={styles.menuContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleContainer}>Cecile Maire</Text>
          </View>
          <View style={styles.subTitleContainer}>
            <Text style={styles.subTitleContainer}>Administrator</Text>
          </View>
          <FlatList data={DATA} renderItem={renderItem} numColumns={2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  topBackgroundContainer: {
    backgroundColor: '#232628',
    alignItems: 'center',
    height: '30%',
  },
  bodyContainer: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  transparentImageContainer: {
    width: '100%',
    opacity: 0.1,
  },
  avatarContainer: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
    borderRadius: 150,
    marginTop: -150 / 2,
  },
  avatarImageContainer: {
    width: 145,
    height: 145,
  },
  logoContainer: {
    flexDirection: 'row',
    position: 'absolute',
    top: '30%',
  },
  text1Container: {
    color: 'white',
    fontSize: 34,
  },
  text2Container: {
    color: 'white',
    fontSize: 34,
    fontWeight: '700',
  },
  menuContainer: {
    backgroundColor: 'white',
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    color: 'black',
    fontSize: 34,
    fontWeight: '700',
  },
  subTitleContainer: {
    alignItems: 'center',
    fontFamily: 'Roboto-Black',
    color: 'black',
    fontSize: 12,
    marginBottom: 5,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    backgroundColor: '#e6e6fa',
    height: 80,
    width: 80,
  },
  iconImageContainer: {
    resizeMode: 'cover',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 100,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  iconText: {
    fontSize: 12,
    fontFamily: 'Roboto-Black',
    width: 130,
    textAlign: 'center',
  },
  flatListContainer: {},
  flatListTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeView;
