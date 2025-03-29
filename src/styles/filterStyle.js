import {StyleSheet} from 'react-native';
import {Colors} from '../theme/Colors';
import {width, height} from '../utils/constants';

const FilterStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backButton: {
    width: width * 0.03,
    height: height * 0.03,
    alignSelf: 'flex-start',
  },
  left: {
    width: width * 0.05,
    height: height * 0.05,
  },
  text: {
    fontSize: width * 0.08,
    fontWeight: 'bold',
    color: Colors.DEEP_PINK,
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'column',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: height * 0.05,
  },
  genderButton: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.06,
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
    marginTop: height * 0.05,
    paddingHorizontal: width * 0.05,
  },
  label: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  locationInput: {
    backgroundColor: Colors.WHITE,
    padding: height * 0.02,
    marginTop: height * 0.02,
    borderRadius: 10,
    width: '100%',
  },
  interests: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  labelsecond: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Colors.DARKER_GRAY,
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: height * 0.04,
    width: '100%',
  },
  interestButton: {
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.04,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.DEEP_PINK,
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
  ageContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  rangeTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  age: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  range: {
    fontSize: width * 0.04,
  },
  selectedSlider: {
    backgroundColor: Colors.DEEP_PINK,
  },
  unselectedSlider: {
    backgroundColor: Colors.MEDIUM_GRAY,
  },
  marker: {
    backgroundColor: Colors.DEEP_PINK,
    width: width * 0.06,
    height: height * 0.03,
  },
  distance: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: Colors.BLACK,
  },
  applyContainer: {alignItems: 'center'},
  applyButton: {
    backgroundColor: Colors.DEEP_PINK,
    width: width * 0.88,
    height: height * 0.05,
    justifyContent: 'center',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: height * 0.04,
  },
  applyButtonText: {
    color: Colors.WHITE,
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});

export {FilterStyle};
