import { ReactNode, useState } from 'react';
import { ModalContext } from '@src/contexts/Modal';

interface ModalProviderProps {
  children: ReactNode;
}

export function ModalProvider({ children }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const openModal = (newTitle: string, newMessage: string) => {
    setTitle(newTitle);
    setMessage(newMessage);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isOpen, title, message, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
