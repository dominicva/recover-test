'use client';

import { useState } from 'react';
import type { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export type InputProps = {
  type?: HTMLInputTypeAttribute;
  id: string;
  placeholder?: string;
  className?: string;
  autoComplete?: InputHTMLAttributes<HTMLInputElement>['autoComplete'];
};

export default function Input({
  type = 'text',
  id,
  placeholder,
  className,
  autoComplete,
}: InputProps) {
  const [value, setValue] = useState('');

  return (
    <div className="flex flex-col">
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={`rounded-md border border-gray-300 px-4 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-lighter ${
          className ?? ''
        }`.trim()}
      />
    </div>
  );
}
