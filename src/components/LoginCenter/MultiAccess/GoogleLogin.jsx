import React from 'react'
import { Icon } from '../../../NamedExports';

export const GoogleLogin = () => {
  return (
    <>
      <button
        className='border flex items-center justify-center rounded-full w-60 h-8 hover:bg-gray-extraLight'
        onClick={() => login()}>
        <Icon name="googleLogo" size={16}/> 
        <span className='text-xs font-bold ml-2'>Google ile kaydol</span>
      </button>
    </>
  )
}
