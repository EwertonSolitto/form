import React from 'react';
import { View } from 'react-native';

import { styles } from './HomeStyles';
import CButton from '../../components/cbutton/CButton';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CButton text='Sign in' handler={() => navigation.navigate('SignIn')} />
      <CButton text='Sign up' handler={() => navigation.navigate('SignUp')} />
    </View>
  );
}