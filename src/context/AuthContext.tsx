"use client";
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';


interface TokenPayload {
    user: {
        id: string;
        name: string;
        email: string;
    };
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
    id: any;
    currentUser: User | null; // Supposons que vous avez un type User défini quelque part
    token: string;
    login: (token: string) => void;
    logout: () => void;
    setCurrentUser:any
}

type User = {
    lastName: any;
    firstName: any;
    id: string;
    email: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<any | null>(null);
    const [token, setToken] = useState('');

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            try {
                const decoded: TokenPayload = jwtDecode(storedToken);
                setCurrentUser(decoded);
            } catch (error) {
                console.log("Erreur lors du décodage du token:", error);
            }
        }
    }, []);

    const login = (token: string) => {
        setToken(token);
        try {
            const decoded: TokenPayload = jwtDecode(token);
            setCurrentUser(decoded);
        } catch (error) {
            console.log("Erreur lors du décodage du token:", error);
        }
        localStorage.setItem('token', token);
    };

    const logout = () => {
        setToken('');
        setCurrentUser(null);
        localStorage.removeItem('token');
    };
    return (
        <AuthContext.Provider value={{ currentUser, token, login, logout, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth doit être utilisé au sein d\'un AuthProvider');
    }
    return context;
};