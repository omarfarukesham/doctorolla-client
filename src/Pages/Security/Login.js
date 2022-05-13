import React from 'react';

const Login = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-bold text-2xl">Login</h2>
                    <div className="divider">OR</div>
                    <button className="btn btn-outline">Google LoginIn Now</button>
                </div>
            </div>
        </div>

    );
};

export default Login;