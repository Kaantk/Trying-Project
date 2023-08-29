import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { registerUser, signUpUser } from '../../../store/actions/Auth';
import { Icon, useNavigate, useDispatch, SignUpValidation } from '../../../NamedExports';

export const SignUpForm = ({ setIsAuthVisible }) => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, dispatch, navigate) => {
    if (isSignUp) { // Kayıt olma 
        registerUser(values, dispatch, navigate);
    }
    else { // Giriş yapma
        signUpUser(values, dispatch, navigate);
    }
  }

  const handleCancel = () => {
    setIsAuthVisible(false);
  }

  return (
    <div className='bg-white w-125 rounded-lg' >
        <Formik 
            validationSchema={SignUpValidation}
            initialValues={{
                email: '',
                password: '',   
            }}
            onSubmit={(values) => handleSubmit(values, dispatch, navigate)}
        >

        {({isValid, dirty}) => {
            return (
                <div className='w-full flex'>
                    <div>
                        <button
                        className='hover:bg-gray-light rounded-full ml-4 p-1'
                        onClick={handleCancel}>
                            <Icon name='cancel' size={20}/>
                        </button>
                    </div>
                    <div className='flex flex-col w-full pl-4 pr-8'>
                        <div className='text-2xl font-semibold mb-5 flex justify-center'>
                            {isSignUp ? 'Hesabını oluştur' : 'Giriş Yap'}
                        </div>
                        <Form>
                            <div className='mb-3'>
                                <Field
                                    name="email"
                                    type="email"
                                    placeholder="E-mail"
                                    className="border rounded-sm focus:outline-none focus:ring-2 w-full py-2 px-1"
                                />
                                <ErrorMessage
                                    name='email'
                                    component="small"
                                    className='text-red-600 text-xs'
                                />
                            </div>
                            <div className='mb-3'>
                                <Field
                                    name="password"
                                    type="password"
                                    placeholder="Şifre"
                                    className="border rounded-sm focus:outline-none focus:ring-2 w-full py-2 px-1"
                                />
                                <ErrorMessage
                                    name='password'
                                    component="small"
                                    className='text-red-600 text-xs'
                                />
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    disabled={!isValid || !dirty}
                                    className={`border bg-gray-700 w-full rounded-3xl py-2 text-white font-semibold my-2 ${(!isValid || !dirty) ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-900'}`}
                                >
                                    {isSignUp ? 'Kayıt ol' : 'Giriş Yap'}
                                </button>
                            </div>
                        </Form>
                        <div className='flex'>
                            <p 
                            onClick={() => setIsSignUp(!isSignUp)}
                            className='cursor-pointer text-sm text-primary-base hover:underline ml-auto'>
                                {isSignUp ? 'Giriş yapmak için tıklayınız' : 'Kayıt olmak için tıklayınız'}
                            </p>
                        </div>
                    </div>
                </div>
            )
        }}

      </Formik>
    </div>
  );
};
