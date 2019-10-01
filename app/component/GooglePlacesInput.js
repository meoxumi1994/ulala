import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const KEY = 'AIzaSyAZZVi6k2GkSdU1fRBs5LyqKzlc3phTtvY'
const homePlace = { description: 'Home', geometry: { location: { lat: 48.8152937, lng: 2.4597668 } }};
const workPlace = { description: 'Work', geometry: { location: { lat: 48.8496818, lng: 2.2940881 } }};

export default class GooglePlacesInput extends Component<Props> {
    constructor(props) {
        super(props);
    }
    render() {
        const { onSelectPosition } = this.props
        return (
          <GooglePlacesAutocomplete
            placeholder='Search'
            minLength={2} // minimum length of text to search
            autoFocus={false}
            returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            keyboardAppearance={'light'} // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
            listViewDisplayed='auto'    // true/false/undefined
            fetchDetails={true}
            renderDescription={row => row.description} // custom description render
            onPress={(data, details = null) => { // 'details' is provided when fetchDetails = true
              console.log(details.formatted_address)
              console.log(details.geometry.location.lat);
              console.log(details.geometry.location.lng);
              console.log(JSON.stringify(details))
              onSelectPosition({
                  name: details.formatted_address,
                  lat: details.geometry.location.lat,
                  lng: details.geometry.location.lng,
                  place_id: details.place_id,
              })
            }}

            getDefaultValue={() => ''}

            query={{
              // available options: https://developers.google.com/places/web-service/autocomplete
              key: KEY,
              language: 'vn', // language of the results
              // types: '(cities)' // default: 'geocode'
            }}

            styles={{
              textInputContainer: {
                width: '100%'
              },
              description: {
                fontWeight: 'bold'
              },
              predefinedPlacesDescription: {
                color: '#1faadb'
              }
            }}

            currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
            currentLocationLabel="Current location"
            nearbyPlacesAPI='GooglePlacesSearch' // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
            GoogleReverseGeocodingQuery={{
              // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
            }}
            GooglePlacesSearchQuery={{
              // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
              rankby: 'distance',
              type: 'cafe'
            }}

            GooglePlacesDetailsQuery={{
              // available options for GooglePlacesDetails API : https://developers.google.com/places/web-service/details
              fields: 'formatted_address',
            }}

            // filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
            // predefinedPlaces={[homePlace, workPlace]}

            debounce={200} // debounce the requests in ms. Set to 0 to remove debounce. By default 0ms.
          />
        );
    }
}
