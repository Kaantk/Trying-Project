import React from 'react';
import { Icon, Footer } from '../NamedExports';
import { MultiAccess } from '../components/LoginCenter/MultiAccess/MultiAccess';

export const LoginCenter = () => {
  return (
    <>
        <div className='h-[calc(100vh-48px)] flex items-center justify-center'>
            <main className='flex items-center w-full'>
            <div style={{minWidth: "55%"}} className='flex items-center justify-center'>
                <Icon name='twitterLogo' size={330}/>
            </div>
            <div className='flex-1 p-8'>
                <MultiAccess/>
            </div>
            </main>
        </div>
        <footer> 
            <Footer />
        </footer>
    </>
  )
}
