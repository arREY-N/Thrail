import { AuthProvider, useAuth } from '@/src/core/context/AuthProvider';
import { logIn } from "@/src/core/firebaseAuthUtils";
import { Redirect, Stack } from 'expo-router';
import { useEffect, useState } from 'react';

// SplashScreen.preventAutoHideAsync();

function RootNavLayout() {
    const { user, isLoading } = useAuth();
    
    const [loggedIn, setLoggedIn] = useState(false);

    // signUp("testemail2003@example.com", "Password@123");
    useEffect(() => {
        logIn("testemail2003@example.com", "Password@123");
    }, [])

    // useEffect(()=>{
    //     if(!isLoading){
    //         SplashScreen.hideAsync();
    //     }        
    // }, [isLoading]);

    console.log("User: ", user);
    console.log("Loading: ", isLoading);
    console.log("LoggedIn: ", loggedIn);

    return (
        <>
            {
                !user ? 
                    (<Redirect href={'/(auth)'}/>):
                    (<Redirect href={'/(tabs)'}/>)
            }
        </>
    );
}

export default function RootLayout(){
    return(
        <AuthProvider>
            <RootNavLayout/>
            <Stack screenOptions={{headerShown: false}}/>
        </AuthProvider>
    )
}
