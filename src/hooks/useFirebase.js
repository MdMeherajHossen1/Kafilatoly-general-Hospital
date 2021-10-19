import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from 'react'
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication()
const useFirebase = () => {
    // user and error state
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    //  auth and provider
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    //  handleOnBlurBtn
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }

    //   handlePassWordChangebtn

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    // signIn google btn handler
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)


    }

    // handleUserLogin
    const handleUserLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // handleUserRegister
    const handleUserRegister = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    };






    // user observer
    useEffect(() => {
        const unSubscriber = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
        })
        return () => unSubscriber
    }, [])

    // signOut handler
    const handleSignOut = () => {
        signOut(auth)
            .then(() => setUser({}))
    }

    return {
        user, error, handleGoogleSignIn, handleSignOut,
        handleEmailChange, handlePasswordChange, handleUserLogin,
        handleUserRegister
    }
}

export default useFirebase;