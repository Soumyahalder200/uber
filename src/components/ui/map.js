"use client";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 12.9716,
  lng: 77.5946
};

export default function Map() {
  return (
    <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        {/* Markers here */}
      </GoogleMap>
    </LoadScript>
  );
}
