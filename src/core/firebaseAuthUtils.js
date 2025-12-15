import { auth } from '@/src/core/config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const signUp = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
        );

        return userCredential.user;
    } catch (error){
        console.error('Firebase Sign up error', error);
        throw error;
    }
}

export const logIn = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(
            auth,
            email,
            password,
        );

        return userCredential.user;
    } catch (error){
        console.error('Firebase Sign In error', error);
        throw error;
    }
}