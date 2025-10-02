/* eslint-disable @typescript-eslint/no-require-imports */
"use client";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "leaflet/dist/images/marker-shadow.png";
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
// delete L.Icon.Default.prototype._getIconUrl;
const icon = L.icon({ iconUrl: "/markers/marker-icon.png" });

// L.Icon.Default.mergeOptions({
//     // eslint-disable-next-line @typescript-eslint/no-require-imports
//     iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//     iconUrl: require('leaflet/dist/images/marker-icon.png'),
//     // eslint-disable-next-line @typescript-eslint/no-require-imports
//     shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });
const Map = () => {
  return (
    <div className="w-[90vw] mx-auto overflow-hidden mb-8">
      <MapContainer
        className="w-screen h-100"
        center={[25.652817, -100.361108]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker icon={icon} position={[25.652817, -100.361108]}>
          <Popup>
            Río Rosas Sur 330 1er piso, <br />
            Del Valle, C. P. 66220, <br />
            San Pedro Garza Garcia, N.L., <br />
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
