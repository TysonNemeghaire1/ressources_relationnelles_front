"use client";
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {jwtDecode} from 'jwt-decode';


interface TokenPayload {
    user: {
      id: string;
      name: string;
      email: string;
    };
  }

// Création du contexte avec le type spécifique
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextType {
    currentUser: User | null; // Supposons que vous avez un type User défini quelque part
    token: string;
    login: (token: string, userDetails: User) => void;
    logout: () => void;
    setCurrentUser:any
}

type User = {
    id: string;
    name: string;
    email: string;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [token, setToken] = useState('');

    const login = (token: string) => {
        setToken(token);
        // const decoded = jwtDecode<TokenPayload>(token);
        // setCurrentUser(decoded.user); 
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