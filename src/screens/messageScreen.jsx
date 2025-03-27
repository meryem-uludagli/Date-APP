import React from 'react';
import {View, Text, FlatList, Image, SafeAreaView} from 'react-native';
import HeaderMessage from '../components/headerMessage';
import MessageStyle from '../styles/messageStyle';

const messages = [
  {
    id: '1',
    name: 'Alex',
    message: 'Hey! How are you?',
    avatar: require('../assets/images/people2.jpeg'),
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
    avatar: require('../assets/images/people4.jpeg'),
  },
  {
    id: '4',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people3.jpeg'),
  },
  {
    id: '6',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people5.jpeg'),
  },
  {
    id: '7',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people5.jpeg'),
  },
  {
    id: '8',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people5.jpeg'),
  },
  {
    id: '9',
    name: 'Olivia',
    message: 'Can’t wait for the weekend!',
    avatar: require('../assets/images/people5.jpeg'),
  },
];

const MessageScreen = () => {
  return (
    <SafeAreaView style={[MessageStyle.container, {paddingTop: 0}]}>
      <HeaderMessage />

      <FlatList
        ListHeaderComponent={() => (
          <>
            {/*STORY-SECTION*/}
            <Text style={MessageStyle.active}>Actives</Text>
            <FlatList
              data={messages}
              horizontal
              keyExtractor={item => item.id}
              contentContainerStyle={{paddingHorizontal: 10}}
              renderItem={({item}) => (
                <View style={MessageStyle.storyContainer}>
                  <Image
                    source={item.avatar}
                    style={MessageStyle.storyAvatar}
                  />
                  <Text style={MessageStyle.storyName}>{item.name}</Text>
                </View>
              )}
              showsHorizontalScrollIndicator={false}
            />

            <Text style={MessageStyle.message}>Messages</Text>
          </>
        )}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 10, marginTop: 20}}
        renderItem={({item}) => (
          <View style={MessageStyle.messageContainer}>
            <Image source={item.avatar} style={MessageStyle.messageAvatar} />
            <View style={MessageStyle.messageContent}>
              <Text style={MessageStyle.messageName}>{item.name}</Text>
              <Text style={MessageStyle.messageText}>{item.message}</Text>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
