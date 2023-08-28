import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { login, logout } from '../slice/Auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Hata kodlarına göre mesaj veren yardımcı fonksiyon
const getErrorMessageByCode = (errorCode) => { 
    switch (errorCode) {
        case "auth/invalid-email":
            return 'Geçersiz e-posta adresi';
        case "auth/email-already-in-use":
            return 'Bu e-posta adresi zaten kullanılıyor';
        default:
            return 'Bilinmeyen bir hata oluştu';
    }
}

// Kullanıcının giriş çıkış işlemlerini takip et
export const handleonAuthStateChanged = (dispatch) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login(user)); // Redux store'a kullanıcı bilgisini güncelle
      } else {
        dispatch(logout()); // Redux store'a kullanıcı bilgisini çıkış yap ve güncelle
      }
    });
  
    return unsubscribe; // Unsubscribe fonksiyonunu döndür
  }

// Kullanıcı kayıt işlemleri 
export const registerUser = async (values, dispatch, navigate) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredential.user; // Kullanıcı bilgisini 
        dispatch(login(user));
        navigate('/home');
    } catch (error) {
        const errorMessage = getErrorMessageByCode(error.code);
        toast.error(errorMessage);
    }
}

// Kullanıcı giriş işlemleri
export const signUpUser = async (values, dispatch, navigate) => {
    try {
        const userCredintial = await signInWithEmailAndPassword(auth, values.email, values.password);
        const user = userCredintial.user;
        dispatch(login(user));
        navigate('/home');
    } catch (error) {
        const errorMessage = getErrorMessageByCode(error.code);
        toast.error(errorMessage);
    }
}
