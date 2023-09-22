import { StyleSheet, Text, View } from 'react-native';
import Container from '../Components/UI/Others/Container';
import { Colors } from '../Constants/styles';
import PlaceForm from '../Components/Place/PlaceForm';

const AddPlace = ({ navigation }) => {
  return (
    <Container>
      <PlaceForm />
      <Text style={styles.textStyle}></Text>
    </Container>
  );
};
const styles = StyleSheet.create({
  textStyle: {
    color: Colors.accent500,
  },
});
export default AddPlace;
