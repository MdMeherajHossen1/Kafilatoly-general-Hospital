import React from 'react';
import { createContext } from 'react';
import useFirebase from '../hooks/useFirebase'
import useServices from '../hooks/useServices'
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    const allContext = useFirebase()
    const allServices = useServices()
    return (
        <AuthContext.Provider value={[allContext, allServices]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;