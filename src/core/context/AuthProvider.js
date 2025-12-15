import { auth } from '@/src/core/config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    user: null,
    isLoading: true
});

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    console.log("Auth Provider working");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            console.log("Firebase User: ", firebaseUser);
            setUser(firebaseUser);
            setIsLoading(false);
            console.log("Auth state changed. User is ", firebaseUser ? 'logged In' : 'logged out'); 
        });

        return unsubscribe;
    }, []);

    const value = {
        user,
        isLoading
    }

    return <AuthContext.Provider value={value}>{ children }</AuthContext.Provider>
}