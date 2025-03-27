import {TouchableOpacity, Text, View} from 'react-native';
import {InfoScreenStyle} from '../styles/infoStyle';
const InfoButton = () => {
  return (
    <View style={InfoScreenStyle.buttonContainer}>
      <TouchableOpacity style={InfoScreenStyle.likeButton}>
        <Text style={InfoScreenStyle.buttonText}>❤️ Beğen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={InfoScreenStyle.shareButton}>
        <Text style={InfoScreenStyle.buttonText}>🔗 Paylaş</Text>
      </TouchableOpacity>
      <TouchableOpacity style={InfoScreenStyle.giftButton}>
        <Text style={InfoScreenStyle.buttonText}>💝 Hediye Gönder</Text>
      </TouchableOpacity>
    </View>
  );
};
export default InfoButton;
