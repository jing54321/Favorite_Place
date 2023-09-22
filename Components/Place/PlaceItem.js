import React from 'react';
import { Text, View, Image, Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../Constants/styles';

const PlaceItem = ({ place, onPress }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: '#fff' }}>
      <Image source={{ uri: place.imageUri }} />
      <View>
        <Text>{place.title}</Text>
        <Text>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({});
