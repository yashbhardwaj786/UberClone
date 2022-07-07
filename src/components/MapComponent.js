import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {mapStyle} from '../global/mapStyle';
import MapView, {Marker} from 'react-native-maps';


export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={mapStyle}
          >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: '100%',
    width: '100%',
  }
});
