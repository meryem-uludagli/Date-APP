import React, {useState, useRef} from 'react';
import {View, TouchableOpacity, Image, Animated} from 'react-native';
import LottieView from 'lottie-react-native';
import {HomeStyle} from '../styles/homeStyle';

const HomeButton = () => {
  const [liked, setLiked] = useState(false);
  const shakeAnim = useRef(new Animated.Value(0)).current;
  const heartAnimRef = useRef(null);

  const handleLike = () => {
    setLiked(true);
    heartAnimRef.current?.play();
    setTimeout(() => setLiked(false), 1000);
  };

  const handleDislike = () => {
    Animated.sequence([
      Animated.timing(shakeAnim, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(shakeAnim, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={HomeStyle.buttonContainer}>
      <Animated.View style={{transform: [{translateX: shakeAnim}]}}>
        <TouchableOpacity style={HomeStyle.button} onPress={handleDislike}>
          <Image
            source={require('../assets/images/cross.png')}
            style={HomeStyle.buttonIcon}
          />
        </TouchableOpacity>
      </Animated.View>
      <TouchableOpacity style={HomeStyle.button}>
        <Image
          source={require('../assets/images/star.png')}
          style={HomeStyle.buttonIcon}
        />
      </TouchableOpacity>
      <TouchableOpacity style={HomeStyle.button} onPress={handleLike}>
        {liked ? (
          <LottieView
            ref={heartAnimRef}
            source={require('../assets/animations/heart.json')}
            autoPlay
            loop={false}
            style={{width: 60, height: 60}}
          />
        ) : (
          <Image
            source={require('../assets/images/heart.png')}
            style={HomeStyle.buttonIcon}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HomeButton;
