import { auth } from '@/src/core/config/firebase';
import { useAuth } from '@/src/core/context/AuthProvider';
import { useRouter } from 'expo-router';
import { signOut } from 'firebase/auth';


export default function HomeScreen() {
    const { user } = useAuth();
    const router = useRouter();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            router.replace('/(auth)')
        } catch (error){
            console.log(error);
        }
    };
    
    return (
        <HomeScreen handleSignOut = {handleSignOut}/>
    );
}