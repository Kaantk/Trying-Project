import React, { useEffect } from 'react';
import {
  useSelector,
  useDispatch,
  handleonAuthStateChanged,
  toast,
  Navbar,
  AuthenticatedContent,
  UnauthenticatedContent,
} from '../NamedExports';
import 'react-toastify/dist/ReactToastify.css';

export const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = handleonAuthStateChanged(dispatch);
    
    if (user) {
      toast.success(`Hoş geldiniz, ${user.displayName || user.email}`);
    }
    
    return () => unsubscribe(); 
  }, [dispatch]);
  
  return (
    <div className='h-screen'>
      <Navbar />
      {user ? 
      <AuthenticatedContent /> : 
      <UnauthenticatedContent/>}
    </div>
  )
}
