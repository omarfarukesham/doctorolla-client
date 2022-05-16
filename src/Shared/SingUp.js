import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../firebase.init'
import { useForm } from "react-hook-form";
import Loading from './Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../Hooks/useToken';


const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    let navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const[token] = useToken(user || gUser);
    
    
    //showing message ui .................................. 
    let singUperror;
    if(error || gError || updateError){
        singUperror = <p className='text-red-500'>{error.message}</p>
    }

    //application loading component here ..........................
    if(gLoading || loading || updating){
        return <Loading></Loading>
    }

    if(token){
        navigate(from, {replace: true})    
    }
    //google auth hooks singIn code here..........................
    const onSubmit = async(data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // navigate('/appointment')
    }

    //Tailwind css, daisy ui, and react form design code ..................
    return (
        <div className="flex justify-center h-screen items-center">

            {/* daisy ui/ tailwind css library and react from combinely has made for registration purpose........................... */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">

                    <h2 className="text-center text-bold text-2xl">Sing Up</h2>
                    {/* login from design................ */}
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* name field code here..................... */}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'required name'
                                        }
                                    })}
                                    placeholder="Name"
                                    className="input input-bordered w-full max-w-xs"
                                />
                                <label className="label">
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>

                            </div>

                            {/* email field code here..................... */}
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

                              {/* password field code here..................... */}
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
                            
                            {/* showing UI error message from auth .......................... */}
                            {singUperror}

                            
                            <input type="submit" value="Sign Up" className='btn btn-outline w-full mx-w-xs' />
                        </form>

                        {/* registration form code end here................................. */}

                        <p><small>Already Account ?  <Link to='/login' className="text-secondary text-bold ">Login Please</Link></small></p>

                    </div>

                    {/* daisyUi divider code and google login button ..................*/}
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Google Sing up.....</button>
                  
                </div>
            </div>
        </div >

    );
};

export default SignUp;