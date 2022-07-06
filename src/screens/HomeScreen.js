import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  Image,
  FlatList,
  Permission,
  PermissionsAndroid,
  Platform,
  Alert,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {colors, parameters} from '../global/styles';
import {Icon} from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {filterData, carsAround} from '../global/data';
import MapView, {Marker} from 'react-native-maps';
import {mapStyle} from '../global/mapStyle';
import Geolocation from '@react-native-community/geolocation';

const SCREEN_WIDTH = Dimensions.get('window').width;

const HomeScreen = () => {
  const [latlong, setLatLong] = useState({});
  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
      // console.log(latlng)
      [];
  });

  const checkPermission = async () => {
    if (Platform.OS == 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getLocation();
        } else {
         askPermission();
        }
      } catch (err) {
        console.log('catch');
      }
    }
  };

  const askPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,);
      PermissionsAndroid.RESULTS.GRANTED = granted;
      getLocation();
  };

  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(data => {
        setLatLong({lattitude: data.coords.latitude, longitude: data.coords.longitude});

      })
    }catch(err){
        console.warn("Error")
    }
  };

  return (
    <View styles={styles.container}>
      <View style={styles.header}>
        <View style={styles.icon1}>
          <Icon
            type="material-community"
            name="menu"
            color={colors.white}
            size={40}
          />
        </View>
      </View>

      <ScrollView bounces={false} nestedScrollEnabled={true}>
        <View style={styles.home}>
          <Text style={styles.text1}>Destress your commute</Text>
          <View style={styles.view1}>
            <View style={styles.view8}>
              <Text style={styles.text2}>
                {' '}
                Read a book. Take a nap. Stare out the window.
              </Text>
              <View style={styles.button1}>
                <Text style={styles.button1Text}> Ride With Uber</Text>
              </View>
            </View>
            <View>
              <Image
                style={styles.image1}
                source={require('../../assets/uberCar.png')}
              />
            </View>
          </View>
        </View>
        <View>
          <ScrollView horizontal={true} style={{width: '100%'}}>
            <FlatList
              numColumns={4}
              showHorizontalScrollIndicator={false}
              data={filterData}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <View style={styles.card}>
                  <View style={styles.view2}>
                    <Image style={styles.image2} source={item.image} />
                  </View>
                  <View>
                    <Text style={styles.title}>{item.name}</Text>
                  </View>
                </View>
              )}
            />
          </ScrollView>
        </View>

        <View style={styles.view3}>
          <Text style={styles.text3}> Where to? </Text>

          <View style={styles.view4}>
            <Icon
              type="material-community"
              name="clock-time-four"
              color={colors.grey1}
              size={26}
            />
            <Text style={{marginLeft: 5}}> Now</Text>

            <Icon
              type="material-community"
              name="chevron-down"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.view5}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.blacck}
                size={22}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: colors.black}}>
                {' '}
                Exam Warriors{' '}
              </Text>
              <Text style={{color: colors.grey3}}>
                {' '}
                Madhav Vihar, Kotputli, Rajasthan{' '}
              </Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              vron-right
              color={colors.grey}
              size={26}
            />
          </View>
        </View>

        <View style={styles.view5copy}>
          <View style={styles.view6}>
            <View style={styles.view7}>
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.blacck}
                size={22}
              />
            </View>
            <View>
              <Text style={{fontSize: 18, color: colors.black}}>
                {' '}
                Narayan Singh Circle{' '}
              </Text>
              <Text style={{color: colors.grey3, flex: 1}}>
                {' '}
                Rambagh, Jaipur, Rajasthan{' '}
              </Text>
            </View>
          </View>
          <View>
            <Icon
              type="material-community"
              name="chevron-right"
              vron-right
              color={colors.grey}
              size={26}
            />
          </View>
        </View>
        <Text style={styles.text4}>Around you!</Text>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 80,
          }}>
          <MapView
            ref={_map}
            provider={MapView.PROVIDER_GOOGLE}
            style={styles.map}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            initialRegion={{
              ...carsAround[0],
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}>
            {carsAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require('../../assets/carMarker.png')}
                  style={styles.carsAround}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
        </View>
        <View style={styles.emptyView}></View>
      </ScrollView>
      <StatusBar style="light" backgroundColor="#2058c0" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingBottom: 30,
    paddingTop: parameters.statusBarHeight,
  },
  header: {
    backgroundColor: colors.blue,
    height: parameters.headerHeight,
    alignItems: 'flex-start',
  },

  image1: {
    height: 100,
    width: 100,
  },

  image2: {height: 60, width: 60, borderRadius: 30},

  home: {
    backgroundColor: colors.blue,
    paddingLeft: 20,
  },

  text1: {
    color: colors.white,
    fontSize: 21,
    paddingBottom: 20,
    paddingTop: 20,
  },

  text2: {
    color: colors.white,
    fontSize: 16,
  },

  view1: {
    flexDirection: 'row',
    flex: 1,
    paddingTop: 30,
  },

  button1: {
    height: 40,
    width: 150,
    backgroundColor: colors.black,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  button1Text: {
    color: colors.white,
    fontSize: 17,
    marginTop: -2,
  },
  card: {
    alignItems: 'center',
    margin: SCREEN_WIDTH / 22,
  },

  view2: {marginBottom: 5, borderRadius: 15, backgroundColor: colors.grey6},

  title: {
    color: colors.black,
    fontSize: 16,
  },
  view3: {
    flexDirection: 'row',
    marginTop: 5,
    height: 50,
    backgroundColor: colors.grey6,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  text3: {marginLeft: 15, fontSize: 20, color: colors.black},

  view4: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 20,
  },

  view5: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 25,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    borderBottomColor: colors.grey4,
    borderBottomWidth: 1,
    flex: 1,
  },

  view5copy: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 25,
    justifyContent: 'space-between',
    marginHorizontal: 15,
    flex: 1,
  },

  view6: {
    alignItems: 'center',
    flex: 5,
    flexDirection: 'row',
  },
  view7: {
    backgroundColor: colors.grey6,
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },

  map: {
    height: 200,
    marginVertical: 0,
    width: SCREEN_WIDTH * 0.92,
  },

  text4: {fontSize: 20, color: colors.black, marginLeft: 20, marginBottom: 20},

  icon1: {marginLeft: 10, marginTop: 5},

  view8: {flex: 4, marginTop: -25},
  carsAround: {
    width: 28,
    height: 14,
  },

  location: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: colors.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },

  view9: {width: 4, height: 4, borderRadius: 2, backgroundColor: 'white'},
  emptyView: {width: SCREEN_WIDTH, height: 100},
});