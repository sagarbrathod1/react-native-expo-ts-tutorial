import { Text, View } from 'react-native';

type WelcomeProps = {
    name: string,
    age: number,
    professor: boolean   
}

export default function Welcome(props: WelcomeProps) {
    return (
        <View> 
            <Text>Welcome {props.name}!</Text>
            <Text>You are {props.age}!</Text>
            <Text>You are {props.professor ? "a professor" : "not a professor"}!</Text>
        </View>
    )
}