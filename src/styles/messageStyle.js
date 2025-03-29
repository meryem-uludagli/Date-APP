import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';

const MessageStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: Colors.WHITE},
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  active: {
    fontSize: 23,
    fontWeight: 'bold',
    bottom: 12,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: Colors.DEEP_PINK,
  },
  storyName: {marginTop: 5, fontSize: 12},
  message: {fontSize: 20, fontWeight: 'bold', top: 13, left: 5},
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    top: 20,
    borderBottomColor: Colors.MEDIUM_GRAY,
  },
  messageAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  messageText: {
    color: Colors.GRAY,
  },
});

export default MessageStyle;
