import {Text, View, Image} from 'react-native';
import MessageStyle from '../../styles/messageStyle';
const ActiveUsers = ({item}) => {
  return (
    <View style={MessageStyle.storyContainer}>
      <Image source={item.avatar} style={MessageStyle.storyAvatar} />
      <Text style={MessageStyle.storyName}>{item.name}</Text>
    </View>
  );
};
export default ActiveUsers;
