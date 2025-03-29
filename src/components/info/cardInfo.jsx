import {Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import {InfoScreenStyle} from '../../styles/infoStyle';
import {useRoute} from '@react-navigation/native';
const CardInfo = () => {
  const route = useRoute();
  const {user} = route.params;
  return (
    <View>
      <ScrollView contentContainerStyle={InfoScreenStyle.scrollContainer}>
        {/*PROFILE*/}
        <Image source={user.photo} style={InfoScreenStyle.profileImage} />

        <View style={InfoScreenStyle.card}>
          {/*USER-INFO*/}
          <Text style={InfoScreenStyle.name}>
            {user.name}, {user.age}
          </Text>
          <Text style={InfoScreenStyle.location}>📍 {user.location}</Text>
          <View style={InfoScreenStyle.matchContainer}>
            <Text style={InfoScreenStyle.matchText}>
              🔥 {user.matchPercentage}% Match
            </Text>
          </View>

          {/*BIO*/}
          <Text style={InfoScreenStyle.bio}>{user.bio}</Text>

          {/*INTERESTS*/}
          <Text style={InfoScreenStyle.sectionTitle}>Interests</Text>
          <Text style={InfoScreenStyle.noInterestText}>
            No interests available
          </Text>

          <Text style={InfoScreenStyle.sectionTitle}>About Me</Text>
          <Text style={InfoScreenStyle.bio}>{user.aboutMe}</Text>
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
        </View>
      </ScrollView>
    </View>
  );
};
export default CardInfo;
