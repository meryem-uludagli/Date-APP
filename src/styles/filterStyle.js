import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const FilterStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'center',
  },
  left: {
    position: 'absolute',
    bottom: 100,
    width: 30,
    height: 40,
    left: 8,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    padding: 10,
    zIndex: 1,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 50,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff4081',
  },
  genderContainer: {
    flexDirection: 'row',
    right: 10,
    justifyContent: 'space-around',
    marginBottom: 20,
    width: '100%',
  },
  genderButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#ff4081',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedGender: {
    backgroundColor: '#ff4081',
  },
  genderText: {
    color: '#ff4081',
    fontWeight: 'bold',
  },
  selectedGenderText: {
    color: '#fff',
  },
  locationContainer: {
    width: '90%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'left',
    width: '90%',
  },
  locationInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 10,
    width: '100%',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginBottom: 20,
    width: '90%',
  },
  interestButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#ff4081',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedInterest: {
    backgroundColor: '#ff4081',
  },
  interestText: {
    color: '#ff4081',
    fontWeight: 'bold',
  },
  selectedInterestText: {
    color: '#fff',
  },
  selectedSlider: {
    backgroundColor: '#ff4081',
  },
  unselectedSlider: {
    backgroundColor: '#ccc',
  },
  marker: {
    backgroundColor: '#ff4081',
    width: 25,
    height: 25,
    borderRadius: 12.5,
  },
  applyButton: {
    backgroundColor: '#ff4081',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
    width: '100%',
    alignSelf: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export {FilterStyle};
