import React, { createContext } from 'react';

export interface ModalContextType {
  isOpen: boolean;
  title: string;
  message: string;
  openModal: (title: string, message: string) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
