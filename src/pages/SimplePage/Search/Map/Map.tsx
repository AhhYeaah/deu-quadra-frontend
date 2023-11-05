import React, { useEffect, useState } from 'react'
import 'leaflet/dist/leaflet.css';
import { Circle, MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { CardProps } from '../Card/Card';

export interface MapProps {
    lat: number,
    lon: number
    distance: number
    courts: CardProps["props"][]
}

export function Map(props: MapProps) {
    const map = new Set();
    return (
            <MapContainer center={[props.lat, props.lon]} zoom={9} scrollWheelZoom={false} style={{height: "40vh"}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {props.courts.map((court)=>{
                    //filter duplicated companys
                    const before = map.size
                    map.add(court.Empresa.idEmpresa)
                    const after = map.size

                    if(before === after){
                        return null;
                    }
                    return (
                        <Marker position={[court.Empresa.lat, court.Empresa.lon]} key={court.Empresa.idEmpresa}>
                            <Popup>
                            <span>Empresa: {court.Empresa.nome} </span>
                            </Popup>
                        </Marker>
                    )
                })}
                <Circle center={[props.lat, props.lon]} weight={2} color={'green'} fillColor={'red'} fillOpacity={0.1} radius={props.distance * 1000} zoom={60}></Circle>
            </MapContainer>
    )
}