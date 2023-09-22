import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../../Constants/styles';

const Container = ({ children }) => {
  return <View style={styles.rootContainer}>{children}</View>;
};
const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 0,
    paddingHorizontal: 12,
  },
});
export default Container;
