import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from '../Components/UI/Others/Container';
import { Colors } from '../Constants/styles';
import PlaceList from '../Components/Place/PlaceList';
const AllPlaces = () => {
  return (
    <Container>
      <PlaceList />
    </Container>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.primary100,
  },
});
export default AllPlaces;
