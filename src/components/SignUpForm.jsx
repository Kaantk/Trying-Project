import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { SignUpValidation } from '../validations/SignUpValidation';
import { registerUser } from '../store/actions/Auth';
import { useDispatch } from 'react-redux';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  return (
    <div className='bg-white w-125 px-5 py-4 rounded-lg' >
        <Formik 
            validationSchema={SignUpValidation}
            initialValues={{
                email: '',
                password: '',   
            }}
            onSubmit={(values) => registerUser(values, dispatch)}
        >

        {({isValid, dirty}) => {
            return (
                <div className='w-full flex'>
                    <div className='flex flex-col w-full'>
                        <div className='text-2xl font-semibold mb-5 flex justify-center'>
                            Hesabını oluştur
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
                                    className={`border bg-gray-dark w-full rounded-3xl py-2 text-white font-semibold my-2 ${(!isValid || !dirty) ? 'opacity-60 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                                >
                                    Kayıt ol
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
            )
        }}

      </Formik>
    </div>
  );
};
