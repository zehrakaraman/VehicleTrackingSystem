import React from 'react'
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';

const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: 41.008240,
  lng: 28.978359
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCydSwAy2RS-GYHWMLLvkOcS9dI1uDSyYE"
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

export default React.memo(MyComponent)
