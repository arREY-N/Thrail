import { useRouter } from "expo-router";
import { useState } from "react";
import PreferenceScreen from "../../features/Auth/screens/PreferenceScreen";

export default function preference(){
    const router = useRouter();
    
    const [questions, setQuestions] = useState({
        'q1': {
            text: 'Preference question 1',
            options: ['opt a', 'opt b', 'opt c']
        },
        'q2': {
            text: 'Preference question 2',
            options: ['opt a', 'opt b', 'opt c']
        },
        'q3': {
            text: 'Preference question 3'
        }
    });

    const [answer, setAnswer] = useState({
        'q1': { answer: []},
        'q2': { answer: []},
        'q3': { answer: []},
    });

    const onSetAnswer = (answer_id, answer) => {
        setAnswer(prevResponses => {
            return {
                ...prevResponses,
                [answer_id]: {
                    answer: answer
                }
            }
        });
    }

    const onSubmit = () => {
        console.log('Submit');
        router.push('/(tabs)');
    }

    return(
        <PreferenceScreen questions={questions} answer={answer} onSubmit={onSubmit}/>
    )
}