import React, { useEffect, useState } from 'react';
import { SimplePage } from '../SimplePage';
import { Card } from './Card/Card';
import Navbar from '../../../components/Navbar/Navbar';
import TextInput from '../../../components/TextInput';
import { useApi } from '../../../api/api';
import { useParams } from 'react-router-dom';

export function SearchPage() {
  const { getCourts } = useApi();
  const [courts, setCourts] = useState([]);
  const a = useParams();

  console.log(a);

  useEffect(() => {
    getCourts().then(({ data }) => {
      console.log(data);
      setCourts(data);
    });
  }, []);

  return (
    <SimplePage>
      <div className="">
        <Navbar />
        <div className="p-10 grid grid-cols-3 gap-10 bg-white">
          <form className="col-span-1 bg-green-200 rounded-md border border-green-400 p-10">
            <TextInput placeholder="Localização"></TextInput>
          </form>
          <div className="flex flex-col gap-5 col-span-2">
            <div className="flex flex-row gap-1 items-center ">
              <span className="text-2xl">{courts.length}</span>
              <span className="text-xl font-light">
                Quadras para alugar a 10km ou menos do seu endereço.
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
