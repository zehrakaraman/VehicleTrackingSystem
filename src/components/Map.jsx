import React from 'react'
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import db from '../Firebase.js'
import GridTable from './GridTable'

const containerStyle = {
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: 41.008240,
  lng: 28.978359
};

const Fetchdata = ()=>{
  db.collection("vehicleInfo").get().then((querySnapshot) => {
      querySnapshot.forEach(element => {
          var data = element.data();
          console.log(data)
      });
  })
}

export default function MyComponent() {

  Fetchdata();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDB1rSYxqAvDggm56H-pttujodr6g1OiYw"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker position={{ lat: 41.038284, lng: 28.970329 }} />
        <Marker position={{ lat: 41.114071, lng: 29.021271 }} />
        <Marker position={{ lat: 41.018944, lng: 29.057631 }} />
      </GoogleMap>
  ) : <></>
}
