import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {changeTheme} from '../redux/ThemeSlice';
import { CHANGE_THEME_TITLE_ENG, CHANGE_THEME_TITLE_HIN, CONTINUE_BTN_ENGLISH, CONTINUE_BTN_HIN, DARK_THEME_ENG, DARK_THEME_HIN, LIGHT_THEME_ENG, LIGHT_THEME_HIN } from '../utils/String';

const ChooseTheme = () => {
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
        source={require('../images/theme.png')}
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
        {LANGUAGE.data == "ENGLISH" ? CHANGE_THEME_TITLE_ENG : CHANGE_THEME_TITLE_HIN}
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
          dispatch(changeTheme('LIGHT'));
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
            fontSize: 25,
          }}>
          {LANGUAGE.data == "ENGLISH" ? DARK_THEME_ENG : DARK_THEME_HIN}
        </Text>
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
          dispatch(changeTheme('DARK'));
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
            fontSize: 25,
          }}>
{LANGUAGE.data == "ENGLISH" ? LIGHT_THEME_ENG : LIGHT_THEME_HIN}
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
          navigation.navigate('ChooseLanguage');
        }}>
        <Text
          style={{
            color: THEME.data == 'LIGHT' ? 'white' : 'black',
            fontSize: 20,
          }}>
          {LANGUAGE.data == "ENGLISH" ? CONTINUE_BTN_ENGLISH : CONTINUE_BTN_HIN}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseTheme;
