'use client'

import { useEffect } from 'react';

export default function Error({ error,reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='flex flex-col justify-center items-center h-96 space-y-4'>
      <h2 className='text-2xl font-bold text-red-600'>Something went wrong!</h2>
      <button onClick={ () => reset() } className='border-red-600 py-2 px-4 border-2 rounded-lg font-md
       font-medium hover:shadow-md hover:shadow-red-600' >
        Try again
      </button>
    </div>
  );
}