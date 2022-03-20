import React from 'react'
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import styled from 'styled-components'

const Container = styled.div`
    background-color: black;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 70vw;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const containerStyle = {
  width: '70vw',
  height: '100vh'
};

const center = {
  lat: 41.008240,
  lng: 28.978359
};

export default function VehicleLocationsMap() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDB1rSYxqAvDggm56H-pttujodr6g1OiYw"
  })

  return isLoaded ? (
      <Container>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Marker position={{ lat: 41.038284, lng: 28.970329 }} />
          <Marker position={{ lat: 41.114071, lng: 29.021271 }} />
          <Marker position={{ lat: 41.018944, lng: 29.057631 }} />
        </GoogleMap>
      </Container>
    ) : <></>
}

//export default React.memo(MyComponent)