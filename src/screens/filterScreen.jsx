import {ImageBackground, View} from 'react-native';
import {FilterStyle} from '../styles/filterStyle';
import Filter from '../components/filter/filter';

const FilterScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/BACK.png')}
      style={FilterStyle.container}
      imageStyle={FilterStyle.backgroundImage}>
      <View>
        <Filter />
      </View>
    </ImageBackground>
  );
};

export default FilterScreen;
