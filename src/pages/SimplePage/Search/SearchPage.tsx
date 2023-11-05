import React, { useEffect, useState } from 'react';
import { SimplePage } from '../SimplePage';
import { Card } from './Card/Card';
import Navbar from '../../../components/Navbar/Navbar';
import TextInput from '../../../components/TextInput';
import { useApi } from '../../../api/api';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SearchPage.css'
import { Spinner } from '../../../components/Spinner';
import { Map } from './Map/Map';


export function SearchPage() {
  const { getCourts } = useApi();
  const [city, setCity] = useState(undefined);
  const [courts, setCourts] = useState([]);
  const [distance, setDistance] = useState(10); // Estado para controlar a distância selecionada
  const [isLoading, setLoading] = useState(true);
  const [position, setPosition] = useState({
    lat: -23.6283, lon: -46.6409 
  })

  useEffect(() => {
    setLoading(true)

    axios.get('http://ip-api.com/json/').then(({ data: { lat, lon, city } }: any) => {
      getCourts(lat, lon, distance).then(({ data }) => { // Usar a distância selecionada
        setPosition({lat,lon});
        setCourts(data);
        setCity(city);
        setLoading(false)
      });
    })
  }, [distance])

  const handleDistanceChange = (newDistance: number) => {
    setDistance(newDistance); // Atualizar o estado da distância
  };

  const distanceOptions = [1, 3, 5, 8, 10];

  return (
    <SimplePage>
      <div className='backdropable-page'>
        {isLoading && <div className='backdrop'><Spinner className='w-16 h-16 text-transparent' /></div>}

        <Navbar />
        <div>
          {!isLoading && <Map {...position} courts={courts} distance={distance}></Map>}

        </div>

        <div className="p-10 grid grid-cols-3 gap-10 bg-white">
          <form className="col-span-1 bg-green-200 rounded-md border border-green-400 p-10">
            <TextInput placeholder="Localização" />
            {distanceOptions.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name="distance"
                    value={option}
                    checked={distance === option}
                    onChange={() => handleDistanceChange(option)}
                  />
                  {' '}{option} km
                </label>
              </div>
            ))}
            {/* Repita o processo para outras distâncias, se necessário */}
          </form>
          <div className="flex flex-col gap-5 col-span-2">
            <div className="flex flex-row gap-1 items-center">
              <span className="text-2xl">{courts.length}</span>
              <span className="text-xl font-light">
                Quadras para alugar a {distance} km ou menos de {city}.
              </span>
            </div>
            {courts.map((data, index) => {
              return <Card key={index} props={data}></Card>;
            })}
          </div>
        </div>
      </div>
    </SimplePage>
  );
}
