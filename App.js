import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllPlaces from './Screens/AllPlaces';
import AddPlace from './Screens/AddPlace';
import Map from './Screens/Map';
import PlaceDetail from './Screens/PlaceDetail';
import { Colors } from './Constants/styles';
import IconButton from './Components/UI/Buttons/IconButton';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="AllPlaces"
          screenOptions={({ navigation, route }) => ({
            headerStyle: { backgroundColor: Colors.primary500 },
            headerTintColor: Colors.gray700,
            headerTitleAlign: 'center',
            contentStyle: { backgroundColor: Colors.gray700 },
            headerBackTitleVisible: false,
          })}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              title: 'Your Favorite Places',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon={'add'}
                  color={tintColor}
                  size={32}
                  onPress={() => {
                    navigation.navigate('AddPlace');
                  }}
                />
              ),
            })}
          />

          <Stack.Screen
            name="AddPlace"
            component={AddPlace}
            options={{
              title: 'Add a new Place',
            }}
          />
          <Stack.Screen
            name="Map"
            component={Map}
            options={{
              title: 'Map',
            }}
          />
          <Stack.Screen
            name="PlaceDetail"
            component={PlaceDetail}
            options={{
              title: 'Detail',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
