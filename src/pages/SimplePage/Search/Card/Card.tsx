import React from 'react';
import { Link } from 'react-router-dom';

export interface CardProps {
  props: {
    id: number;
    address: string;
    name: string;
    company: {
      name: string;
      id: string;
    };
    price: number;
  };
}

function formatPrice(price: number) {
  return price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  });
}

export function Card({ props }: CardProps) {
  return (
    <div className=" rounded-sm flex flex-row border bg-white overflow-hidden hover:shadow-xl transition-all duration-300 ">
      <div className="h-[200px] aspect-square">
        <img
          src="https://playpiso.com.br/wp-content/uploads/2021/09/quadras-esportivas-3-playpiso.png"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex p-5 flex-col justify-between items-between w-[600px]">
        <div>
          <div className="flex flex-col">
            <span className="text-xs text-discreet font-bold">{props.address}</span>
            <span className="text-xl whitespace-nowrap overflow-hidden text-ellipsis">
              {props.name}
            </span>
            <Link to={'/company/' + props.company.id}>
              <span className="text-sm text-green-800">{props.company.name}</span>
            </Link>
          </div>

          <div className="mt-3"></div>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex-center flex-row  gap-1">
            <span className="text-sm font-light">R$</span>
            <span className="bold text-xl">{formatPrice(props.price)}</span>
          </div>
          <Link
            to={'/allocate/' + props.id}
            className="px-5 py-2 text-green-600 border rounded-sm border-green-500 hover:bg-green-500 hover:text-white"
          >
            Alugar
          </Link>
        </div>
      </div>
    </div>
  );
}
