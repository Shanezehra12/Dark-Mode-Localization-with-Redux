import {View, Text} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  KEEP_LEARNING_ENG,
  KEEP_LEARNING_HIN,
  WELCOME_ENG,
  WELCOME_HIN,
} from '../utils/String';

const Dashboard = () => {
  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: THEME.data == 'LIGHT' ? 'white' : 'black',
      }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}>
        {LANGUAGE.data == 'ENGLISH' ? WELCOME_ENG : WELCOME_HIN}
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: '700',
          color: THEME.data == 'LIGHT' ? 'black' : 'white',
          marginTop: 10,
        }}>
        {LANGUAGE.data == 'ENGLISH' ? KEEP_LEARNING_ENG : KEEP_LEARNING_HIN}{' '}
      </Text>
    </View>
  );
};

export default Dashboard;
