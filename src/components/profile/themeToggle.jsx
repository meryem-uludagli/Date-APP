import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {Sun, Moon} from 'lucide-react-native';

const ThemeToggle = ({toggleTheme, darkMode}) => {
  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={{position: 'absolute', top: 10, right: 20}}>
      {darkMode ? (
        <Sun size={24} color="black" />
      ) : (
        <Moon size={24} color="white" />
      )}
    </TouchableOpacity>
  );
};

export default ThemeToggle;
