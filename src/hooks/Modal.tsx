import { useContext } from 'react';
import { ModalContext, ModalContextType } from '../contexts/Modal';

export function useModal(): ModalContextType {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}
