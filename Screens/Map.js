import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
const Map = () => {
  const region = {
    latitude: 43.526646, //center
    longitude: -79.891205, //center
    latitudeDelta: 0.0922, //width and height
    longitudeDelta: 0.0421,
  };
  return (
    <View style={styles.container}>
      <MapView initialRegion={region} style={styles.map} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default Map;
