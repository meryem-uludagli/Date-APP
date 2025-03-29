import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../../node_modules/@react-navigation/native/lib/module/theming/fonts';
import {Colors} from '../theme/Colors';

const {width, height} = Dimensions.get('window');

const FilterStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  left: {
    width: 30,
    height: 40,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.DEEP_PINK,
    top: 60,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 90,
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: Colors.DEEP_PINK,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedGender: {
    backgroundColor: Colors.DEEP_PINK,
  },
  genderText: {
    color: Colors.DEEP_PINK,
    fontWeight: 'bold',
  },
  selectedGenderText: {
    color: Colors.WHITE,
  },
  location: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  locationInput: {
    backgroundColor: Colors.WHITE,
    padding: 10,
    top: 10,
    borderRadius: 10,
    width: '100%',
  },
  labelsecond: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
    top: 20,
    left: 25,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    top: 28,
    width: '100%',
  },
  interestButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.DEEP_PINK,
    marginRight: 10,
    marginBottom: 10,
  },
  selectedInterest: {
    backgroundColor: Colors.DEEP_PINK,
  },
  interestText: {
    color: Colors.DEEP_PINK,
    fontWeight: 'bold',
  },
  selectedInterestText: {
    color: Colors.WHITE,
  },
  age: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
    top: 30,
    left: 25,
  },
  selectedSlider: {
    backgroundColor: Colors.DEEP_PINK,
    top: 30,
    left: 50,
  },
  unselectedSlider: {
    backgroundColor: Colors.MEDIUM_GRAY,
    top: 30,
    left: 50,
  },
  marker: {
    backgroundColor: Colors.DEEP_PINK,
    width: 25,
    height: 25,
    top: 30,
    left: 50,
    borderRadius: 12.5,
  },
  distance: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.BLACK,
    top: 35,
    left: 25,
  },
  applyButton: {
    backgroundColor: Colors.DEEP_PINK,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 70,
    width: '88%',
    left: 22,
  },
  applyButtonText: {color: Colors.WHITE, fontSize: 16, fontWeight: 'bold'},
});

export {FilterStyle};
