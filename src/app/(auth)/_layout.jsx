import { Stack } from "expo-router";

export default function AuthLayout(){
    return(
        <Stack>
            <Stack.Screen
                name = 'index'
                options = {{
                    title: 'Log in',
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name = 'signup'
                options = {{
                    title: 'Sign up',
                    headerShown: false,
                }}
            />
        </Stack>
    )
}