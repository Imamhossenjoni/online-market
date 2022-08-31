import { async } from '@firebase/util';
import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from './Loading';

const Login = () => {
    const [emails, setEmails] = useState('')
    //sign In with email and Password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    //signIn with Google
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    //
    const [sendPasswordResetEmail, sending, fError] = useSendPasswordResetEmail(
        auth
    );
    const handleBlurEmail = event => {
        setEmails(event.target.value);
        console.log(emails);
    }
    const handleLogin = event => {
        event.preventDefault();
        const name = event.target.name?.value;
        console.log(name);
        const email = event.target.email?.value;
        const pass = event.target.pass.value;
        console.log(email, pass);
        signInWithEmailAndPassword(email, pass);
    }
    //handle forget password
    const resetPassword = async () => {
        await sendPasswordResetEmail(emails);
        toast.success('Sent email');
        // alert('Cheak your Email')
    }
    // const resetPassword=()=>{
    //     sendPasswordResetEmail(auth,emails)
    //     .then(()=>{
    //         console.log('')
    //     })
    // }
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/"
    if (user || gUser) {
        navigate(from, { replace: true })
    }
    if (loading || gLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=''>
            <div className='flex  justify-center items-center py-5  '>
                <div className="card w-96 bg-base-100 shadow-2xl ">
                    <div className="card-body ">
                        <h2 className='text-3xl font-bold py-4 text-secondary'>Please Login</h2>
                        <form className='text-left ' onSubmit={handleLogin}>
                            <label className='text-left text-xl text-base-200'>Your Name:</label>
                            <input type="text" name='name' placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs " />
                            <label className='text-left text-xl text-base-200'>Email:</label>
                            <input type="email" name='email' onBlur={handleBlurEmail} placeholder="abc@gmail.com" className="outline-hidden input input-bordered w-full max-w-xs mt-2" />
                            <label className='text-left text-xl text-base-200'>Password</label>
                            <input type="password" name='pass' placeholder="Password must be 8 character or than" className="outline-none   mt-2 input input-bordered w-full max-w-xs" />
                            <input type="submit" value='Login' className="outline-none  mt-4 bg-secondary hover:bg-red-500 text-white font-bold text-xl input input-bordered w-full max-w-xs" />
                            <span className='text-secondary  '>New to Online-Market? <Link className='text-primary' to='/registration'>Please Registration</Link></span><br />
                            <p>Forget Password? <button className='text-secondary font-bold' onClick={resetPassword}>Reset Password</button></p>
                        </form>
                        <div className="divider">OR</div>
                        <button onClick={() => signInWithGoogle()} className="btn mt-5 p-2 btn= btn-outline hover:bg-secondary  text-xl">Continue with Google</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;