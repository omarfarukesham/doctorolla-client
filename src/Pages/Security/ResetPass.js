import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { async } from '@firebase/util';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {
    const [resetErr, setRestErr] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const navigate = useNavigate()

    const reset = async (data) => {
        const email = data.email
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Email has sent, please check you Email and LoginIn');
            setRestErr('')
            navigate('/login')
        
        } else {
            setRestErr('Please Give your Authentic Email')
        }
    }


    return (
        <div className="flex justify-center h-screen items-center">
           
            <div className="card w-96 bg-base-100 shadow-xl">
            <ToastContainer />
                <div className="card-body">
                    <h2 className="text-center text-bold text-2xl">Reset Password</h2>
                    {resetErr}
                    <div>
                        <form onSubmit={handleSubmit(reset)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: 'Input the valid email'
                                        },
                                        pattern: {
                                            value: /[A-Za-z]{3}/,
                                            message: 'Set your authentic email......'
                                        }
                                    })}
                                    placeholder="Your Email"
                                    name="email"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>

                            </div>
                            <input type="submit" className='btn btn-outline w-full mx-w-xs' />
                        </form>
                        
                    </div>
                </div>
            </div>

        </div >
    );
};

export default ResetPass;