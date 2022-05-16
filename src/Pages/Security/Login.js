import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init'
import { useForm } from "react-hook-form";
import Loading from '../../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    let navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    const [token] = useToken(user || gUser)

    //showing message ui .................................. 
    let signInError;
    if(error || gError){
        signInError = <p className='text-red-500'>{error?.message}</p>
    }

    //application loading component here ..........................
    if(gLoading || loading){
        return <Loading></Loading>
    }

    //user redirect when user is login..................................
    if(token){
        navigate(from, {replace: true})
    }
  
   
    
    //google auth hooks singIn code here..........................
    const onSubmit = (data) => {
        signInWithEmailAndPassword(data?.email, data?.password);
        // navigate(from, {replace: true})
        
    }


    //Tailwind css, daisy ui, and react form design code ..................
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-bold text-2xl">Login</h2>
                    {/* login from design................ */}
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
                                    name="email"                                  
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
                            {signInError}


                            <input type="submit" className='btn btn-outline w-full mx-w-xs' />
                           
                        </form>
                        Forget Password ? <Link  to="/ResetPass" className="btn btn-link ">Reset Password</Link>
                        <p><small>Are you a New User ?  <Link to='/signup' className="text-secondary text-bold ">New User</Link></small></p>

                    </div>

                    {/* daisyUi divider code and google login button ..................*/}
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline">Google LoginIn Now</button>
                  
                </div>
            </div>
          
        </div >

    );
};

export default Login;