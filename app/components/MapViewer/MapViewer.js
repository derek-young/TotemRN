import React from 'react';
import {
  Text,
  View
} from 'react-native';
import MapView, { Circle, Overlay } from 'react-native-maps';
import mapStyles from './mapStyles';

const MapViewer = () => (
  <View style ={mapStyles.container}>
    {console.log(Overlay)}
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
      <Overlay
        bounds={[[37.76757, -122.49427], [37.7, -122.4]]}
        image={'https://i.redd.it/u8pjruj8o0ry.jpg'}
      />
    </MapView>
  </View>
);

export default MapViewer;
