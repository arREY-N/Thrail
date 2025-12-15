import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const SignUpScreen = () => {
    const router = useRouter();

    return (
        <View>
            <Text>SignUpScreen</Text>
            <Pressable onPress={() => router.replace('/')}>
                <Text>Log in instead?</Text>
            </Pressable>
        </View>
    )
}

export default SignUpScreen