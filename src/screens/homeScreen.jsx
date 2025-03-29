import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import users from '../../db';
import {HomeStyle} from '../styles/homeStyle';
import HeaderHome from '../components/headerHome';
import HomeButton from '../components/homeButton';

const HomeScreen = ({navigation}) => {
  const [index, setIndex] = useState(0);
  const [isLastCard, setIsLastCard] = useState(false);

  const handleSwiped = cardIndex => {
    setIndex(cardIndex + 1);
    if (cardIndex === users.length - 2) {
      setIsLastCard(true);
    }
  };

  const handleCardPress = user => {
    navigation.navigate('Info', {user});
  };

  return (
    <ImageBackground
      source={require('../assets/images/back5png.png')}
      style={HomeStyle.backgroundImage}>
      {/*HEADER-HOME*/}

      <SafeAreaView style={HomeStyle.container}>
        <HeaderHome />

        {/*HOME-BUTTON*/}
        <View style={HomeStyle.swiperContainer}>
          <Swiper
            cards={users}
            renderCard={user => (
              <TouchableOpacity
                style={HomeStyle.card}
                onPress={() => handleCardPress(user)}>
                <Image source={user.photo} style={HomeStyle.image} />
                <View style={HomeStyle.overlay}>
                  <Text style={HomeStyle.name}>
                    {user.name}, {user.age}
                  </Text>
                  <Text style={HomeStyle.location}>{user.location}</Text>
                  <Text style={HomeStyle.bio}>{user.bio}</Text>
                </View>
              </TouchableOpacity>
            )}
            onSwiped={handleSwiped}
            onSwipedAll={() => {
              setIsLastCard(true);
              setIndex(users.length - 1);
            }}
            cardIndex={index}
            pointerEvents="box-none"
            backgroundColor={'transparent'}
            stackSize={3}
            disableTopSwipe
            disableBottomSwipe
            goBackFromLastCard
            disableSwiping={isLastCard}
          />
        </View>

        {/*HOME-BUTTON*/}
        <HomeButton />
      </SafeAreaView>
    </ImageBackground>
  );
};

export default HomeScreen;
