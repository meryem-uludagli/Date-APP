import React from 'react';
import {Image} from 'react-native';
import {TABNAVIGATOR} from '../../utils/Routes';

const TabIcon = ({route, size, focused}) => {
  let iconSize = focused ? size * 1.5 : size * 1.1;

  const icons = {
    [TABNAVIGATOR.HOME]: require('../../assets/images/fire.png'),
    [TABNAVIGATOR.MESSAGE]: require('../../assets/images/message.png'),
    [TABNAVIGATOR.PROFILE]: require('../../assets/images/person.png'),
  };

  return (
    <Image
      source={icons[route.name]}
      style={{
        width: iconSize,
        height: iconSize,
        top: 10,
        resizeMode: 'contain',
      }}
    />
  );
};

export default TabIcon;
