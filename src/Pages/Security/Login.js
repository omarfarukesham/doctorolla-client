import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const onSubmit = (data) => {
        // event.preventDefault()
        signInWithEmailAndPassword(data.email, data.password);

    }
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-bold text-2xl">Login</h2>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>

                            </div>


                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: {
                                            value: true,
                                            message: 'required password'
                                        },
                                        minLength: {
                                            // value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                            value: 6,
                                            message: 'Min Six Charters password......'
                                        }
                                    })}
                                    placeholder="Your password"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>

                            </div>

                            <input type="submit" className='btn btn-outline w-full mx-w-xs' />
                        </form>

                        {/* <form onSubmit={handleSubmit(onSubmit)}>
                        <input />


                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                       
                    </form> */}


                    </div>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Google LoginIn Now</button>
                </div>
            </div>
        </div >

    );
};

export default Login;