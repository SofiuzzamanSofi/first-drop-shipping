import React, { useContext } from 'react';
import { FaAlignJustify } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../UseContext/UseContext';



const Header = () => {


    const { logOut, user } = useContext(AuthContext);

    // const location = useLocation();
    // const locationPathname = location.pathname;
    // console.log(locationPathname);



    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden bg-gray-700">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg> */}
                        <FaAlignJustify className='h-6' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>Products</a></li>
                        <li><a>Country</a></li>
                        <li tabIndex={0}>
                            <a>
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Mens</a></li>
                                <li><a>Omens</a></li>
                                <li><a>Childrens</a></li>
                            </ul>
                        </li>
                        <li><a>Grocery</a></li>
                        <li><a>Electronic</a></li>
                        <li><a>Chemicals</a></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">First Drop Shipping</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a>Home</a></li>
                    <li><a>Products</a></li>
                    <li><a>Country</a></li>
                    <li tabIndex={0}>
                        <a>
                            Category
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2">
                            <li><a>Mens</a></li>
                            <li><a>Omens</a></li>
                            <li><a>Childrens</a></li>
                        </ul>
                    </li>
                    <li><a>Grocery</a></li>
                    <li><a>Electronic</a></li>
                    <li><a>Chemicals</a></li>
                </ul>
            </div>
            {!(user && user.uid) ?
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded w-24">
                    <Link to="/signin">Sign In</Link>
                </button>
                :
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full bg-gray-50">
                                <img src={user.photoURL ? user.photoURL : "https://img.icons8.com/metro/26/000000/name.png"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            {user.displayName && <li><a>{user.displayName}</a></li>}
                            {user.email && <li><a>{user.email}</a></li>}
                            <li><a>Email Status: {user.emailVerified ? "verified" : "Not-Verified"} </a></li>
                            <li onClick={logOut}><Link to="/">Log Out</Link></li>
                        </ul>
                    </div>
                </div>
            }
        </div>
    );
};

export default Header;