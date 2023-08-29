import React, { useState } from 'react';
import { GoogleLogin, AppleLogin, Auth } from '../../../NamedExports';

export const MultiAccess = () => {
  const [isAuthVisible, setIsAuthVisible] = useState(false);

  return (
    <>
    <div className='flex flex-col justify-between'>

      <div className='w-96 leading-10 mb-11'>
        <span className='text-6xl font-bold'>Şu anda olup bitenler</span>
      </div>
      <div className='mb-7'> 
        <span className='text-2xl font-bold'>Hemen katıl.</span>
      </div>

      {/* Kayıt ve giriş işlemleri */}
      <div className='w-60'>
        <div>
          <div className='mb-2'>
            <GoogleLogin /> 
          </div>
          <div className='mb-1'> 
            <AppleLogin />
          </div>
          <div className='flex items-center mb-2'>
            <div className='bg-gray-extraLight h-px w-2/5'/>
            <span className='text-xs m-auto pb-px'>veya</span>
            <div className='bg-gray-extraLight h-px w-2/5'/>
          </div>
          <div className='mb-1'>
            <button 
            className='h-8 w-full rounded-full flex items-center justify-center bg-primary-base hover:bg-primary-dark'
            onClick={() => setIsAuthVisible(!isAuthVisible)}
            >
              <a className='text-white text-sm font-semibold'>Hesap oluştur</a> 
            </button>
          </div>
          <div style={{fontSize: "9px"}} className='mb-14'>
            By signing up, you agree to the 
            <a href="#" className='text-primary-base'> Terms of Service</a> and 
            <a href="#" className='text-primary-base'> Privacy Policy</a>, including
            <a href="#" className='text-primary-base'> Cookie Use.</a> 
          </div>
        </div>
        <div>
          <div className='mb-3'>
            <span className='font-semibold'>Zaten bir hesabın var mı?</span>
          </div>
          <div>
            <button className='w-full border h-8 rounded-full flex items-center justify-center hover:bg-primary-lowLight'
            onClick={() => setIsAuthVisible(!isAuthVisible)}>
              <span className='text-primary-base font-semibold text-sm'>Giriş Yap</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tüm sayfayı kaplayan Signup bileşeni */}
      {isAuthVisible && (
        <Auth setIsAuthVisible={setIsAuthVisible}/>
      )}

    </div>
    </>
  )
}
