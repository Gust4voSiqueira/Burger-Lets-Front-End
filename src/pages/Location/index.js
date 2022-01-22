import React from 'react'
import Header from '../../components/Header/Header'
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import './leaflet.css'
import { iconPerson } from './icon'

function Location() {
    var location = {
        latitude: -16.14777491378204,
        longitude: -47.935496451857325
    }
    return (
        <>
            <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
            <script src="https://unpkg.com/leaflet@1.2.0/dist/leaflet.js"></script>
            < Header />
            <MapContainer className='map-location' center={[-16.1544481, -47.9318876]} zoom={15.25}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker
                    position={[location.latitude, location.longitude]}
                    icon={iconPerson}
                    style={{ width: "20px" }}
                >
                </Marker>
            </MapContainer>
        </>
    );

}

export default Location