import React, { ChangeEvent } from 'react';

interface TextInputProps {
  label: string;
  type: string;
  id: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

function TextInput({ label, type, id, value, onChange, placeholder }: TextInputProps) {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={id}>
        {label}
      </label>
      <input
        className="w-full p-2 border rounded-md"
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default TextInput;
