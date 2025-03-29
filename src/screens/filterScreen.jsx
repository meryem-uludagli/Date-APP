import {
  SafeAreaView,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  View,
  TextInput,
} from 'react-native';
import {FilterStyle} from '../styles/filterStyle';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

const FilterScreen = () => {
  const navigation = useNavigation();
  const [selectedGender, setSelectedGender] = useState('Woman');
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [ageRange, setAgeRange] = useState([17, 60]);
  const [distance, setDistance] = useState([5, 150]);
  const [location, setLocation] = useState('San Francisco');
  const genderOptions = ['Men', 'Woman', 'Both'];

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
    <ImageBackground
      source={require('../assets/images/BACK.png')}
      style={FilterStyle.container}
      imageStyle={FilterStyle.backgroundImage}>
      <SafeAreaView>
        {/*HEADER*/}
        <View style={FilterStyle.textContainer}>
          <TouchableOpacity
            style={FilterStyle.backButton}
            onPress={() => navigation.goBack()}>
            <Image
              style={FilterStyle.left}
              source={require('../assets/images/left.png')}
            />
          </TouchableOpacity>

          <View>
            <Text style={FilterStyle.text}>Advanced Filters</Text>
          </View>
        </View>

        {/*GENDER*/}
        <View style={FilterStyle.genderContainer}>
          {genderOptions.map(gender => (
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
        <View style={FilterStyle.location}>
          <View>
            {/*LOACATION*/}
            <Text style={FilterStyle.label}>Current Location</Text>
            <TextInput
              style={FilterStyle.locationInput}
              value={location}
              onChangeText={setLocation}
            />
          </View>
        </View>

        {/*INTERESTS*/}
        <View>
          <Text style={FilterStyle.labelsecond}>Interests</Text>
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
        </View>
        {/*AGE-RANGE*/}
        <View>
          <Text style={FilterStyle.age}>
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
        </View>

        {/*DISTANCE*/}
        <View>
          <Text style={FilterStyle.distance}>
            Distance: {distance[0]} km - {distance[1]} km
          </Text>
          <MultiSlider
            values={distance}
            min={5}
            max={250}
            step={5}
            onValuesChange={setDistance}
            sliderLength={300}
            selectedStyle={FilterStyle.selectedSlider}
            unselectedStyle={FilterStyle.unselectedSlider}
            markerStyle={FilterStyle.marker}
          />
        </View>
        <View>
          {/*APPLY-BUTTON*/}
          <TouchableOpacity style={FilterStyle.applyButton}>
            <Text style={FilterStyle.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default FilterScreen;
