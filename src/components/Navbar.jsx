import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import userIcon from "../assets/user.png"
import { AuthContext } from '../Provider/AuthProvider';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    return (
        <div className='flex justify-between'>
            <div className="">{user && user.name}</div>
            <div className="">{user && user.email}</div>
            <div className="nav space-x-5 items-center">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className=''>
                <img src={userIcon} alt="" />
                </div>
                {
                    user && user?.email ? (
                    <button onClick={logOut} className='btn btn-neutral rounded-none'>Log-Out</button>
                    ) : (
                        <Link to="/auth/login" className='btn btn-neutral rounded-none'>Login</Link>
                    )
                }
                   
                    
            </div>
        </div>
    );
};

export default Navbar;