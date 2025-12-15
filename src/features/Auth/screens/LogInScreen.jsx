import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import { logIn } from '../../../core/firebaseAuthUtils';

const LogInScreen = () => {
    const router = useRouter();
    
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const handleLogIn = () => {
        logIn("testemail2003@example.com", "Password@123"); // for testing
        //logIn(email, password);
    }

    return (
        <View>
            <Text>LogInScreen</Text>
            <Pressable onPress={handleLogIn}>
                <Text>LOG IN</Text>
            </Pressable>
            <Pressable onPress={() => router.push('/signup')}>
                <Text>SIGN UP</Text>
            </Pressable>
        </View>
    )
}

export default LogInScreen