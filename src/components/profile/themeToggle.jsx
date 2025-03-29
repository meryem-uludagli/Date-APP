import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Sun, Moon} from 'lucide-react-native';

const ThemeToggle = ({darkMode, setDarkMode}) => {
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      {darkMode ? (
        <Sun size={24} color="#FFB200" />
      ) : (
        <Moon size={24} color="black" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 10,
    right: 20,
  },
});

export default ThemeToggle;
