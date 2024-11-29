import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './SignUpStyles';
import CButton from '../../components/cbutton/CButton';
import { useNavigation } from '@react-navigation/native';
import usersList from '../../script/usersList';
import User from '../../script/User';

export default function SignUp() {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function createAccount() {
    if(username && password) {
      usersList.push(new User(username, password))

      navigation.navigate("Home")
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={text => setUsername(text)} maxLength={50}/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
      </View>
      <CButton text='Sign up' handler={() => createAccount()}/>
    </View>
  );
}