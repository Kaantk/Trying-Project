import React from 'react'
import { useSelector } from 'react-redux';
import { signOut, auth, logout, useDispatch, Icon } from '../../NamedExports';
import { updateUserProfile } from '../../store/actions/Auth';

export const Navbar = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Çıkış yaparken bir hata oluştu:", error);
    }
  }

  const handleUpdateUser = () => {
    updateUserProfile('https://www.instyle.com/thmb/WNAoQTDxi7u4iDZyUeNnJ09I1OY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Margot-Robbie-Lead-3f27c29b3c6542358f76d5602d354c25.jpg');
  }

  console.log(user)

  return (
    <div className='w-full h-16 bg-primary-base flex justify-center'>
        <div className='w-300 h-full flex items-center justify-between'>
            <div>
                <h1 className='text-white font-bold text-4xl'>Firebase</h1>
            </div>
            <nav className='flex items-center'>
                <button>
                    <Icon name='accountCircle' />
                </button>
                <button
                className='text-white text-sm font-semibold ml-1'
                onClick={handleLogout}>
                    Çıkış yap
                </button>
                <button
                className='text-white text-sm font-semibold ml-1'
                onClick={handleUpdateUser}>
                    Güncelle
                </button>
            </nav>  
        </div>
    </div>
  )
}
