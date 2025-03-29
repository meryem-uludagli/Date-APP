import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {width, height} from '../utils/constants';

const MessageStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: width * 0.02,
  },
  active: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    bottom: height * 0.01,
  },
  storyAvatar: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    borderWidth: 2,
    borderColor: Colors.DEEP_PINK,
  },
  storyName: {
    marginTop: height * 0.01,
    fontSize: width * 0.03,
  },
  message: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    top: height * 0.02,
    left: width * 0.02,
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.02,
    borderBottomWidth: 1,
    top: height * 0.03,
    borderBottomColor: Colors.MEDIUM_GRAY,
  },
  messageAvatar: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    marginRight: width * 0.03,
  },
  messageContent: {
    flex: 1,
  },
  messageName: {
    fontWeight: 'bold',
    fontSize: width * 0.04,
  },
  messageText: {
    color: Colors.GRAY,
  },
});

export default MessageStyle;
