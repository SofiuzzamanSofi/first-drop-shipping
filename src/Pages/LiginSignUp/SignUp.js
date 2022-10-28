import React, { useContext, useState } from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import { AuthContext } from '../../UseContext/UseContext';

const SignUp = () => {

    const [errorUse, setErrorUse] = useState(null);
    // console.log(errorUse);

    const navigate = useNavigate();

    const location = useLocation();
    // console.log(location.pathname);
    const locationWithReplaceTitle = location.pathname.replace('/', '');
    const title = useTitle(locationWithReplaceTitle);

    const { googleSignIn, createUser, loginUser } = useContext(AuthContext);



    const inputHandleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value
        const password = form.password.value;
        const checkbox = form.checkbox;
        if (!(location.pathname === "/signup")) {
            if (!checkbox.checked) {
                setErrorUse('pls check this option to agree our terms & conditions.')
                console.log('check tik dewa nai');
                return;
            }
            else {
                console.log('is log in paise ???')
                loginUser(email, password);
                navigate('/')
                return;
            }
        }

        createUser(name, email, password);
        navigate('/')
    }



    return (
        <div className="container px-6 py-12 h-full">
            <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                    <form onSubmit={inputHandleSubmit}>


                        {
                            location.pathname === "/signup" ? <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Name" name='name'
                                />
                            </div>
                                :
                                ""
                        }



                        <div className="mb-6">
                            <input
                                type="email"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Email address" name='email'
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Password" name='password'
                            />
                        </div>



                        {location.pathname === "/signup" ?

                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                                Sign UP / Register
                            </button>
                            :

                            <><div className="flex justify-between items-center mb-6">
                                <div className="form-group form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                        id="exampleCheck3" name='checkbox'

                                    />
                                    <label className="form-check-label inline-block text-gray-800" htmlFor="exampleCheck2"
                                    >Remember me</label>
                                </div>
                                <Link to="" className="text-blue-600 hover:text-blue-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out">

                                    Forgot password?
                                </Link>
                            </div>
                                <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                                    Sign in
                                </button>

                            </>
                        }
                    </form>


                    {location.pathname === "/signup" ?
                        <div>
                            <p className='mt-4 text-red-900'>Already Have a account ? </p>
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                                <Link to="/signin">Sign In Pls</Link>
                            </button>
                        </div>

                        :
                        <div>
                            <p className='mt-4 text-red-900'>Dont Have A account ? </p>
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                                <Link to="/signup">Sign Up Pls.</Link>
                            </button>
                        </div>
                    }





                    {/* আমার স্বপ্নের অর ---------------   OR   ---------------- */}
                    <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"                            >
                        <p className="text-center font-semibold mx-4 mb-0">OR</p>
                    </div>





                    <button onClick={() => googleSignIn(navigate)} type="submit" className="flex justify-center gap-2 items-center inline-block px-7 py-3 bg-blue-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                        <FaGoogle />   Continue with Google
                    </button>
                    <button type="submit" className="flex justify-center gap-2 my-4 inline-block px-7 py-3 bg-blue-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                        <FaFacebook />  Continue with Facebook
                    </button>
                    <button type="submit" className="flex justify-center gap-2 inline-block px-7 py-3 bg-blue-800 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full ">
                        <FaGithub /> Continue with Github
                    </button>

                </div>
            </div>
        </div >
    );
};

export default SignUp;