import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const HeaderMessage = () => {
  return (
    <View style={styles.container}>
      {/*HEADER*/}
      <View style={styles.header}>
        <Text style={styles.chat}>Chat</Text>
      </View>

      {/*SEARCH-BAR*/}
      <View style={styles.searchContainer}>
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/search.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TextInput style={styles.searchBar} placeholder="Search..." />
        <TouchableOpacity>
          <Image
            source={require('../../assets/images/heart.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 20},
  header: {
    alignItems: 'center',
    paddingBottom: 10,
  },
  chat: {fontSize: 18, fontWeight: 'bold'},
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  searchBar: {
    flex: 1,
    marginHorizontal: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
});

export default HeaderMessage;
