import React, { useState } from 'react';
import { SimplePage } from '../SimplePage';
import { Login } from './Actions/Login';

enum Actions {
  LOGIN,
  REGISTER,
}

export function LoginPage() {
  const [action, setAction] = useState();

  return (
    <SimplePage>
      <div className="flex-center bg-green-300">
        <Login></Login>
      </div>
    </SimplePage>
  );
}
