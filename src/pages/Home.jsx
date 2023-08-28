import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { logout } from '../store/slice/Auth';
import { handleonAuthStateChanged } from '../store/actions/Auth'; // Eğer gerekliyse yolunu güncelleyin
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Navbar } from '../components/Home/Navbar';
import { AuthenticatedContent } from '../components/Home/AuthenticatedContent';
import { UnauthenticatedContent } from '../components/Home/UnauthenticatedContent';

export const Home = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = handleonAuthStateChanged(dispatch);

    if (user) {
      toast.success(`Hoş geldiniz, ${user.displayName || "Kullanıcı"}!`);
    }

    return () => unsubscribe(); 
  }, [dispatch]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(logout());
    } catch (error) {
      console.error("Çıkış yaparken bir hata oluştu:", error);
    }
  }

  console.log(user)

  return (
    <div className='h-screen'>
      <Navbar />
      {user ? 
      <AuthenticatedContent /> : 
      <UnauthenticatedContent/>}
    </div>
  )
}
