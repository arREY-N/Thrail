import { Pressable, Text, View } from 'react-native';

const PreferenceScreen = ({ questions, answer, onSubmit }) => {
    return (
        <View>
            <Text>Preference Screen</Text>
            <Pressable onPress={onSubmit}>
                <Text>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default PreferenceScreen