import { Text, View } from 'react-native';

const HomeScreen = ({handleSignOut}) => {
    return (
        <View>
            <Text>Home Screen</Text>

            <Pressable onPress={handleSignOut}>
                <Text>Sign out</Text>
            </Pressable>
        </View>
    );
}

export default HomeScreen