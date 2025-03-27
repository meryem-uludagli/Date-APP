import React from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {InfoScreenStyle} from '../styles/infoStyle';
import InfoButton from '../components/infoButton';

const InfoScreen = () => {
  const route = useRoute();
  const {user} = route.params;

  return (
    <SafeAreaView style={InfoScreenStyle.container}>
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
          <View style={InfoScreenStyle.interestContainer}>
            {user.interests && Array.isArray(user.interests) ? (
              user.interests.map((interest, index) => (
                <Text key={index} style={InfoScreenStyle.interestTag}>
                  {interest}
                </Text>
              ))
            ) : (
              <Text style={InfoScreenStyle.noInterestText}>
                No interests available
              </Text>
            )}
          </View>

          <Text style={InfoScreenStyle.sectionTitle}>About Me</Text>
          <Text style={InfoScreenStyle.bio}>{user.aboutMe}</Text>

          {/*INFO-BUTTON*/}
          <InfoButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default InfoScreen;
