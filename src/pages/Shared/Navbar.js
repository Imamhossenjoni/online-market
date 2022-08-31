import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const menuItems = <>
        <li><Link to='/home'> Home</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        {user && <li><Link to='/addIReview'>Review</Link></li>}
        {user && <li><Link to='/addIteam'>AddItem</Link></li>}
        {/* {user && <li><Link to='/manageDelete'>Manage</Link></li>} */}
        {!user ? <li><Link to='/login'>Login</Link></li>:
        <button onClick={()=>signOut(auth)}>LogOut</button>}
    </>
    return (
        <div className='px-8 bg-secondary' style={{border:'1px solid rgba(255, 255, 255, .5)'}}>
            <div class="navbar bg-secondary text-2xl">
                <div class="navbar-start ">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-accent rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-2xl text-white">Online-Market</a>
                </div>
                <div class="navbar-end text-white hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                {/* <div class="navbar-end">
                    <a class="btn">Get started</a>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;