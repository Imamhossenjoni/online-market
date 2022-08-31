import React, { useState } from 'react';
import auth from '../../firebase.init'
import {useNavigate} from 'react-router-dom'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from './Loading';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    //handle Register
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        setName(name);
        const emaill = event.target.email.value;
        setEmail(emaill);
        const pass = event.target.pass.value;
        setPassword(pass);
        console.log(password)
        createUserWithEmailAndPassword(email,password);
    }
    const navigate=useNavigate();
    if(user || gUser){
        navigate('/home');
    }
    if(loading ||gLoading){
        return <Loading></Loading>
    }

    return (
        <div className='flex  justify-center items-center py-5 '>
            <div class="card w-96 bg-base-100 shadow-2xl ">
                <div class="card-body">
                    <form onSubmit={handleRegister} className='text-left'>
                        <h2 className='text-3xl font-bold py-4 text-info'>Please Registration</h2>
                        <label className='text-left text-xl text-base-200'>Your Name:</label>
                        <input type="text" name='name' placeholder="Enter Your Name" class="input input-bordered w-full max-w-xs " />
                        <label className='text-left text-xl text-base-200'>Email:</label>
                        <input type="email" name='email' placeholder="abc@gmail.com" class="input input-bordered w-full max-w-xs mt-2" />
                        <label className='text-left text-xl text-base-200'>Password</label>
                        <input type="password" name='pass' placeholder="Password must be 8 character or than" class=" mt-2 input input-bordered w-full max-w-xs" />
                        <input type="submit" value='Registration' class="mt-4 bg-info hover:bg-primary text-white font-bold text-xl input input-bordered w-full max-w-xs" />
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={()=>signInWithGoogle()} class="btn mt-5 p-2 btn-outline text-xl">Continue with Google</button>

                </div>
            </div>
        </div>
    );
};

export default Registration;