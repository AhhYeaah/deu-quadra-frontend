import React from 'react';
import { useModal } from '../../hooks/Modal';

export function Modal() {
  const { isOpen, title, message, closeModal } = useModal();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50"></div> {/* Black backdrop */}
          <div className="bg-white p-4 rounded-md shadow-md relative z-10 flex flex-col ">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p>{message}</p>
            <button
              onClick={closeModal}
              className=" bg-blue-500 mx-auto text-white p-2 mt-2 rounded-md"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
