import React from 'react';
import { SignUpForm } from './SignUpForm';

export const Auth = ({ setIsAuthVisible }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center'>
      {/* Arka plan etkisi */}
      <div className='absolute w-full h-full bg-black opacity-40'></div>

      {/* Kayıt formu */}
      <div className='relative'>
        <div className='bg-white w-125 pt-5 pb-10 rounded shadow'>
          <SignUpForm setIsAuthVisible={setIsAuthVisible} />
        </div>
      </div>
    </div>
  );
};
