import {StyleSheet, Text, View, Image} from 'react-native';
import MessageStyle from '../../styles/messageStyle';
const MessageBox = ({item}) => {
  return (
    <View style={MessageStyle.messageContainer}>
      <Image source={item.avatar} style={MessageStyle.messageAvatar} />
      <View style={MessageStyle.messageContent}>
        <Text style={MessageStyle.messageName}>{item.name}</Text>
        <Text style={MessageStyle.messageText}>{item.message}</Text>
      </View>
    </View>
  );
};
export default MessageBox;
const styles = StyleSheet.create({});
