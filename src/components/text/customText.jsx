import React from 'react';
import {Text as RNText} from 'react-native';

const CustomText = ({style, children, ...props}) => {
  return (
    <RNText {...props} style={[{fontFamily: ''}, style]}>
      {children}
    </RNText>
  );
};

export default CustomText;
