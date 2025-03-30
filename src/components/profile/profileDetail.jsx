import React, {useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {ProfileStyle} from '../../styles/profileStyle';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from 'react-native-reanimated';

const ProfileDetail = () => {
  const profileImage = require('../../assets/images/people4.jpeg');

  const imageOpacity = useSharedValue(0);
  const imageTranslateY = useSharedValue(30);
  const sectionOpacity = useSharedValue(0);
  const sectionTranslateY = useSharedValue(30);

  useEffect(() => {
    imageOpacity.value = withTiming(1, {duration: 800});
    imageTranslateY.value = withTiming(0, {duration: 800});

    sectionOpacity.value = withDelay(300, withTiming(1, {duration: 800}));
    sectionTranslateY.value = withDelay(300, withTiming(0, {duration: 800}));
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => ({
    opacity: imageOpacity.value,
    transform: [{translateY: imageTranslateY.value}],
  }));

  const animatedSectionStyle = useAnimatedStyle(() => ({
    opacity: sectionOpacity.value,
    transform: [{translateY: sectionTranslateY.value}],
  }));

  return (
    <ScrollView
      contentContainerStyle={ProfileStyle.scrollContainer}
      showsVerticalScrollIndicator={false}>
      <View style={ProfileStyle.profileImageContainer}>
        <Animated.Image
          source={profileImage}
          style={[ProfileStyle.profileImage, animatedImageStyle]}
        />
      </View>

      <Animated.View style={[ProfileStyle.section, animatedSectionStyle]}>
        <Text style={ProfileStyle.sectionTitle}>Account Settings</Text>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Name:</Text>
          <Text style={ProfileStyle.value}>SELIN</Text>
        </View>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Last Name:</Text>
          <Text style={ProfileStyle.value}>Johnson</Text>
        </View>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Phone Number:</Text>
          <Text style={ProfileStyle.value}>988767887</Text>
        </View>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Birthday:</Text>
          <Text style={ProfileStyle.value}>12/08/1995</Text>
        </View>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Email:</Text>
          <Text style={ProfileStyle.value}>selin.johnson@email.com</Text>
        </View>
      </Animated.View>

      <Animated.View style={[ProfileStyle.section, animatedSectionStyle]}>
        <Text style={ProfileStyle.sectionTitle}>Professional Settings</Text>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Occupation:</Text>
          <Text style={ProfileStyle.value}>Software Engineer</Text>
        </View>
      </Animated.View>

      <Animated.View style={[ProfileStyle.section, animatedSectionStyle]}>
        <Text style={ProfileStyle.sectionTitle}>Hobbies</Text>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Hobbies:</Text>
          <Text style={ProfileStyle.value}>Coding, Traveling, Photography</Text>
        </View>
      </Animated.View>

      <Animated.View style={[ProfileStyle.section, animatedSectionStyle]}>
        <Text style={ProfileStyle.sectionTitle}>Plan Settings</Text>
        <Text style={ProfileStyle.text}>Current Plan: Basic</Text>
      </Animated.View>

      <Animated.View style={[ProfileStyle.section, animatedSectionStyle]}>
        <Text style={ProfileStyle.sectionTitle}>Discovery Settings</Text>
        <View style={ProfileStyle.infoRow}>
          <Text style={ProfileStyle.label}>Location:</Text>
          <Text style={ProfileStyle.value}>New York, USA</Text>
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default ProfileDetail;
