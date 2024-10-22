'use client'
import { createContext, useContext, useReducer, useEffect } from 'react';
import { loginUser, logoutUser, registerUser } from '@/services/auth';

const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    token: null,
    username: null,
};


function authReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
            return { isAuthenticated: true, token: action.payload.token, username: action.payload.username };
        case 'LOGOUT':
            return { isAuthenticated: false, token: null, username: null };
        default:
            return state;
    }
}


export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);


    const login = async (credentials) => {
        try {
            const data = await loginUser(credentials);
            if (data.auth_token) {
                localStorage.setItem('authToken', data.auth_token);
                dispatch({ type: 'LOGIN', payload: { token: data.auth_token, username: credentials.username } });
            } else {
                throw new Error("Login failed: No token received");
            }
        } catch (error) {
            console.error("Login Error:", error.message || error);
        }
    };


    const logout = () => {
        localStorage.removeItem('authToken');
        dispatch({ type: 'LOGOUT' });
    };


    return (
        <AuthContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


export const useAuth = () => {
    return useContext(AuthContext);
};
