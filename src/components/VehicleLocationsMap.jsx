import React, { useEffect, useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader} from '@react-google-maps/api';
import styled from 'styled-components'
import db from "../Firebase.js"
import VehicleLocation from '../models/VehicleLocation';

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
  lat: 59.3293,
  lng: 18.0686
};

export default function VehicleLocationsMap({userID}) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDB1rSYxqAvDggm56H-pttujodr6g1OiYw"
  })

  useEffect(() => {
    db.collection("vehicle_locations")
        .where("customerID", "==", 1)
        .onSnapshot(onVehicleLocations);
  }, []);


  const [vehicleLocations, setVehicleLocations] = useState([]);

  function onVehicleLocations(querySnapshot) {
    console.log("onVehicleLocations()");
    const vehicleLocationDocs = querySnapshot.docs;
    const vehicleLocations = []
    for (const vehicleLocationDoc of vehicleLocationDocs) {
      const vehicleLocation =
          VehicleLocation.fromQueryDocSnapshot(vehicleLocationDoc);
      vehicleLocations.push(vehicleLocation);
    }

    console.log("Setting vehicle locations...");
    console.log("vehicleLocations.length: ", vehicleLocations.length);
    setVehicleLocations(vehicleLocations);
  }

  function createMarkersFromVehicleLocations() {
    console.log("createMarkersFromVehicleLocations()");
    return vehicleLocations.map(
      (vehicleLocation) => {
        return <Marker
          key={vehicleLocation.id}
          position={{lat: vehicleLocation.lat, lng: vehicleLocation.lng}}
        />
      }
    );
  }

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
          {createMarkersFromVehicleLocations()}
        </GoogleMap>
      </Container>
    ) : <></>
}

