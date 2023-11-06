import React, { useEffect, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { CardProps } from '../Card/Card';

export interface MapProps {
  lat: number;
  lon: number;
  distance: number;
  courts: CardProps['props'][];
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1); // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
}

export function Map(props: MapProps) {
  const map = new Set();
  return (
    <MapContainer
      center={[props.lat, props.lon]}
      zoom={9}
      scrollWheelZoom={false}
      style={{ height: '40vh' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {props.courts.map((court) => {
        //filter duplicated companys
        const before = map.size;
        map.add(court.Empresa.idEmpresa);
        const after = map.size;

        if (before === after) {
          return null;
        }
        return (
          <Marker
            position={[court.Empresa.lat, court.Empresa.lon]}
            key={court.Empresa.idEmpresa}
          >
            <Popup>
              <span>
                Empresa: {court.Empresa.nome}
                <br />
                Distancia:{' '}
                {getDistanceFromLatLonInKm(
                  props.lat,
                  props.lon,
                  court.Empresa.lat,
                  court.Empresa.lon
                )}{' '}
                Km
              </span>
            </Popup>
          </Marker>
        );
      })}
      <Circle
        center={[props.lat, props.lon]}
        weight={2}
        color={'green'}
        fillColor={'red'}
        fillOpacity={0.1}
        radius={props.distance * 1000}
        zoom={60}
      ></Circle>
    </MapContainer>
  );
}
