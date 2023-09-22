import React from 'react';
import { Text, FlatList, StyleSheet, View } from 'react-native';
import { Colors } from '../../Constants/styles';
import PlaceItem from './PlaceItem';

const PlaceList = ({ places }) => {
  //   const places = [{ uri: '/', title: 'test', address: '119', id: 1 }];
  if (!places || places.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }

  return <FlatList data={places} keyExtractor={item => item.id} renderItem={dataItem => <PlaceItem place={dataItem.item} />}></FlatList>;
};

export default PlaceList;

const styles = StyleSheet.create({
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fallbackText: {
    color: '#fff',
    fontSize: 16,
  },
});
