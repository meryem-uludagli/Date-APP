import {View, TouchableOpacity, Image} from 'react-native';
import {HomeStyle} from '../styles/homeStyle';

const HomeButton = () => {
  return (
    <View style={HomeStyle.buttonContainer}>
      <TouchableOpacity style={HomeStyle.button}>
        <Image
          source={require('../assets/images/cross.png')}
          style={HomeStyle.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyle.button}>
        <Image
          source={require('../assets/images/star.png')}
          style={HomeStyle.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyle.button}>
        <Image
          source={require('../assets/images/heart.png')}
          style={HomeStyle.buttonIcon}
        />
      </TouchableOpacity>
    </View>
  );
};
export default HomeButton;
