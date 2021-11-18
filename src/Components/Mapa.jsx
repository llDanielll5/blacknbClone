import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import empresas from './empresas.js';

export class MapContainer extends Component {

  constructor(props) {
    super(props);

    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
    // }
    // //Get latitude and longitude;
    // function successFunction(position) {
    //   var lat = position.coords.latitude;
    //   var lng = position.coords.longitude;

    // }
    // function errorFunction() {
    //   alert("Geocoder failed");
    // }

    this.state = {
      
      stores: [

        { latitude: empresas[0].latitude, longitude: empresas[0].longitude, local: 'Brasil' }
      ]
    }
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  render() {
    return (

      <Map
        google={this.props.google}
        zoom={7}
        initialCenter={{ lat: empresas[0].latitude, lng: empresas[0].longitude }}
      >

        {this.displayMarkers()}
      </Map>

    );
  }
}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyCnLtwqg5KF80rB6kCQM0JeyBt7XY9C31M',
  }
  ))(MapContainer)
