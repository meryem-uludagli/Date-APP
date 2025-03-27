import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const HeaderHome = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/bell.png')}
          style={styles.bellIcon}
        />
      </View>
      <View>
        <Image
          source={require('../assets/images/logo1.png')}
          style={styles.headerText}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('FilterScreen')}>
        <Image
          source={require('../assets/images/filter.png')}
          style={styles.filterIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 80,
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 7,
    flexDirection: 'row',
  },
  header: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bellIcon: {
    width: 30,
    height: 30,
  },
  filterIcon: {
    width: 30,
    height: 30,
  },
  headerText: {
    width: 150,
    height: 50,
    textAlign: 'center',
  },
});
