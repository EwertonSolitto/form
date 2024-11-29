import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './CButtonStyles';

export default function CButton({text, handler}: {text: string, handler: () => void}) {
  return (
    <TouchableOpacity style={styles.container} onPress={handler}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}