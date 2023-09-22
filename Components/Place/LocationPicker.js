import { useState } from 'react';
import { Alert, Text, View, TextInput, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutlineButton from '../UI/Buttons/OutlineButton';
import { Colors } from '../../Constants/styles';
import { getCurrentPositionAsync, useForegroundPermissions, PermissionStatus } from 'expo-location';
import { getMapPreview } from '../../util/location';

// need to get permission to use getCurrentPositionAsync
const LocationPicker = () => {
  const [pickedLocation, setPickedLocation] = useState();
  const [locationPermissionInfo, requestPermission] = useForegroundPermissions();
  const navigation = useNavigation();

  const verifyPermissions = async () => {
    if (locationPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const res = await requestPermission();
      return res.granted;
    }
    if (locationPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert('Insufficient Permissions', 'You need to grant location permissions to use this app');
    }

    return true;
  };

  const getLocationHandler = async () => {
    let hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    let location = await getCurrentPositionAsync();

    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  const pickOnMapHandler = () => {
    navigation.navigate('Map');
  };

  let locationPreview = <Text>No location picked yet.</Text>;

  if (pickedLocation) {
    locationPreview = <Image style={styles.image} source={{ uri: getMapPreview(pickedLocation.lat, pickedLocation.lng) }} />;
  }

  return (
    <View>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View style={styles.actions}>
        <OutlineButton title="Locate User" size={24} icon="location" color={Colors.primary500} onPress={getLocationHandler} />
        <OutlineButton title="Pick on Map" size={24} icon="map" color={Colors.primary500} onPress={pickOnMapHandler} />
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: Colors.primary100,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
});
