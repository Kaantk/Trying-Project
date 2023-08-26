import React from 'react';
import { SignUpForm } from '../components/SignUpForm';

export const Auth = () => {
  return (
    <div className='h-full flex items-center justify-center'>
      {/* Arka plan etkisi */}
      <div className='absolute w-full h-full bg-black opacity-40'>dasd</div>

      {/* Kayıt formu */}
      <div className='relative'>
        <SignUpForm />
      </div>
    </div>
  );
};