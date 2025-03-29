import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {InfoScreenStyle} from '../styles/infoStyle';
import CardInfo from '../components/info/cardInfo';

const InfoScreen = () => {
  return (
    <SafeAreaView style={InfoScreenStyle.container}>
      {/*CARD-INFO*/}
      <View>
        <CardInfo />
      </View>
    </SafeAreaView>
  );
};

export default InfoScreen;
