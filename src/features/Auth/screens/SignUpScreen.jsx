import { useRouter } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

const SignUpScreen = ({logIn, signUp}) => {
    const router = useRouter();

    return (
        <View>
            <Text>SignUpScreen</Text>
            <Pressable onPress={signUp}>
                <Text>Sign up</Text>
            </Pressable>
            <Pressable onPress={logIn}>
                <Text>Log in instead?</Text>
            </Pressable>
        </View>
    )
}

export default SignUpScreen