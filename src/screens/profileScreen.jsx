import React, {useState} from 'react';
import {Text, View, Image, ScrollView, SafeAreaView} from 'react-native';
import {ProfileStyle} from '../styles/profileStyle';
import ThemeToggle from '../components/profile/themeToggle';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const profileImage = require('../assets/images/people4.jpeg');

  return (
    <SafeAreaView
      style={[ProfileStyle.container, darkMode && ProfileStyle.darkBackground]}>
      {/*THEME-TOGGLE*/}
      <View style={{position: 'absolute', top: 50, right: 20, zIndex: 999}}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </View>

      <ScrollView
        contentContainerStyle={ProfileStyle.scrollContainer}
        showsVerticalScrollIndicator={false}>
        <View style={ProfileStyle.profileImageContainer}>
          <Image source={profileImage} style={ProfileStyle.profileImage} />
        </View>

        {/*PROFILE-SECTION*/}
        <View style={ProfileStyle.section}>
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
        </View>

        <View style={ProfileStyle.section}>
          <Text style={ProfileStyle.sectionTitle}>Professional Settings</Text>
          <View style={ProfileStyle.infoRow}>
            <Text style={ProfileStyle.label}>Occupation:</Text>
            <Text style={ProfileStyle.value}>Software Engineer</Text>
          </View>
        </View>

        <View style={ProfileStyle.section}>
          <Text style={ProfileStyle.sectionTitle}>Hobbies</Text>
          <View style={ProfileStyle.infoRow}>
            <Text style={ProfileStyle.label}>Hobbies:</Text>
            <Text style={ProfileStyle.value}>
              Coding, Traveling, Photography
            </Text>
          </View>
        </View>

        <View style={ProfileStyle.section}>
          <Text style={ProfileStyle.sectionTitle}>Plan Settings</Text>
          <Text style={ProfileStyle.text}>Current Plan: Basic</Text>
        </View>

        <View style={ProfileStyle.section}>
          <Text style={ProfileStyle.sectionTitle}>Discovery Settings</Text>
          <View style={ProfileStyle.infoRow}>
            <Text style={ProfileStyle.label}>Location:</Text>
            <Text style={ProfileStyle.value}>New York, USA</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
