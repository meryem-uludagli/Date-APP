import React from 'react';
import {Text, FlatList, SafeAreaView} from 'react-native';
import HeaderMessage from '../components/message/headerMessage';
import MessageStyle from '../styles/messageStyle';
import ActiveUsers from '../components/message/activeUsers';
import MessageBox from '../components/message/messageBox';

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
              renderItem={({item}) => <ActiveUsers item={item} />}
              showsHorizontalScrollIndicator={false}
            />

            <Text style={MessageStyle.message}>Messages</Text>
          </>
        )}
        data={messages}
        keyExtractor={item => item.id}
        contentContainerStyle={{paddingHorizontal: 10, marginTop: 20}}
        renderItem={({item}) => <MessageBox item={item} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default MessageScreen;
