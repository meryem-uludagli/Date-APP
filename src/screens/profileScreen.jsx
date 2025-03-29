import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import {ProfileStyle} from '../styles/profileStyle';
import ThemeToggle from '../components/profile/themeToggle';
import ProfileDetail from '../components/profile/profileDetail';

const ProfileScreen = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaView
      style={[ProfileStyle.container, darkMode && ProfileStyle.darkBackground]}>
      {/*THEME-TOGGLE*/}
      <View style={{position: 'absolute', top: 50, right: 20, zIndex: 999}}>
        <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </View>
      <ProfileDetail />
    </SafeAreaView>
  );
};

export default ProfileScreen;
