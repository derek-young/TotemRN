import React from 'react';
import {
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';
import mapStyles from './mapStyles';

const MapViewer = () => (
  <View style ={mapStyles.container}>
    <MapView
      provider={MapView.PROVIDER_GOOGLE}
      style={mapStyles.map}
      initialRegion={{
        latitude: 37.76757,
        longitude: -122.49427,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}
    >
    </MapView>
  </View>
);

export default MapViewer;
