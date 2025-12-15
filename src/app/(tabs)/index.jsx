import { auth } from '@/src/core/config/firebase';
import { signOut } from 'firebase/auth';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function HomeScreen() {

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            
            console.log("Signed out");
        } catch (error){
            console.log(error);
        }
    };
    
    return (
        <View>
            <Text>Home Screen</Text>

            <Pressable onPress={handleSignOut}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
  
});
