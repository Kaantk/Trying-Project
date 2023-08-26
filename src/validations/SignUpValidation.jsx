import * as Yup from 'yup';

export const SignUpValidation = Yup.object().shape({
    email: Yup.string().email('Geçerli bir e-posta adresi girin.').required('E-posta adresi boş bırakılamaz.'),
    password: Yup.string().min(6, 'Parola en az 6 karakter olmalıdır.').required('Parola boş bırakılamaz.'),
});
