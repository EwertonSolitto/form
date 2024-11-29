import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { styles } from './SignInStyles';
import CButton from '../../components/cbutton/CButton';
import { useNavigation } from '@react-navigation/native';
import usersList from '../../script/usersList';
import User from '../../script/User';

export default function SignIn() {
  const navigation = useNavigation()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function signInHandle() {
    const user: User | undefined = usersList.find((user) => user.username === username) || undefined
    
    if(user) {
      if(user.CheckPassword(password)) {
        navigation.navigate('Logged')
      } else console.log('password invalid')
    } else console.log('username invalid')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Username</Text>
        <TextInput style={styles.input} value={username} onChangeText={text => setUsername(text)} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Password</Text>
        <TextInput style={styles.input} value={password} onChangeText={text => setPassword(text)} secureTextEntry={true}/>
      </View>
      <CButton text='Sign in' handler={() => signInHandle()}/>
    </View>
  );
}