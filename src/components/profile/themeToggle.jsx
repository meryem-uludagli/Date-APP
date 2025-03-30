import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Sun, Moon} from 'lucide-react-native';
import {Colors} from '../../theme/Colors';

const ThemeToggle = ({darkMode, setDarkMode}) => {
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <TouchableOpacity onPress={toggleTheme} style={styles.button}>
      {darkMode ? (
        <Sun size={24} color={Colors.DARK_YELLOW} />
      ) : (
        <Moon size={24} color={Colors.BLACK} />
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
