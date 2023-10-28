import React, { useState } from 'react';
import { SimplePage } from '../SimplePage';

enum Actions {
  LOGIN,
  REGISTER,
}

export function LoginPage() {
  const [action, setAction] = useState();
  return (
    <SimplePage>
      <div></div>
    </SimplePage>
  );
}
