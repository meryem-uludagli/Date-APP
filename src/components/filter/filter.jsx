import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  Text,
  View,
  TextInput,
} from 'react-native';
import {FilterStyle} from '../../styles/filterStyle';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';
const Filter = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState('Woman');
  const [ageRange, setAgeRange] = useState([18, 60]);
  const [distance, setDistance] = useState([5, 150]);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [location, setLocation] = useState('San Francisco');

  const interests = [
    'Sport',
    'Football',
    'Tech',
    'Cinema',
    'Music',
    'Pet',
    'Cooking',
    'Design',
  ];
  const toggleInterest = interest => {
    setSelectedInterests(prev =>
      prev.includes(interest)
        ? prev.filter(item => item !== interest)
        : [...prev, interest],
    );
  };
  return (
    <SafeAreaView>
      <View style={FilterStyle.textContainer}>
        <TouchableOpacity
          style={FilterStyle.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            style={FilterStyle.left}
            source={require('../../assets/images/left.png')}
          />
        </TouchableOpacity>
        <Text style={FilterStyle.text}>Advanced Filters</Text>
      </View>
      <View style={FilterStyle.genderContainer}>
        {['Men', 'Woman', 'Both'].map(gender => (
          <TouchableOpacity
            key={gender}
            style={[
              FilterStyle.genderButton,
              selectedGender === gender && FilterStyle.selectedGender,
            ]}
            onPress={() => setSelectedGender(gender)}>
            <Text
              style={[
                FilterStyle.genderText,
                selectedGender === gender && FilterStyle.selectedGenderText,
              ]}>
              {gender}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={FilterStyle.locationContainer}>
        <Text style={FilterStyle.label}>Current Location</Text>
        <TextInput
          style={FilterStyle.locationInput}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      {/*INTERESRS*/}
      <Text style={FilterStyle.label}>Interests</Text>
      <View style={FilterStyle.interestsContainer}>
        {interests.map(interest => (
          <TouchableOpacity
            key={interest}
            style={[
              FilterStyle.interestButton,
              selectedInterests.includes(interest) &&
                FilterStyle.selectedInterest,
            ]}
            onPress={() => toggleInterest(interest)}>
            <Text
              style={[
                FilterStyle.interestText,
                selectedInterests.includes(interest) &&
                  FilterStyle.selectedInterestText,
              ]}>
              {interest}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/*AGE-RANGE*/}
      <Text style={FilterStyle.label}>
        Age Range: {ageRange[0]} - {ageRange[1]}
      </Text>
      <MultiSlider
        values={ageRange}
        min={18}
        max={60}
        step={1}
        onValuesChange={setAgeRange}
        sliderLength={300}
        selectedStyle={FilterStyle.selectedSlider}
        unselectedStyle={FilterStyle.unselectedSlider}
        markerStyle={FilterStyle.marker}
      />

      {/*DISTANCE*/}
      <Text style={FilterStyle.label}>
        Distance: {distance[0]} km - {distance[1]} km
      </Text>
      <MultiSlider
        values={distance}
        min={5}
        max={150}
        step={5}
        onValuesChange={setDistance}
        sliderLength={300}
        selectedStyle={FilterStyle.selectedSlider}
        unselectedStyle={FilterStyle.unselectedSlider}
        markerStyle={FilterStyle.marker}
      />

      {/*APPLY-BUTTON*/}
      <TouchableOpacity style={FilterStyle.applyButton}>
        <Text style={FilterStyle.applyButtonText}>Apply</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Filter;
