import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useState, useEffect } from 'react'

const useFirebase = () => {
    // user and error state
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    //  auth and provider
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()

    // signIn google btn handler
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => setUser(result.user))
            .then(error => setError(error.message))
    }

    // signOut handler
    const handleSignOut = () => {
        signOut(auth)
            .then(() => setUser({}))
    }

    return {
        user, error, handleGoogleSignIn, handleSignOut
    }
}

export default useFirebase;