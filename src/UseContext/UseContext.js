import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();






const UseContext = ({ children }) => {


    const [user, setUser] = useState(null);
    console.log(user);



    // sign in with google ;  sign Up name email & password, update name, verify email ; login email, reset password and password,  

    const googleSignIn = (navigate) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/');
            })
            .catch(error => {
                console.log('Google pop Up sign in Error', error);
            })
    }
    const createUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("user succesfully created", user);
                namePhotoUpdate(name);
                verifyEmail();
            })
            .catch(error => {
                console.log(error);
            });
    }
    const namePhotoUpdate = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
                const user = result.user;
                console.log(user);
                console.log("pro name is uploded");
                console.log(user);
            })
            .catch(error => {
                console.log("why not name update", error);
            });
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                console.log('verification email send');
            })
            .catch(error => {
                console.log("why not verify email send", error);
            });
    }
    const passwordReset = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
                console.log('send password reset element');
            })
            .catch(error => {
                console.log("why not reset password send? ", error);
            });
    }
    const loginUser = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log("Logign Success Fully", user);
            })
            .catch(error => {
                console.log("Logign Success not?? check it", error);
            });

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
                console.log('signOut Succes');
            })
            .catch(error => {
                console.log("bokachoda error hoi? log out hoi nah kan", error);
            })
    }




    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => unSubscribe();
    }, [])



    const authInfo = { googleSignIn, createUser, namePhotoUpdate, verifyEmail, passwordReset, loginUser, logOut, user }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;