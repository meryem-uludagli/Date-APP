import {StyleSheet} from 'react-native';

const MessageStyle = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
  },
  storyAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#EC7FA9',
  },
  storyName: {marginTop: 5, fontSize: 12},
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  chatAvatar: {width: 50, height: 50, borderRadius: 25, marginRight: 10},
  chatName: {fontSize: 16, fontWeight: 'bold'},
  chatMessage: {fontSize: 14, color: '#ADABAB'},
});
export default MessageStyle;
