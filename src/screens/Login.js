import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  ENTER_EMAIL_ENG,
  ENTER_EMAIL_HIN,
  ENTER_PASS_ENG,
  ENTER_PASS_HIN,
  LOGIN_ENG,
  LOGIN_HIN,
  NEW_ACCOUNT_ENG,
  NEW_ACCOUNT_HIN,
  SIGNUP_ENG,
  SIGNUP_HIN,
} from '../utils/String';

const Login = () => {
  const navigation = useNavigation();
  const THEME = useSelector(state => state.theme);
  const LANGUAGE = useSelector(state => state.language);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: THEME.data == 'LIGHT' ? 'white' : 'black',
      }}>
      <Text
        style={{
          alignSelf: 'center',
          marginTop: 50,
          fontSize: 30,
          fontWeight: '700',
          color: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}>
        {LANGUAGE.data == 'ENGLISH' ? LOGIN_ENG : LOGIN_HIN}
      </Text>

      <TextInput
        placeholder={
          LANGUAGE.data == 'ENGLISH' ? ENTER_EMAIL_ENG : ENTER_EMAIL_HIN
        }
        placeholderTextColor={THEME.data == 'LIGHT' ? 'black' : 'white'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 50,
          color: 'black',
          borderColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
      />

      <TextInput
        placeholder={
          LANGUAGE.data == 'ENGLISH' ? ENTER_PASS_ENG : ENTER_PASS_HIN
        }
        placeholderTextColor={THEME.data == 'LIGHT' ? 'black' : 'white'}
        style={{
          width: '85%',
          paddingLeft: 15,
          height: 50,
          borderRadius: 15,
          borderWidth: 0.5,
          fontSize: 20,
          alignSelf: 'center',
          marginTop: 30,
          color: 'black',
          borderColor: THEME.data == 'LIGHT' ? 'black' : 'white',
        }}
      />

      <TouchableOpacity
        style={{
          width: '85%',
          height: 50,
          backgroundColor: THEME.data == 'LIGHT' ? 'black' : 'white',
          borderRadius: 15,
          alignSelf: 'center',
          marginTop: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Dashboard');
        }}>
        <Text
          style={{
            fontSize: 18,
            color: THEME.data == 'LIGHT' ? 'white' : 'black',
          }}>
          {LANGUAGE.data == 'ENGLISH' ? LOGIN_ENG : LOGIN_HIN}
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', alignSelf: 'center'}}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 30,
            fontSize: 20,
            fontWeight: '600',
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
          }}>
          {LANGUAGE.data == 'ENGLISH' ? NEW_ACCOUNT_ENG : NEW_ACCOUNT_HIN}
        </Text>

        <Text
          style={{
            alignSelf: 'center',
            marginTop: 30,
            fontSize: 20,
            fontWeight: '600',
            color: THEME.data == 'LIGHT' ? 'black' : 'white',
          }}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          {' '}
          {LANGUAGE.data == 'ENGLISH' ? SIGNUP_ENG : SIGNUP_HIN}
        </Text>
      </View>
    </View>
  );
};

export default Login;
