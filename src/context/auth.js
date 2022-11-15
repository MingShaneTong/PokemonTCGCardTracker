import React, { useEffect, useState } from "react";
import { auth } from "../api/firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged((userCred) => {
            setUser(userCred);
        });
    }, []);

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );
};