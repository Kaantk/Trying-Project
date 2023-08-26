import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { login } from '../slice/Auth';

export const registerUser = async (values, dispatch) => {
    try {
        const userCredintial = await createUserWithEmailAndPassword(auth, values.email, values.password);
        dispatch(login(userCredintial.user)) 
    } catch (error) {
        console.log(error);
    }
}
