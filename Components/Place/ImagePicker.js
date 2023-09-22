import { useState } from 'react';
import { Alert, Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from 'expo-image-picker';
import { Colors } from '../../Constants/styles';
import OutlineButton from '../UI/Buttons/OutlineButton';

const ImagePicker = () => {
  const [cameraPermissionInfo, requestPermissions] = useCameraPermissions();
  const [pickedImage, setPickedImage] = useState('');

  const verifyPermissions = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const res = await requestPermissions();

      return res.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions', 'You need to grant camera permissions');
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    let hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    let image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    setPickedImage(image.assets[0].uri);
  };

  let imagePreview = <Text>No image taken yet</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} style={styles.image} />;
  }
  return (
    <View>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <OutlineButton title="Take Image" onPress={takeImageHandler} size={24} color={Colors.primary500} icon="camera" />
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    height: 200,
    width: '100%',
    marginBottom: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: 4,
  },
});
