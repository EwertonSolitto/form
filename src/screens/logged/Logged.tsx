import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './LoggedStyles';
import CButton from '../../components/cbutton/CButton';
import { useNavigation } from '@react-navigation/native';

export default function Logged() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Logged 😃</Text>
      <CButton text='Go back' handler={() => {navigation.goBack()}}/>
    </View>
  );
}