import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth'
import app from '../Firebase/firebase.config'

export const AuthContext = createContext();
const app = getAuth(app)

const AuthProvider = ({ children }) => {
    const user = { name: "arif", age: 4 };
    const authInfo = { user }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;