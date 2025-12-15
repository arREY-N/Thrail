import { useRouter } from "expo-router";
import SignUpScreen from "../../features/Auth/screens/SignUpScreen";

export default function SignUpPage(){
    const router = useRouter();

    return (
        <SignUpScreen 
            logIn = {() => router.replace('/')}
            signUp = {() => router.push('/preference')}/>
    )
}