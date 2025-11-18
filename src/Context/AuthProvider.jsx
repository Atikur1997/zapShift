import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../FireBase/Firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

const googleAuthProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleAuthProvider);
    }

    //observe user state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => { unsubscribe() }
    }, [])


    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    };

    const authInfo = {
        user,
        setUser,
        registerUser,
        signInUser,
        signInGoogle,
        loading,
        setLoading,
        logOutUser

    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
