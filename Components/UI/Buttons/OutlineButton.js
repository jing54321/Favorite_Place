import React from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import { Colors } from '../../../Constants/styles';
import { Ionicons } from '@expo/vector-icons';
const OutlineButton = ({ onPress, icon, title, color, size }) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, pressed && styles.pressed, { borderColor: color }]}>
      <Ionicons name={icon} color={color} size={size} />
      <Text style={[styles.text, { color: color }]}>{title}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 6,
    gap: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    fontSize: 16,
  },
});
