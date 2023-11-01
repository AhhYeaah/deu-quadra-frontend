import React from 'react';
import { SimplePage } from '../SimplePage';
import { ChooseDateStep } from './Steps/ChooseDateStep';

export function AllocatePage() {
  return (
    <SimplePage>
      <div className="flex-center bg-green-300">
        <ChooseDateStep></ChooseDateStep>
      </div>
    </SimplePage>
  );
}
