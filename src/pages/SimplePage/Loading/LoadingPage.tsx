import React from 'react';
import { SimplePage } from '../SimplePage';
import { Spinner } from '../../../components/Spinner';

export function LoadingPage() {
  return (
    <SimplePage>
      <div className="flex-center">
        <Spinner className="w-16 h-16"></Spinner>
      </div>
    </SimplePage>
  );
}
