import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../redux/ThemeSlice';
import { CHANGE_LANGUAGE_TITLE_ENG, CHANGE_LANGUAGE_TITLE_HIN, CONTINUE_BTN_ENGLISH, CONTINUE_BTN_HIN, ENGLISH, HINDI } from '../utils/String';
import { changeLanguage } from '../redux/LanguageSlice';

const ChooseLanguage = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language);
  


  const dispatch = useDispatch();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: THEME.data == 'LIGHT' ? 'white' : 'black',
      }}>
      <Image
        source={require('../images/lang.png')}
        style={{
          width: 100,
          height: 100,
          alignSelf: 'center',
          marginTop: 50,
          tintColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
      />
      <Text
        style={{
          color: THEME.data == 'LIGHT' ? 'black' : 'white',
          alignSelf: 'center',
          fontSize: 30,
          fontWeight: '700',
          marginTop: 30,
        }}>
          {LANGUAGE.data == "ENGLISH" ? CHANGE_LANGUAGE_TITLE_ENG : CHANGE_LANGUAGE_TITLE_HIN}
      </Text>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 120,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
        onPress={() => {
          dispatch(changeLanguage('ENGLISH'));
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
            fontSize: 25,
          }}>{ENGLISH}</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 120,
          borderRadius: 10,
          alignSelf: 'center',
          marginTop: 30,
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
        onPress={() => {
          dispatch(changeLanguage('HINDI'));
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
            fontSize: 25,
          }}>
          {HINDI}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 10,
          alignSelf: 'center',
          borderWidth: 2,
          justifyContent: 'center',
          alignItems: 'center',
          bottom: 20,
          position: 'absolute',
          backgroundColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'white' : 'black',
            fontSize: 20,
          }}>
          {LANGUAGE.data == "ENGLISH" ? CONTINUE_BTN_ENGLISH: CONTINUE_BTN_HIN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseLanguage;
;