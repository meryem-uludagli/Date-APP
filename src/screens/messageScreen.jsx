import React from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import HeaderMessage from '../components/headerMessage';
import MessageStyle from '../styles/messageStyle';

const messages = [
  {
    id: '1',
    name: 'Alex',
    message: 'Hey! How are you?',
    avatar: require('../assets/images/people1.jpeg'),
  },
  {
    id: '2',
    name: 'Sophie',
    message: 'Let’s catch up soon!',
    avatar: require('../assets/images/people1.jpeg'),
  },
  {
    id: '3',
    name: 'Daniel',
    message: 'See you at 8!',
    avatar: require('../assets/images/people1.jpeg'),
  },
  {
    id: '4',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people1.jpeg'),
  },
];

const MessageScreen = () => {
  return (
    <SafeAreaView style={[MessageStyle.container, {paddingTop: 0}]}>
      {/*MESSAGE-HEADER*/}
      <HeaderMessage />

      {/*STORY-SECTION*/}
      <FlatList
        data={messages}
        horizontal
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 10}}
        renderItem={({item}) => (
          <View style={MessageStyle.storyContainer}>
            <Image source={item.avatar} style={MessageStyle.storyAvatar} />
            <Text style={MessageStyle.storyName}>{item.name}</Text>
          </View>
        )}
      />

      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        ListHeaderComponent={null}
        contentContainerStyle={{
          paddingHorizontal: 0,
          paddingTop: 0,
          marginTop: 0,
        }}
        renderItem={({item}) => (
          <View style={MessageStyle.chatItem}>
            <Image source={item.avatar} style={MessageStyle.chatAvatar} />
            <View>
              <Text style={MessageStyle.chatName}>{item.name}</Text>
              <Text style={MessageStyle.chatMessage}>{item.message}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
